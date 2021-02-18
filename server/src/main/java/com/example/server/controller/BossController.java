package com.example.server.controller;

import com.example.server.model.Bosses;
import com.example.server.service.BossService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping ("/bosses")
public class BossController {

    @Autowired
    BossService bossService;

    @GetMapping
    public Iterable<Bosses> getBosses() {
        return bossService.getBosses();
    }

    @PostMapping
    public Bosses createBosses(@RequestBody Bosses bosses) {
        return bossService.createBoss(bosses);
    }

    @PatchMapping
    public Bosses updateBosses(@RequestBody Bosses bosses) {
        return bossService.updateBoss(bosses);
    }

    @DeleteMapping
    public HttpStatus deleteBosses(@RequestParam Long id) {
        return bossService.deleteBoss(id);
    }
}
