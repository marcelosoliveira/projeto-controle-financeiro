package com.algamoney.api.service;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.algamoney.api.model.Pessoa;
import com.algamoney.api.repository.PessoaRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PessoaService {

	private PessoaRepository pessoaRepository;

	public Pessoa atualizaPessoaService(Long codigo, Pessoa pessoa) {
		Optional<Pessoa> optionalPessoa = buscarPessoaPeloCodigo(codigo);
		BeanUtils.copyProperties(pessoa, optionalPessoa.get(), "codigo");
		
		return pessoaRepository.save(optionalPessoa.get());
	}


	public void atualizarPropriedadeAtivoService(Long codigo, @Valid Boolean ativo) {
		Optional<Pessoa> pessoa = buscarPessoaPeloCodigo(codigo);
		pessoa.get().setAtivo(ativo);
		System.out.println(pessoa);
		pessoaRepository.save(pessoa.get());				
	}

	private Optional<Pessoa> buscarPessoaPeloCodigo(Long codigo) {
		Optional<Pessoa> optionalPessoa = pessoaRepository.findById(codigo);
		
		if (!optionalPessoa.isPresent())
			throw new EmptyResultDataAccessException(1);
		
		return optionalPessoa;
	}
	
}
