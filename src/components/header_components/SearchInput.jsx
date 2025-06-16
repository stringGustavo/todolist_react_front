import { FaSearch } from 'react-icons/fa'
import useSearchContext from '../../hook/useSearchContext'

const SearchInput = () => {

    const { searchValue, setSearchValue } = useSearchContext();

    return (
        <>
            <input
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                type='text'
                className='h-9 bg-gray-800 text-gray-400 border-1 border-gray-500 rounded ml-10 px-2 w-70'
                placeholder='Pesquisar Nome da Tarefa'
            />
        </>
    )
}

export default SearchInput