package com.rprandt.appseguradoraveiculos.services.exception;

public class CpfAlreadyRegistered extends RuntimeException {
	private static final long serialVersionUID = 1L;
	
	public CpfAlreadyRegistered(String msg) {
		super(msg);
	}

}
