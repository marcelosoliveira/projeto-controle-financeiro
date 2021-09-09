package com.algamoney.api.config.property;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("algamoney")
public class AlgamoneyApiProperty {
	
	private String originPermitida;
	
	private final Seguranca seguranca = new Seguranca();
	
	public Seguranca getSeguranca() {
		return seguranca;
	}

	public String getOriginPermitida() {
		return originPermitida;
	}

	public void setOriginPermitida(String originPermitida) {
		this.originPermitida = originPermitida;
	}
	

	public static class Seguranca {
		
		private Boolean enableHttps;

		public Boolean getEnableHttps() {
			return enableHttps;
		}

		public void setEnableHttps(Boolean enableHttps) {
			this.enableHttps = enableHttps;
		}
		
	}
	

}
