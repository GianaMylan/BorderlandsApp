package com.example.server.service;
import com.example.server.model.Creatures;


import com.example.server.repository.CreatureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class CreatureServiceImpl implements CreatureService {
    @Autowired
    CreatureRepository creatureRepository;

    @Override
    public Iterable<Creatures> getCreatures() {
        return null;
    }

    @Override
    public Creatures createCreature(Creatures creatures) {
        return null;
    }

    @Override
    public Creatures updateCreature(Creatures creatures) {
        return null;
    }

    @Override
    public HttpStatus deleteCreature(Long id) {
        return null;
    }
}
