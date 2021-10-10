package com.algamoney.api.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.algamoney.api.config.property.AlgamoneyApiProperty;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/v1/tokens")
@AllArgsConstructor
@CrossOrigin("*")
public class TokenController {
	
	private AlgamoneyApiProperty algamoneyApiProperty;
	
	@DeleteMapping("/revoke")
	public void revoke(HttpServletRequest request, HttpServletResponse response) {
		Cookie cookie = new Cookie("refreshToken", null);
		cookie.setHttpOnly(true);
		cookie.setSecure(algamoneyApiProperty.getSeguranca().getEnableHttps());
		cookie.setPath(request.getContextPath() + "/oauth/token");
		cookie.setMaxAge(0);
		
		response.addCookie(cookie);
		response.setStatus(HttpStatus.NO_CONTENT.value());
	}

}
