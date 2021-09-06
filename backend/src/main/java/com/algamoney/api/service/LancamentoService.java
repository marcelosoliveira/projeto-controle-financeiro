package com.algamoney.api.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.algamoney.api.model.Lancamento;
import com.algamoney.api.model.Pessoa;
import com.algamoney.api.repository.LancamentoRepository;
import com.algamoney.api.repository.PessoaRepository;
import com.algamoney.api.service.exception.PessoaInexistenteOuInativaException;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class LancamentoService {
	
	private PessoaRepository pessoaRepository;
	
	private LancamentoRepository lancamentoRepository;
	
	public Lancamento salvarLancamento(Lancamento lancamento) {
		Optional<Pessoa> pessoa = pessoaRepository.findById(lancamento.getPessoa().getCodigo());
		
		if (!pessoa.isPresent() || pessoa.get().isInativo()) {
			throw new PessoaInexistenteOuInativaException();
		}
		
		return lancamentoRepository.save(lancamento);
	}

}
