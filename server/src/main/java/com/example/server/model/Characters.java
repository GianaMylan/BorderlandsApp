package com.example.server.model;

import javax.persistence.*;

@Entity
@Table(name = "bl3_characters")
public class Characters {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;
    @Column
    private String gender; // can i make a separate list to choose from
    @Column
    private String race;
    @Column
    private String planet; // same as gender only a few known planets exist
    @Column
    private String affiliation; //only a few affiliations exist
    @Column
    private String skills;
    @Column
    private String image;

    public Characters() {
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) {this.name = name; }

    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender;}

    public String getRace() { return race; }
    public void setRace(String race) {this.race = race;}

    public String getPlanet() { return planet; }
    public void setPlanet(String planet) {this.planet = planet; }

    public String getAffiliation() { return affiliation; }
    public void setAffiliation(String affiliation) {this.affiliation = affiliation;}

    public String getSkills() {return skills; }
    public void setSkills(String skills) { this.skills = skills; }

    public String getImage() {return image;}
    public void setImage(String image) {this.image = image; }
}
