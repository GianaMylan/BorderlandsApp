package com.example.server.model;

import javax.persistence.*;

@Entity
@Table(name="bl3_creatures")
public class Creatures {

    @Id
    @Column
    private Long id;

    @Column
    private String species;
    @Column
    private Boolean badasses;
    @Column
    private Boolean elemental_variants;


    public Creatures() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public Boolean getBadasses() {
        return badasses;
    }

    public void setBadasses(Boolean badasses) {
        this.badasses = badasses;
    }

    public Boolean getElemental_variants() {
        return elemental_variants;
    }

    public void setElemental_variants(Boolean elemental_variants) {
        this.elemental_variants = elemental_variants;
    }
}
