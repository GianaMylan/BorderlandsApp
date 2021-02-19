package com.example.server.service;

import com.example.server.model.Bosses;
import org.springframework.http.HttpStatus;

public interface BossService {
    Iterable<Bosses> getBosses();
    Bosses findBossById(Long id);
    Bosses createBoss(Bosses bosses);
    Bosses updateBoss(Bosses bosses);
    HttpStatus deleteBoss(Long id);
}
