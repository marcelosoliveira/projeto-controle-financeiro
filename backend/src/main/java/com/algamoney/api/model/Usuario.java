package com.algamoney.api.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@Builder
@Entity
@Table(name = "usuario")
@EqualsAndHashCode(of = "codigo")
@AllArgsConstructor
@NoArgsConstructor
public class Usuario {
	
	@Id
	private Long codigo;
	
	private String nome;	
	private String email;	
	private String senha;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "usuario_permissao", 
	joinColumns = @JoinColumn(name = "codigo_usuario"),
	inverseJoinColumns = @JoinColumn(name = "codigo_permissao"))
	private List<Permissao> permissao;

}
