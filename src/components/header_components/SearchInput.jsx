
import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchInput = () => {
    return (
        <>
            <input type='text' className='h-9 bg-gray-800 text-gray-400 border-1 border-gray-500 rounded rounded-r-none ml-10 px-2' placeholder='Pesquisar Tarefa'/>
            <button className='bg-gray-800 border-gray-500 px-3 h-9 rounded rounded-l-none border-y-1 border-r-1 cursor-pointer hover:bg-slate-900 transition-all'>
                <FaSearch className='text-gray-400'/>
            </button>
        </>
    )
}

export default SearchInput