package com.rprandt.appseguradoraveiculos.domains;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.br.CPF;
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
	
	@NotBlank(message = "O campo Nome Nao pode ficar vazio!")
	private String nome;
	
	@NotBlank(message = "O campo CPF Nao pode ficar vazio!")
	@CPF
	private String cpf;
	
	@NotBlank(message = "O campo Cidade Nao pode ficar vazio!")
	private String cidade;
	
	@NotBlank(message = "O campo UF Nao pode ficar vazio!")
	private String uf;
	
}
