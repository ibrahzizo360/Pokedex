import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Searchbar({ onSearch }) {
    const [searchText, setSearchText] = useState("");

    const handleSearch = (e) => {
        const newSearchText = e.target.value;
        setSearchText(newSearchText);
        onSearch(newSearchText); // Notify parent component about the search text change
    }

    return (
        <div className="relative w-2/5 mx-auto">
            <input
                className="w-full rounded-md border border-slate-500 py-3 px-12 pl-5"
                placeholder="Search for Pokemons"
                value={searchText}
                onChange={handleSearch} // Call handleSearch on input change
            />
            <MagnifyingGlassIcon className="absolute w-5 h-5 right-3 top-1/2 transform -translate-y-1/2" />
        </div>
    );
}
