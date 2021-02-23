import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Components.css";


function Characters () {
    const [characters, setCharacters] = useState(null);

    async function getCharacters() {
        try{
            const res = await axios.get('http://localhost:8080/characters');
            setCharacters(res.data);
        } catch(e) {
            console.error(e, e.message)
        }
    }

    useEffect(() => {
        getCharacters();
    }, [])

    const [form, setForm] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({...form, [name]: value });
    }

    function handleSubmit(e) {
        e.preventdefault();
        createCharacter();
    }

    async function createCharacter() {
        try{
            const res = await axios.post('http://localhost:8080/characters', form);
            setCharacters([...characters, res.data]);
        } catch(e) {
            console.error(e, e.message);
        }
    }

    const [selectedCharacter, setSelectedCharacter] = useState(null);

    function selectCharacter(character) {
        setSelectedCharacter(character)
    }

    function handleEditChange(e) {
        const { name, value } = e.target;
        setSelectedCharacter({...selectedCharacter, [name]: value });
    }

    async function handleEditSubmit(e) {
        e.preventdefault();
        try {
            const res = await axios.patch('http://localhost:8080/characters', selectedCharacter);
            console.log(res.data);
            getCharacters();
        } catch(e) {
            console.error(e, e.message);
        }
    }

    async function deleteCharacter(characterId) {
        try {
            const res = await axios.delete('http://localhost:8080/characters/' + characterId);
            console.log(res.data);
        } catch(e) {
            console.error (e, e.message);
        }
    }

    return (
        <div> {/* largest container inlcuding the title of page and footer */}  
            <div className="pageTitle"> Characters </div>  
            <div className="render" key={characters}>          
            {
                characters && characters.map(character => < Character character={ character } selectCharacter={ selectCharacter } deleteCharacter={ deleteCharacter } />)
            } 
            </div>

            <div>
                <h2> Add a playable character </h2>
                <form className="newCharacterForm"
                onChange={ (e) => handleChange(e) }
                onSubmit= { (e) => handleSubmit(e) }>
                    <label> Name: 
                        <input type="text" name="name" />
                    </label>
                    <label> Gender: 
                        <input type="text" name="name" />
                    </label>
                    <label> Race: 
                        <input type="text" name="name" />
                    </label>
                    <label> Planet: 
                        <input type="text" name="name" />
                    </label>
                    <label> Affiliation: 
                        <input type="text" name="name" />
                    </label>
                    <label> Skills: 
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Add New"/>
                </form>

                {
                    selectedCharacter && <form 
                    onChange= { (e) => handleChange(e) }
                    onSubmit= { (e) => handleSubmit(e) }>
                        <label> Name: 
                            <input type="text" name="name" defaultValue={ selectedCharacter.name } />
                        </label>
                        <label> Gender: 
                            <input type="text" name="name" defaultValue={ selectedCharacter.gender }/>
                        </label>
                        <label> Race: 
                            <input type="text" name="name" defaultValue={ selectedCharacter.race } />
                        </label>
                        <label> Planet: 
                            <input type="text" name="name" defaultValue={ selectedCharacter.planet } />
                        </label>
                        <label> Affiliation: 
                            <input type="text" name="name" defaultValue={ selectedCharacter.affiliation } />
                        </label>
                        <label> Skills: 
                            <input type="text" name="name" defaultValue={ selectedCharacter.skills } />
                        </label>
                        <input type="submit" value="Patch it Up" />
                    </form> }
            </div>
            <div className="footer">
                <footer> Made By : Giana Mylan </footer>
            </div>
        </div> 
    )
}

function Character({ character, selectCharacter, deleteCharacter }) {
    return (
        <div className="characters" key={ character.id }>
            <h2 className="full-name-description"> {character.name} </h2>
            <b> Gender : </b> { character.gender} <br></br>
            <b> Race: </b>{ character.race } <br></br>
            <b> Origin Planet: </b>{ character.planet } <br></br>
            <b> Affiliation:  </b>{ character.affiliation}<br></br>
            <b> Skill trees: </b>{ character.skills }
            <button className="select-button" onClick= { () => selectCharacter(character) }> Edit </button>
            <button className="delete-button" onClick={ () => deleteCharacter( character.id) }> Delete </button>
        </div>
    )
}


export default Characters;