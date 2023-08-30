import axios from "axios";
import Pokemon from "./Pokemon";
import { useEffect, useState } from "react";
import Search from "./Search";

export default function Pokemons({currentPage, searchText}) {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=16&offset=${(currentPage - 1) * 16}`);
                setPokemons(response.data.results);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [currentPage, searchText]);

    const shouldComponentUpdate = (nextProps, nextState) => {
        if (this.state.searchText.length < 3) {
            return false;
        }
        return true;
    };

    return (
        <>
            {searchText.length >= 3 ? (
                <Search searchText={searchText} />
            ) : (
                <div className="mx-auto py-12 px-4">
                    <div className="grid gap-10 grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
                        {pokemons.map((pokemon, index) => (
                            <Pokemon key={index} pokemon={pokemon} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
