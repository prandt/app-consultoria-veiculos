package com.rprandt.appseguradoraveiculos.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.rprandt.appseguradoraveiculos.domains.Cliente;

@Repository
public interface ClienteRepository extends MongoRepository<Cliente, String>{

}
