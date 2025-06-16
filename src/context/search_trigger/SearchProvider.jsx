import { useState } from "react"
import { SearchContext } from "./SearchContext"

const SearchProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState('');

    const isSearchEmpty  = () => {
        return searchValue.trim() === '';
    }

    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue, isSearchEmpty }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider