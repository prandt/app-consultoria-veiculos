package com.rprandt.appseguradoraveiculos.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.rprandt.appseguradoraveiculos.domains.Apolice;

@Repository
public interface ApoliceRepository extends MongoRepository<Apolice, String>{
	
	Apolice findByNumeroApolice(String numero);

}
