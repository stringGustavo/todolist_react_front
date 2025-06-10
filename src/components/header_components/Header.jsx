import React from 'react'
import { FaSearch } from 'react-icons/fa'
import SearchInput from './SearchInput'
import ViewChanger from './ViewChanger'

const Header = () => {
    return (
        <div className='flex justify-start items-center outline-1 outline-gray-500 w-300 h-20 rounded-t-md bg-gray-900'>
            <SearchInput />
            <ViewChanger />
        </div>
    )
}

export default Header