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

    @GetMapping("/{id}")
    public Bosses findBossById(@PathVariable Long id) {
        return bossService.findBossById(id);
    }

    @PostMapping
    public Bosses createBoss(@RequestBody Bosses bosses) {
        return bossService.createBoss(bosses);
    }

    @PatchMapping("/{id}")
    public Bosses updateBoss(@RequestBody Bosses bosses) {
        return bossService.updateBoss(bosses);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteBoss(@RequestParam Long id) {
        return bossService.deleteBoss(id);
    }
}
