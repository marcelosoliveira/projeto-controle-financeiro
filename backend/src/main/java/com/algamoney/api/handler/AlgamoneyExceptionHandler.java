package com.algamoney.api.handler;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.flywaydb.core.internal.util.ExceptionUtils;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.algamoney.api.service.exception.PessoaInexistenteOuInativaException;

import lombok.AllArgsConstructor;
import lombok.Data;

@ControllerAdvice
@AllArgsConstructor
public class AlgamoneyExceptionHandler extends ResponseEntityExceptionHandler {
	
	private MessageSource messageSource;	

	@Override
	protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		
		String mensagemUsuario = messageSource.getMessage("message.invalid", null, LocaleContextHolder.getLocale());
		String mensagemDesenvolvedor = ex.getCause() != null ? ex.getCause().toString() : ex.toString();
		List<Erro> erros = Arrays.asList(new Erro(mensagemUsuario, mensagemDesenvolvedor));
		
		return handleExceptionInternal(ex, erros, headers, status, request);
	}
	
	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		
		List<Erro> erros = criarListaErros(ex.getBindingResult());
		return handleExceptionInternal(ex, erros, headers, status, request);
	}
	
	private List<Erro> criarListaErros(BindingResult bindingResult) {
		List<Erro> erros = new ArrayList<>();
		
		for(FieldError error : bindingResult.getFieldErrors()) {
			String mensagemUsuario = messageSource.getMessage(error, LocaleContextHolder.getLocale());
			String mensagemDesenvolvedor = error.toString();
			erros.add(new Erro(mensagemUsuario, mensagemDesenvolvedor));			
		}
		return erros;			
	}
	
	@ExceptionHandler(EmptyResultDataAccessException.class)
	public ResponseEntity<Object> handlerEmptyResultDataAccessException(
			EmptyResultDataAccessException ex, WebRequest request) {
		
		String mensagemUsuario = messageSource.getMessage("recurso.nao-encontrado", null, LocaleContextHolder.getLocale());
		String mensagemDesenvolvedor = ex.toString();
		List<Erro> erros = Arrays.asList(new Erro(mensagemUsuario, mensagemDesenvolvedor));
		
		return handleExceptionInternal(ex, erros , new HttpHeaders(), HttpStatus.NOT_FOUND, request);
	}
	
	@ExceptionHandler({ DataIntegrityViolationException.class })
	public ResponseEntity<Object> handlerDataIntegrityViolationException (
			DataIntegrityViolationException ex, WebRequest request) {
		
		String mensagemUsuario = messageSource.getMessage("recurso.operacao-nao-permitida", null, LocaleContextHolder.getLocale());
		String mensagemDesenvolvedor = ExceptionUtils.getRootCause(ex).getMessage();
		List<Erro> erros = Arrays.asList(new Erro(mensagemUsuario, mensagemDesenvolvedor));
		
		return handleExceptionInternal(ex, erros , new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
	}
	
	@ExceptionHandler(PessoaInexistenteOuInativaException.class)
	public ResponseEntity<Object> handlerPessoaInexistenteOuInativaException(PessoaInexistenteOuInativaException ex) {
		String mensagemUsuario = messageSource.getMessage("pessoa.inexsitente-ou-inativa", null, LocaleContextHolder.getLocale());
		String mensagemDesenvolvedor = ex.toString();
		List<Erro> erros = Arrays.asList(new Erro(mensagemUsuario, mensagemDesenvolvedor));
		
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(erros);
	}

	@Data
	@AllArgsConstructor
	public static class Erro {
		
		String mensagemUsuario;
		String mesagemDesenvolvedor;
		
	}	

}
