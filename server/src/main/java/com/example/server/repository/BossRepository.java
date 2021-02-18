package com.example.server.repository;

import com.example.server.model.Bosses;
import org.springframework.data.repository.CrudRepository;

public interface BossRepository extends CrudRepository<Bosses, Long> {
}
