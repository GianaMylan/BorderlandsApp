package com.example.server.controller;
import com.example.server.model.Characters;
import com.example.server.service.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/characters")
//http://localhost:8080/characters

public class CharacterController {
    CharacterController characterController;
    @Autowired
    CharacterService characterService;

    @GetMapping
    public String sayHello() {
        return "hey you accessed the root url of characters";
    }

}
