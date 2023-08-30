'use client';
import axios from "axios";
import Pokemon from "./Pokemon";
import { useEffect, useState } from "react";

export default function Search({ searchText }) {
    const [pokemons, setPokemons] = useState([]);
    const filteredPokemons = searchText.length >= 3
        ? pokemons.filter(pokemon => pokemon.name.includes(searchText.toLowerCase()))
        : pokemons;
    
    useEffect(() => {
        async function fetchData() {
            if (searchText.length >= 3) {
                try {
                    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1281`);

                    setPokemons(response.data.results);
                } catch (error) {
                    console.log(error);
                }
            } else {
                ([]);
            }
        }
        fetchData();
    }, [searchText]);
        
    return (
        <div className=" mx-auto py-12 px-4">
            <div className="grid gap-10  grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
                {filteredPokemons.map((pokemon, index) => {
                    return <Pokemon key={index} pokemon={pokemon}/>
                })}
            </div>
        </div>
    );
}
