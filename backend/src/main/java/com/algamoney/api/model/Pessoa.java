package com.algamoney.api.model;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@Builder
@Entity
@Table(name = "pessoa")
@EqualsAndHashCode(of = "codigo")
@AllArgsConstructor
@NoArgsConstructor
public class Pessoa {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;
	
	@NotNull
	private String nome;
	
	@NotNull
	private Boolean ativo;
	
	@Embedded
	private Endereco endereco;
	
	@JsonIgnore
	@Transient
	public boolean isInativo() {
		return !this.ativo;
	}

}
