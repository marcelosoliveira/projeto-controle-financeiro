package com.algamoney.api.controller;

import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.algamoney.api.event.RecursoCriadoEvent;
import com.algamoney.api.model.Lancamento;
import com.algamoney.api.repository.LancamentoRepository;
import com.algamoney.api.repository.filter.LancamentoFilter;
import com.algamoney.api.service.LancamentoService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/v1/lancamentos")
@AllArgsConstructor
public class LancamentoController {
	
	private LancamentoService lancamentoService;
	
	private LancamentoRepository lancamentoRepository;
	
	private ApplicationEventPublisher publisher;
	
	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_LANCAMENTO') and #oauth2.hasScope('read')")
	public ResponseEntity<Page<Lancamento>> pesquisar(LancamentoFilter lancamentoFilter, Pageable pageable) {
		Page<Lancamento> listLancamento = lancamentoRepository.filtrar(lancamentoFilter, pageable);
		
		return ResponseEntity.ok(listLancamento);
	}
	
	@GetMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_LANCAMENTO') and #oauth2.hasScope('read')")
	public ResponseEntity<Lancamento> getByLancamento( @PathVariable Long codigo) {
		Optional<Lancamento> lancamento = lancamentoRepository.findById(codigo);
		
		return ResponseEntity.ok(lancamento.get());
	}
	
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_LANCAMENTO') and #oauth2.hasScope('write')")
	public ResponseEntity<Lancamento> cadastraLancamento(@Valid @RequestBody Lancamento lancamento,
			HttpServletResponse response) {
		Lancamento lancamentoSalva = lancamentoService.salvarLancamento(lancamento);
		
		publisher.publishEvent(new RecursoCriadoEvent(this, response, lancamento.getCodigo()));		
		
		return ResponseEntity.status(HttpStatus.CREATED).body(lancamentoSalva);
	}
	
	@DeleteMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_REMOVER_LANCAMENTO') and #oauth2.hasScope('write')")
	public ResponseEntity<Lancamento> deletaLancamentoPeloCodigo(@PathVariable Long codigo) {
		lancamentoRepository.deleteById(codigo);
		
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}

}
