package com.rprandt.appseguradoraveiculos.dto;

import java.util.Date;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApoliceNewDTO {
	
	private String numeroApolice;

	@JsonFormat(pattern = "dd-MM-yyyy")
	@NotNull(message = "O campo Inicio Vigencia Nao pode ficar vazio!")
	private Date inicioVigencia;

	@JsonFormat(pattern = "dd-MM-yyyy")
	@NotNull(message = "O campo Fim Vigencia Nao pode ficar vazio!")
	private Date fimVigencia;
	
	@NotBlank(message = "O campo Placa do Veiculo Nao pode ficar vazio!")
	private String placaVeiculo;
	
	@NotNull(message = "O campo Valor Nao pode ficar vazio!")
	private Float valor;
	
	private String clienteId;

}
