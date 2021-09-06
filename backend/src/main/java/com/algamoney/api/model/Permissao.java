package com.algamoney.api.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@Builder
@Entity
@Table(name = "permissao")
@EqualsAndHashCode(of = "codigo")
@AllArgsConstructor
@NoArgsConstructor
public class Permissao {
	
	@Id
	private Long codigo;
	
	private String descricao;

}
