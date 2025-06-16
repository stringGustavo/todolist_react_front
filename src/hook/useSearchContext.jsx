import { useContext } from "react";
import {SearchContext } from "../context/search_trigger/SearchContext";

const useSearchContext = () => {
    const context = useContext(SearchContext);

    if (context === undefined)
        throw new Error('Fora de Contexto')

    return context
}

export default useSearchContext