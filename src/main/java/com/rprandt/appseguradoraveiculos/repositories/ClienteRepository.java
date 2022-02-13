package com.rprandt.appseguradoraveiculos.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.rprandt.appseguradoraveiculos.domains.Cliente;

@Repository
public interface ClienteRepository extends MongoRepository<Cliente, String>{
	
	Cliente findByCpf(String cpf);
	
	@Query("{ $or: [{ 'nome': { $regex: ?0, $options: 'i' } }, { 'cpf': { $regex: ?0, $options: 'i' } } ] }")
	List<Cliente> findByNome(String nome);

}
