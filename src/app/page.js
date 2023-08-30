'use client'
import Searchbar from './components/Searchbar'
import Pagination from './components/Pagination'
import Pokemons from './components/Pokemons'
import { useState } from 'react';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState(""); // Add searchText state

    const handleSearchTextChange = (newSearchText) => {
        setSearchText(newSearchText);
    }
  return (
    <div className="min-h-screen flex flex-col gap-6 mx-auto">
      <h2 className='mx-auto mt-8 text-2xl text-red-600 '>Pokédex</h2>
      <h5 className='mx-auto text-gray-900 text-lg'>The Pokédex contains detailed stats for every creature from the Pokemon games.</h5>
      <Searchbar onSearch={handleSearchTextChange} /> {/* Pass the callback */}
      <Pokemons currentPage={currentPage} searchText={searchText} /> {/* Pass searchText to Pokemons */}
      <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(1281 / 16)}
                onPageChange={setCurrentPage}
            />
    </div>
  )
}
