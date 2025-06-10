import { useContext } from "react";
import { ViewChangerContext } from "../context/header_trigger/ViewChangerContext";

const useViewChangerContext = () => {
    const context = useContext(ViewChangerContext)

    if (context === undefined)
        throw new Error('Fora de Contexto')

    return context;
}

export default useViewChangerContext