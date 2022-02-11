package com.rprandt.appseguradoraveiculos.resources;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rprandt.appseguradoraveiculos.domains.Apolice;
import com.rprandt.appseguradoraveiculos.dto.ApoliceDTO;
import com.rprandt.appseguradoraveiculos.services.ApoliceService;

@RestController
@RequestMapping("/apolices")
public class ApoliceResource {
	
	@Autowired
	private ApoliceService service;
	
	@GetMapping
	public ResponseEntity<List<ApoliceDTO>> findAll(){
		List<Apolice> list = service.findAll();
		List<ApoliceDTO> listDTO = list.stream().map(x -> new ApoliceDTO(x)).collect(Collectors.toList());
		return ResponseEntity.ok().body(listDTO);
	}
	
	@PostMapping
	public ResponseEntity<Void> save(@RequestBody Apolice obj){
		service.save(obj);
		return ResponseEntity.noContent().build();
	}
	
	@GetMapping("/{numeroApolice}")
	public ResponseEntity<Apolice> findByNumeroApolice(@PathVariable String numeroApolice){
		Apolice obj = service.findByNumeroApolice(numeroApolice);
		return ResponseEntity.ok().body(obj);
	}

}
