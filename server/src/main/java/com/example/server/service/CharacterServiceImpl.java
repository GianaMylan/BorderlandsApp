package com.example.server.service;

import com.example.server.repository.CharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CharacterServiceImpl {
    @Autowired
    CharacterRepository characterRepository;



}
