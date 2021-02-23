import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Creatures () {
    const [creatures, setCreatures] = useState(null);

    async function getCreatures() {
        try{
            const res = await axios.get('http://localhost:8080/creatures');
            setCreatures(res.data);
        } catch (e) {
            console.error(e, e.message)
        }
    }

    useEffect(() => {
        getCreatures();
    }, [])

    const [form, setForm] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({...form, [name]: value});
    }

    function handleSubmit(e) {
        e.preventdefault();
        createCreature();
    }

    async function createCreature() {
        try {
            const res = await axios.post('http://localhost:8080/creatures', form);
            setCreatures([...creatures, res.data]);
        } catch(e) {
            console.error(e, e.message);
        }
    }

    const [selectedCreature, setSelectedCreature] = useState(null);

    function selectCreature(creature) {
        setSelectedCreature(creature)
    }

    function handleEditChange(e) {
        const { name, value } = e.target;
        setSelectedCreature({...setSelectedCreature, [name]: value });
    }

    async function handleEditSubmit(e) {
        e.preventdefault();
        try {
            const res = await axios.patch('http://localhost:8080/creatures', selectedCreatures);
            console.log(res.data);
        } catch (e) {
            console.error(e, e.message);
        }
    }

    async function deleteCreature(creatureId) {
        try {
            const res = await axios.delete('http://localhost:8080/creatures/' + creatureId);
            console.log(res.data);
        } catch(e) {
            console.error(e, e.message);
        }
    }

    return (
        <div>  
            <div> Creatures</div>
            <div className="render" key={creatures}>
                {
                    creatures && creatures.map(creature => < Creature creature={ creature } selectCreature= { selectCreature } deleteCreature={ deleteCreature } />)
                }
            </div>

            <div>
                <h2> Add a Creature:  </h2>
                <form className="newCreatureForm"
                onChange={ (e) => handleChange(e) }
                onSubmit={ (e) => handleSubmit(e) }>
                    <label>
                        Species: 
                        <input type="text" name="species" />
                    </label>
                    <label>
                        Are there Badass Versions? 
                        <DropdownButton id="dropdownButton">
                            <Dropdown.ItemText> Yes </Dropdown.ItemText>
                            <Dropdown.ItemText> No </Dropdown.ItemText>
                        </DropdownButton>
                    </label>
                    <label>
                        Do they have elemental Variety? 
                        <DropdownButton id="dropdownButton">
                            <Dropdown.ItemText> Yes </Dropdown.ItemText>
                            <Dropdown.ItemText> No </Dropdown.ItemText>
                        </DropdownButton>
                    </label>
                </form>
            </div>
            
        </div>
    )
}

function Creature ({ creature, selectCreature, deleteCreature }) {
    return(
        <div className="characters" > </div>
    )
}


export default Creatures ;