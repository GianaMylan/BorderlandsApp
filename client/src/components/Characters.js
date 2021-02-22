
import React, { useState, useEffect } from 'react';
import axios from 'axios';


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
            <div className="render" key="characters">          
            {
                characters && characters.map(character => < Characters character={ character } selectCharacter={ selectCharacter } deleteCharacter={ deleteCharacter } />)
            } 
            </div>
            <div className="footer">
                <footer> Made By : Giana Mylan </footer>
            </div>
        </div> 
    )
}


export default Characters;