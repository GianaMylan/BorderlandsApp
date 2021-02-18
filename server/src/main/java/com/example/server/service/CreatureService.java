package com.example.server.service;
import com.example.server.model.Creatures;
import org.springframework.http.HttpStatus;


public interface CreatureService {
    Iterable<Creatures> getCreatures();
    Creatures createCreature(Creatures creatures);
    Creatures updateCreature(Creatures creatures);
    HttpStatus deleteCreature( Long id);

}
