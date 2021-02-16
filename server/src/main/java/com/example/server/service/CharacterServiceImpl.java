package com.example.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import javax.xml.stream.events.Characters;

@Service
public class CharacterServiceImpl {
    @Autowired

    public Iterable<Characters> getCharacters() {
        return (null);
    }

    public Characters findCharacterById(Long id) {
        return (null);
    }

    public Characters updateCharacter(Character character) {
        return (null);
    }

    public HttpStatus deleteCharacter(Long id) {
        return HttpStatus.OK;
    }


}
