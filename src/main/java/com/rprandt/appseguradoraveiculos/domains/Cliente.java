package com.rprandt.appseguradoraveiculos.domains;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cliente implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	private String id;
	private String nome;
	private String cpf;
	private String cidade;
	private String uf;
	
}
