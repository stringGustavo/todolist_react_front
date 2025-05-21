import { useContext } from "react";
import { ButtonContext } from "../context/ButtonContext";

const useButtonContext = () => {
    const context = useContext(ButtonContext)

    if (context === undefined)
        throw new Error('Fora de Contexto')

    return context
}

export default useButtonContext