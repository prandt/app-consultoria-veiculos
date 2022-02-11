package com.rprandt.appseguradoraveiculos.dto;

import java.io.Serializable;
import com.rprandt.appseguradoraveiculos.domains.Apolice;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ApoliceDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String numeroApolice;
	private String placaVeiculo;
	private Float valor;
	
	public ApoliceDTO(Apolice objDTO) {
		this.numeroApolice = objDTO.getNumeroApolice();
		this.placaVeiculo = objDTO.getPlacaVeiculo();
		this.valor = objDTO.getValor();
	}

}
