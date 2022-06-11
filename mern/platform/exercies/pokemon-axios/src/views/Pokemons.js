import React, { useEffect, useState } from 'react';
import { getAllPokemons } from '../services/pokemons.service';

const Pokemons= () =>{
    
    const [pokemons, setPokemons] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const getAllPokemonFromService = async() => {
        try{
            const pokemonsArr = await getAllPokemons();
            setPokemons(pokemonsArr.results);
        } catch(err){
            setErrorMsg(err);
        }
    }

    // useEffect(() => {
    //     getAllPokemonFromService();
    // },[])

    return(
        <div>
            <button onClick={getAllPokemonFromService}>Fetch all pokemons</button>
            {
                pokemons?.map((pokemon,idx)=>(
                    <p key={idx}>{pokemon.name}</p>
                ))
            }
        </div>
    )
}

export default Pokemons;