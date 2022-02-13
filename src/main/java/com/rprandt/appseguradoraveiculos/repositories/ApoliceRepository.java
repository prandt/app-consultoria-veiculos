package com.rprandt.appseguradoraveiculos.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.rprandt.appseguradoraveiculos.domains.Apolice;

@Repository
public interface ApoliceRepository extends MongoRepository<Apolice, String>{
	
	Apolice findByNumeroApolice(String numero);
	
	@Query("{$or:[ { 'numeroApolice': { $regex: ?0, $options: 'i' } }, { 'placaVeiculo': { $regex: ?0, $options: 'i' } }, { 'cliente.cpf': { $regex: ?0, $options: 'i' } } ]}")
	List<Apolice> findApoliceByArgs(String args);

}
