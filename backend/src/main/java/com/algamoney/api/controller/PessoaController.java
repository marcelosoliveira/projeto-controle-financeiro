package com.algamoney.api.controller;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.algamoney.api.event.RecursoCriadoEvent;
import com.algamoney.api.model.Pessoa;
import com.algamoney.api.path.RecuperaPathRequisicao;
import com.algamoney.api.repository.PessoaRepository;
import com.algamoney.api.service.PessoaService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/v1/pessoas")
@AllArgsConstructor
public class PessoaController {

	private PessoaRepository pessoaRepository;
	
	private PessoaService pessoaService;

	private ApplicationEventPublisher publisher;

	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_PESSOA') and #oauth2.hasScope('read')")
	public List<Pessoa> listAllPessoas(@RequestParam(value = "nome", defaultValue = "", required = false) String nome) {
		return pessoaRepository.findByNome(nome);
	}

	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_PESSOA') and #oauth2.hasScope('write')")
	public ResponseEntity<Pessoa> cadastraPessoa(@Valid @RequestBody Pessoa pessoa, HttpServletResponse response) {
		Pessoa pessoaSalva = pessoaRepository.save(pessoa);

		publisher.publishEvent(new RecursoCriadoEvent(this, response, pessoaSalva.getCodigo()));

		return ResponseEntity.status(HttpStatus.CREATED).body(pessoaSalva);
	}

	@GetMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_PESSOA') and #oauth2.hasScope('read')")
	public ResponseEntity<Pessoa> buscarPessoaPeloCodigo(@PathVariable Long codigo) {
		new RecuperaPathRequisicao().RecuperaUri();
		Optional<Pessoa> pessoa = pessoaRepository.findById(codigo);

		return pessoa.isPresent() ? ResponseEntity.ok(pessoa.get()) : ResponseEntity.notFound().build();
	}

	@DeleteMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_REMOVER_PESSOA') and #oauth2.hasScope('write')")
	public ResponseEntity<Object> deletaPessoaPeloCodigo(@PathVariable Long codigo) {
		new RecuperaPathRequisicao().RecuperaUri();
		pessoaRepository.deleteById(codigo);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
	@PutMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_PESSOA') and #oauth2.hasScope('write')")
	public ResponseEntity<Pessoa> atualizarPessoa(@Valid @RequestBody Pessoa pessoa, @PathVariable Long codigo) {		
		Pessoa pessoaAtualizada = pessoaService.atualizaPessoaService(codigo, pessoa);
		return ResponseEntity.ok(pessoaAtualizada);
	}
	
	@PutMapping("/{codigo}/ativo")
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_PESSOA') and #oauth2.hasScope('write')")
	public ResponseEntity<Object> atualizarPropriedadeAtivo(@RequestBody Boolean ativo, @PathVariable Long codigo) {		
		pessoaService.atualizarPropriedadeAtivoService(codigo, ativo);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
}
