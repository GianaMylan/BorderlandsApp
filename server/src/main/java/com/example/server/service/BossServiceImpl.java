package com.example.server.service;

import com.example.server.model.Bosses;
import com.example.server.repository.BossRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;


@Service
public class BossServiceImpl {

    @Autowired
    BossRepository bossRepository;

    @Override
    public Iterable<Bosses> getBosses() {
        return bossRepository.findAll();
    }

    @Override
    public Bosses createBoss(Bosses bosses) {
        return bossRepository.save(bosses);
    }

    @Override
    Bosses updateBoss(Bosses bosses) {
        return bossRepository.save(bosses);
    }

    @Override
    public HttpStatus deleteBoss(Long id) {
        bossRepository.deleteById(id);
        return HttpStatus.OK;
    }

}
