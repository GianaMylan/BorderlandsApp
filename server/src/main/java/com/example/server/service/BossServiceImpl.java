package com.example.server.service;

import com.example.server.model.Bosses;
import com.example.server.repository.BossRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;


@Service
public class BossServiceImpl implements BossService{

    @Autowired
    BossRepository bossRepository;

    @Override
    public Iterable<Bosses> getBosses() {
        return bossRepository.findAll();
    }

    @Override
    public Bosses findBossById(Long boss_id) {
        return bossRepository.findById(boss_id).get();
    }

    @Override
    public Bosses createBoss(Bosses bosses) {
        return bossRepository.save(bosses);
    }

    @Override
    public Bosses updateBoss(Bosses bosses) {
        return bossRepository.save(bosses);
    }

    @Override
    public HttpStatus deleteBoss(Long boss_id) {
        bossRepository.deleteById(boss_id);
        return HttpStatus.OK;
    }

}
