package com.example.server.repository;


import com.example.server.model.Creatures;
import org.springframework.data.repository.CrudRepository;

public interface CreatureRepository extends CrudRepository<Creatures, Long>  {
}
