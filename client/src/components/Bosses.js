import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Components.css";

function Bosses () {
    const [bosses, setBosses] = useState(null);

    async function getBosses() {
        try{
            const res = await axios.get('https://mysterious-inlet-01178.herokuapp.com/bosses');
            setBosses(res.data);
        } catch(e) {
            console.error(e, e.message)
        }
    }

    useEffect(() => {
        getBosses();
    }, [])

    const [form, setForm] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({...form, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        createBoss();
    }

    async function createBoss() {
        try {
            const res = await axios.post('https://mysterious-inlet-01178.herokuapp.com/bosses', form)
            setBosses([...bosses, res.data]);
        } catch(e) {
            console.error(e, e.message);
        }
    }

    const [selectedBoss, setSelectedBoss] = useState(null);

    function selectBoss(bosses) {
        setSelectedBoss(bosses)
    }

    function handleEditChange(e) {
        const { name, value } = e.target;
        setSelectedBoss({...selectedBoss, [name]: value });
    }

    async function handleEditSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.patch('https://mysterious-inlet-01178.herokuapp.com/bosses/', selectedBoss);
            console.log(res.data);
            getBosses();
        } catch(e) {
            console.error(e, e.message);
        }
    }

    async function deleteBoss(bossId) {
        try {
            const res = await axios.delete('https://mysterious-inlet-01178.herokuapp.com/bosses/' + bossId);
            console.log(res.data);
        } catch(e) {
            console.error (e, e.message);
        }
    }

    return (
        <div>
            <div className="pageTitle"> Bosses </div>
            <div className="render" >
                {
                    bosses && bosses.map(bosses => < Boss bosses={ bosses } selectBoss={ selectBoss} deleteBoss={deleteBoss} /> )
                }
            </div>

            <div>
                <h2> Add a boss character</h2>
                <form className="newForm"
                onChange={ (e) => handleChange(e) }
                onSubmit={ (e) => handleSubmit(e) }>
                    <label> Name: 
                        <input type="text" name="name" />
                    </label>
                    <label> Gender: 
                        <input type="text" name="gender" />
                    </label>
                    <label> Race: 
                        <input type="text" name="race" />
                    </label>
                    <label> Affiliation: 
                        <input type="text" name="affiliation" />
                    </label>
                    <input type="submit" value="Add New" />                    
                </form>
                {
                    selectedBoss && <form
                    onChange= { (e) => handleEditChange(e) }
                    onSubmit= { (e) => handleEditSubmit(e) }
                    className="editForm">
                        <label> Name: 
                            <input type="text" name="name" defaultValue={ selectedBoss.name } />
                        </label>
                        <label> Gender: 
                            <input type="text" name="gender" defaultValue={ selectedBoss.gender } />
                        </label>
                        <label> Race: 
                            <input type="text" name="race" defaultValue={ selectedBoss.race } />
                        </label>
                        <label> Affiliation: 
                            <input type="text" name="affiliation" defaultValue={ selectedBoss.affiliation } />
                        </label>
                        <input type="submit" value="Patch it up" />
                    </form>   }
            </div>
            <div className="footer">
                <footer> Made By : Giana Mylan </footer>
            </div>
        </div>
    )
}

function Boss ({ bosses, selectBoss, deleteBoss }) {
    return(
        <div className="parent">
            <div className="child">
                <div className="childInfo" key={ bosses.boss_id}>
                    <h2> { bosses.name }</h2>
                    <b> Gender: </b> { bosses.gender } <br></br>
                    <b> Race: </b> {bosses.race } <br></br>
                    <b> Affiliation </b> {bosses.affiliation} <br></br>
                </div>
                    <button className="select-button" onClick= { () => selectBoss(bosses) }> Edit </button>
                    <button className="delete-button" onClick={ () => deleteBoss( bosses.boss_id) }> Delete </button>
            </div>
        </div>
    )
}


export default Bosses;