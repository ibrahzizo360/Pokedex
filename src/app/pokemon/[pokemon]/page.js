'use client'

import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";

 
export default function Page({params}) {
    const [url, setUrl] = useState("")
    const [moves, setMoves] = useState([]);
    const [species, setSpecies] = useState("");
    const [baseStats, setBaseStats] = useState({
        hp: 0,
        attack: 0,
        defense: 0,
        specialAttack: 0,
        specialDefense: 0,
        speed: 0
    });
    const [types, setTypes] = useState([]);
    const [weight, setWeight] = useState(0);

    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`);
                setUrl(response.data.sprites.front_default)
                setSpecies(response.data.species.name)
                setBaseStats({
                    hp: response.data.stats[0].base_stat,
                    attack: response.data.stats[1].base_stat,
                    defense: response.data.stats[2].base_stat,
                    specialAttack: response.data.stats[3].base_stat,
                    specialDefense: response.data.stats[4].base_stat,
                    speed: response.data.stats[5].base_stat
                })
                setTypes(response.data.types);
                setWeight(response.data.weight);
                setMoves(response.data.moves)
            } catch(error){
                console.log(error)
            }
        }
        fetchData();
    },[])
    return (
          <div className="bg-white rounded-md my-32 mx-auto w-2/5 flex flex-col gap-2 p-12 shadow-md">
            <div className="flex justify-center">
                <Image alt={params.pokemon} src={url} height={140} width={140}/>
            </div>
            <span className='text-center text-xl font-medium -mt-10'>{params.pokemon}</span>
            <span className="font-extrabold">Species</span>
            <span className="text-lg">{species}</span>
            <span className="font-extrabold">Base Stats</span>
            <div className="grid grid-col-2 sm:grid-cols-3 gap-x-12 gap-y-6">
                <div className="bg-gray-200 flex flex-col justify-between items-center rounded-lg gap-3 py-2">
                    <span className="font-bold">Hp</span>
                    <span>{baseStats.hp}</span>
                </div>
                <div className="bg-gray-200 flex flex-col justify-between items-center rounded-lg gap-3 py-2">
                    <span className="font-bold">Attack</span>
                    <span>{baseStats.attack}</span>
                </div>
                <div className="bg-gray-200 flex flex-col justify-between items-center rounded-lg gap-3 py-2">
                    <span className="font-bold">Defense</span>
                    <span>{baseStats.defense}</span>
                </div>
                <div className="bg-gray-200 flex flex-col justify-between items-center rounded-lg gap-3 py-2">
                    <span className="font-bold">Special-Attack</span>
                    <span>{baseStats.specialAttack}</span>
                </div>
                <div className="bg-gray-200 flex flex-col justify-between items-center rounded-lg gap-3 py-2">
                    <span className="font-bold">Special-Defense</span>
                    <span>{baseStats.specialDefense}</span>
                </div>
                <div className="bg-gray-200 flex flex-col justify-between items-center rounded-lg gap-3 py-2">
                    <span className="font-bold">Speed</span>
                    <span>{baseStats.speed}</span>
                </div>
            </div>
            <span className="font-extrabold">Types</span>
            <div className="flex flex-row gap-4 flex-wrap">
            {
                types.map((eachType, index) => {
                    return <span className="bg-gray-200 px-3 py-1 rounded-3xl" key={index}>{eachType.type.name}</span>
                })
            }
            </div>
            <span className="font-extrabold">Weight</span>
            <span>{`${weight} lbs`}</span>
            <span className="font-extrabold">Moves</span>
            <div className="flex flex-row gap-4 flex-wrap">
            {
                moves.map((eachMove, index) => {
                    return <span className="bg-gray-200 px-3 py-1 rounded-3xl" key={index}>{eachMove.move.name}</span>
                })
            }
            </div>
          </div>
      )
  }
  
  
  
  