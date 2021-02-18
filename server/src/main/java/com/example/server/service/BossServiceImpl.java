package com.example.server.service;

import com.example.server.model.Bosses;
import com.example.server.repository.BossRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BossServiceImpl {

    @Autowired
    BossRepository bossRepository;

    @Override
    public Iterable<Bosses> getBosses() {
        
    }

    @Override
    public Bosses createBoss() {
        return createBoss();
    }

}
