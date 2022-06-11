import React, { useState } from 'react';
import { getApiParameters } from '../services/walker.service';

const SearchPage = () => {

    const [searchFor, setSearchFor] = useState('');
    const [id, setId] = useState();
    const [res, setRes] = useState({});
    const [errorMsg, setErrorMsg] = useState('');

    const searchWithParameters = async () => {
        setRes({});
        switch (searchFor) {
            case 'people':
                searchPeopleFromService();
                break;
            case 'films':
                searchFilmsFromService();
                break;
            case 'starships':
                searchStarshipsFromService();
                break;
            case 'species':
                searchSpeciesFromService();
                break;
        }
    }

    const searchPeopleFromService = async() => {
        try{
            const resapi = await getApiParameters(searchFor,id);
            console.log(resapi.name);
            setRes({
                prop1: resapi.name,
                prop2: resapi.height,
                prop3: resapi.mass,
                prop4: resapi.eye_color
            })
        }catch(err){
            setErrorMsg(err);
        }        
    }

    const searchFilmsFromService = async () => {
        try{
            const resapi = await getApiParameters(searchFor,id);
            setRes({
                prop1: resapi.title,
                prop2: resapi.episode_id,
                prop3: resapi.director,
                prop4: resapi.producer
            })
        }catch(err){
            setErrorMsg(err);
        }        
    }

    const searchStarshipsFromService = async () => {
        try{
            const resapi = await getApiParameters(searchFor,id);
            setRes({
                prop1: resapi.name,
                prop2: resapi.model,
                prop3: resapi.manufacturer,
                prop4: resapi.crew
            })
        }catch(err){
            setErrorMsg(err);
        }        
    }

    const searchSpeciesFromService = async () => {
        try{
            const resapi = await getApiParameters(searchFor,id);
            setRes({
                prop1: resapi.name,
                prop2: resapi.classification,
                prop3: resapi.designation,
                prop4: resapi.average_height
            })
        }catch(err){
            setErrorMsg(err);
        }        
    }

    const renderCategory = () => {
        if(searchFor === 'people'){
            return (
                <div>
                    <h4>Name: {res.prop1}</h4>
                    <p>Height: {res.prop2}</p>
                    <p>Mass: {res.prop3}</p>
                    <p>Eye color: {res.prop4}</p>
                </div>
            )
        }else if (searchFor === 'films'){
            return(
                <div>
                    <h4>Title: {res.prop1}</h4>
                    <p>Episode id: {res.prop2}</p>
                    <p>Director: {res.prop3}</p>
                    <p>Producer: {res.prop4}</p>
                </div>
            )
        }else if (searchFor === 'starships'){
            return(
                <div>
                    <h4>Name: {res.prop1}</h4>
                    <p>Model: {res.prop2}</p>
                    <p>Manufaturer: {res.prop3}</p>
                    <p>Crew: {res.prop4}</p>
                </div>
            )
        }else if (searchFor === 'species'){
            return(
                <div>
                    <h4>Name: {res.prop1}</h4>
                    <p>Classification: {res.prop2}</p>
                    <p>Designation: {res.prop3}</p>
                    <p>Average height: {res.prop4}</p>
                </div>
            )
        }
    }

    return (
        <div>
            <h1>LUKE API WALKER </h1>
            <label for="resource">Search for: </label>
            <select value={searchFor} onChange={(e) => setSearchFor(e.target.value)} name="resources" id="resources">
                <option value="people">People</option>
                <option value="films">Films</option>
                <option value="starships">Starships</option>
                <option value="species">Species</option>
            </select>
            <label for="id">Id:</label>
            <input type="text" name="id" id="id" value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={searchWithParameters}> Search </button>
            <div>
                {renderCategory()}
            </div>
        </div>
    )
}

export default SearchPage;