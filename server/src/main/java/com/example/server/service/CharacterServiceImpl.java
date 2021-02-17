package com.example.server.service;
import  com.example.server.model.Characters;
import com.example.server.repository.CharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class CharacterServiceImpl implements CharacterService {

    @Autowired
    CharacterRepository characterRepository;

    @Override
    public Iterable<Characters> getCharacters() {
        return characterRepository.findAll();
    }

    @Override
    public Characters createCharacter(Characters characters) {
        return characterRepository.save(characters);
    }

    @Override
    public Characters updateCharacter(Characters characters) {
        return characterRepository.save(characters);
    }

    @Override
    public HttpStatus deleteCharacter(Long id) {
        characterRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
