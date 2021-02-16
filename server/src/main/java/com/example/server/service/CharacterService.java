package com.example.server.service;
import com.example.server.model.Characters;
import org.springframework.http.HttpStatus;

public interface CharacterService {

    Iterable<Characters> getCharacters();
    Characters findCharacter(Long id);
    Characters createCharacter(Characters characters);
    Characters updateCharacter(Characters characters);
    HttpStatus deleteCharacter(Long id);
}
