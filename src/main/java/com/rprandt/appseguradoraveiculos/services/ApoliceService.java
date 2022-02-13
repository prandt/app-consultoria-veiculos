package com.rprandt.appseguradoraveiculos.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rprandt.appseguradoraveiculos.domains.Apolice;
import com.rprandt.appseguradoraveiculos.domains.Cliente;
import com.rprandt.appseguradoraveiculos.dto.ApoliceNewDTO;
import com.rprandt.appseguradoraveiculos.repositories.ApoliceRepository;
import com.rprandt.appseguradoraveiculos.services.exception.ObjectNotFoundException;
import com.rprandt.appseguradoraveiculos.services.utils.RandomNumber;

@Service
public class ApoliceService {

	@Autowired
	private ApoliceRepository repo;

	@Autowired
	private ClienteService clienteService;

	public List<Apolice> findAll() {
		return repo.findAll();
	}

	public void save(Apolice obj) {
		obj.setId(null);
		repo.save(obj);
	}
	
	public void update(Apolice obj) {
		repo.save(obj);
	}

	public Apolice findByNumeroApolice(String numero) {
		return repo.findByNumeroApolice(numero);
	}

	public Apolice findById(String id) {
		Optional<Apolice> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException("Object not found"));
	}
	
	public List<Apolice> findApoliceByArgs(String args){
		return repo.findApoliceByArgs(args);
	}

	public void delete(String id) {
		findById(id);
		try {
			repo.deleteById(id);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public Boolean hasNumeroApolice(String numero) {
		Apolice obj = findByNumeroApolice(numero);
		return obj == null;
	}

	public String createApoliceNumero() {
		String numero = "";
		do {
			numero = RandomNumber.randomNumber();
		} while (!hasNumeroApolice(numero));

		return numero;
	}

	public Apolice fromDTO(ApoliceNewDTO objDto) {
		Cliente cliente = clienteService.findById(objDto.getClienteId());
		Apolice obj = new Apolice(null, createApoliceNumero(), objDto.getInicioVigencia(), objDto.getFimVigencia(),
				objDto.getPlacaVeiculo(), objDto.getValor(), cliente);
		return obj;
	}

}
