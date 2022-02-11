package com.rprandt.appseguradoraveiculos.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rprandt.appseguradoraveiculos.domains.Apolice;
import com.rprandt.appseguradoraveiculos.repositories.ApoliceRepository;

@Service
public class ApoliceService {
	
	@Autowired
	private ApoliceRepository repo;
	
	public List<Apolice> findAll(){
		return repo.findAll();
	}
	
	public void save(Apolice obj) {
		repo.save(obj);
	}
	
	public Apolice findByNumeroApolice(String text) {
		return repo.findByNumeroApolice(text);
	}

}
