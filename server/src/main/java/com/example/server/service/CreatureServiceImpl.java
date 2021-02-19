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
        return creatureRepository.findAll();
    }

    @Override
    public Creatures findCreatureById(Long id) {
        return creatureRepository.findById(id).get();
    }

    @Override
    public Creatures createCreature(Creatures creatures) {
        return creatureRepository.save(creatures);
    }

    @Override
    public Creatures updateCreature(Creatures creatures) {
        return creatureRepository.save(creatures);
    }

    @Override
    public HttpStatus deleteCreature(Long id) {
        creatureRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
