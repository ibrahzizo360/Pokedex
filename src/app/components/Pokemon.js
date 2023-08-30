'use client';
import axios from "axios";
import Image from "next/image";
import { useState,useEffect } from "react";
import Link from 'next/link'



export default function Pokemon({pokemon}){
    const [pokemonImageUrl, setPokemonImageUrl] = useState("");
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${pokemon.url}`);
                setPokemonImageUrl(`${response.data.sprites.front_default}?v=${Math.random()}`);
            } catch (error) {
                console.log(error);
            }    
        }
        fetchData();
    }, [pokemon]);

    const handleClick = (event) => {
        // event.preventDefault();
    };
    return (
    <>
        <Link href={`/pokemon/${pokemon.name}`} onClick={handleClick}>
        <div className="rounded shadow-md h-40 flex flex-col  bg-white relative">
        <div className="flex justify-center">
            <Image alt={pokemon.name} src={pokemonImageUrl} width={120} height={120} className="absolute -mt-7" key={pokemonImageUrl} unoptimized/>
        </div>
        <span className="text-center py-6 px-24 mt-20 font-extrabold">{pokemon.name}</span>
        </div>
        </Link>
    </>
    )
}
