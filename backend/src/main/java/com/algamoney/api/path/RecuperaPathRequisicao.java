package com.algamoney.api.path;

import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class RecuperaPathRequisicao {
	
	public void RecuperaUri() {
		String uri = ServletUriComponentsBuilder.fromCurrentRequestUri().build().getPath();
		System.out.println(uri);		
	}

}
