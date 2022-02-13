package com.rprandt.appseguradoraveiculos.domains;

import java.io.Serializable;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Apolice implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private String id;

	private String numeroApolice;

	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date inicioVigencia;

	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date fimVigencia;

	private String placaVeiculo;

	private Float valor;

	private Cliente cliente;

}
