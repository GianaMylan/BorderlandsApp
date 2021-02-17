package com.example.server.controller;
import com.example.server.model.Characters;
import com.example.server.service.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/characters")
//http://localhost:8080/characters

public class CharacterController {
    CharacterController characterController;
    @Autowired
    CharacterService characterService;

    @GetMapping
    public Iterable<Characters> getCharacters() {
        return characterService.getCharacters();
    }

    @PostMapping
    public Characters createCharacter(@RequestBody Characters characters) {
        return characterService.createCharacter(characters);
    }
}
