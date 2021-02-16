package com.example.server.repository;

import com.example.server.model.Characters;
import org.springframework.data.repository.CrudRepository;



public class CharacterRepository implements CrudRepository<Characters, Long> {

}
