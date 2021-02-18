package com.example.server.controller;


import com.example.server.model.Creatures;
import com.example.server.service.CreatureService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/creatures")
//http://localhost:8080/creatures

public class CreatureController {
    CreatureService creatureService;

    @GetMapping
    public Iterable<Creatures> getCreatures() {
        return creatureService.getCreatures();
    }

    @PostMapping
    public Creatures createCreature(@RequestBody Creatures creatures) {
        return creatureService.createCreature(creatures);
    }

    @PatchMapping
    public Creatures updateCreature(@RequestBody Creatures creatures) {
        return creatureService.updateCreature(creatures);
    }

    @DeleteMapping
    public HttpStatus deleteCreature(@RequestParam Long id) {
        return creatureService.deleteCreature(id);
    }
}
