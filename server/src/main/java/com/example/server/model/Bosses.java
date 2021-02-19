package com.example.server.model;

import javax.persistence.*;

@Entity
@Table(name = "bosses")
public class Bosses {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;
    @Column
    private String race;
    @Column
    private String gender;
    @Column
    private String affiliation;
    @Column
    private Boolean dedicated_loot_drop;

    public Bosses() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAffiliation() {
        return affiliation;
    }

    public void setAffiliation(String affiliation) {
        this.affiliation = affiliation;
    }

    public Boolean getDedicated_loot_drop() {
        return dedicated_loot_drop;
    }

    public void setDedicated_loot_drop(Boolean dedicated_loot_drop) {
        this.dedicated_loot_drop = dedicated_loot_drop;
    }
}
