package com.rprandt.appseguradoraveiculos.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rprandt.appseguradoraveiculos.domains.Cliente;
import com.rprandt.appseguradoraveiculos.repositories.ClienteRepository;
import com.rprandt.appseguradoraveiculos.services.exception.CpfAlreadyRegistered;
import com.rprandt.appseguradoraveiculos.services.exception.ObjectNotFoundException;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository repo;

	public List<Cliente> findAll() {
		return repo.findAll();
	}

	public Cliente findById(String id) {
		Optional<Cliente> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException("Object not found"));
	}

	public void save(Cliente obj) {
		obj.setId(null);
		if(repo.findByCpf(obj.getCpf()) != null) {
			throw new CpfAlreadyRegistered("CPF já cadastrado");
		}
		repo.save(obj);
	}
	
	public void update(Cliente obj) {
		repo.save(obj);
	}
	
	public void deleteById(String id) {
		findById(id);
		try {
			repo.deleteById(id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

}
