import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Components.css"

function Creatures () {
    const [creatures, setCreatures] = useState(null);

    async function getCreatures() {
        try{
            const res = await axios.get('https://mysterious-inlet-01178.herokuapp.com/creatures');
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
        e.preventDefault();
        createCreature();
    }

    async function createCreature() {
        try {
            const res = await axios.post('https://mysterious-inlet-01178.herokuapp.com/creatures', form);
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
        e.preventDefault();
        try {
            const res = await axios.patch('https://mysterious-inlet-01178.herokuapp.com/creatures', selectedCreature);
            console.log(res.data);
        } catch (e) {
            console.error(e, e.message);
        }
    }

    async function deleteCreature(creatureId) {
        try {
            const res = await axios.delete('https://mysterious-inlet-01178.herokuapp.com/creatures/' + creatureId);
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
                <form className="newForm"
                onChange={ (e) => handleChange(e) }
                onSubmit={ (e) => handleSubmit(e) }>
                    <label>
                        Species: 
                        <input type="text" name="species" />
                    </label>
                    <label>
                        Are there Badass Versions? 
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Do they have elemental Variety? 
                        <input type="text" name="name" />
                    </label>
                    <input className="button" type="submit" value="Add New"/>
                </form>
            </div>
            {
                selectedCreature && <form
                onChange={ (e) => handleEditChange(e)}
                onSubmit={ (e) => handleEditSubmit(e)}
                className="editForm">
                    <label> Species:
                        <input type="text" name="species" defaultValue={ selectedCreature.species } />
                    </label>
                    <label>
                        Are there Badass Versions? 
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Do they have elemental Variety? 
                        <input type="text" name="name" />
                    </label>
                    <input className="button" type="submit" value="Patch it"/>
                </form>
            }
            <div className="footer">
                <footer> Made By : Giana Mylan </footer>
            </div>
        </div>
    )
}

function Creature ({ creature, selectCreature, deleteCreature }) {
    return(
        <div className="characters" > 
            <h2 className="cratures" key={ creature.id }> { creature.species } </h2>
            <b> Badass Variants? </b> { creature.badasses } <br></br>
            <b> Elemental Variants? </b> {creature.elemental_variants } <br></br>
            <button className="select-button" onClick= { () => selectCreature(creature) }> Edit </button>
            <button className="delete-button" onClick={ () => deleteCreature( creature.id) }> Delete </button>
        </div>
    )
}


export default Creatures ;