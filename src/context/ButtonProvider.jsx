import { useState } from "react"
import { ButtonContext } from "./ButtonContext"

const ButtonProvider = ({ children }) => {
    const [buttonTrigger, setButtonTrigger] = useState(0);

    const triggerClick = () => {
        setButtonTrigger(prev => prev + 1);
    };

    return (
        <ButtonContext.Provider value={{ buttonTrigger, triggerClick }}>
            {children}
        </ButtonContext.Provider>
    )
}

export default ButtonProvider