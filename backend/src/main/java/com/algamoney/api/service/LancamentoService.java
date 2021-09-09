package com.algamoney.api.service;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
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
		validaPessoa(lancamento);
		
		return lancamentoRepository.save(lancamento);
	}
	
	public Lancamento atualizar(Long codigo, Lancamento lancamento) {
		Lancamento lancamentoSalvo = buscarLancamentoExistente(codigo);
		if (!lancamento.getPessoa().equals(lancamentoSalvo.getPessoa())) {
			validaPessoa(lancamento);
		}
		
		BeanUtils.copyProperties(lancamento, lancamentoSalvo, "codigo");
		
		return lancamentoRepository.save(lancamentoSalvo);
	}

	private Lancamento buscarLancamentoExistente(Long codigo) {
		Optional<Lancamento> lancamento = lancamentoRepository.findById(codigo);
		
		if (lancamento.isEmpty()) {
			throw new IllegalArgumentException("Lancamento não encontrado! CODIGO: " + codigo);
		}
		
		return lancamento.get();		
	}

	private void validaPessoa(Lancamento lancamento) {		
		Optional<Pessoa> pessoa = null;
		if (lancamento.getPessoa().getCodigo() != null) {
			pessoa = pessoaRepository.findById(lancamento.getPessoa().getCodigo());
		}
		
		if (!pessoa.isPresent() || pessoa.get().isInativo()) {
			throw new PessoaInexistenteOuInativaException();
		}
	}

}
