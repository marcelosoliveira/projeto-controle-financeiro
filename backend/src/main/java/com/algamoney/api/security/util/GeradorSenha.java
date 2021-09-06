package com.algamoney.api.security.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class GeradorSenha {

	public static void main(String[] args) {
		
		BCryptPasswordEncoder geradorSenha = new BCryptPasswordEncoder();
		System.out.println(geradorSenha.encode("admin"));

	}

}
