import { useState } from "react"
import { ViewChangerContext } from "./ViewChangerContext"

const ViewChangerProvider = ({ children }) => {
    const [viewTrigger, setViewTrigger] = useState(true);

    const triggerViewChange = () => {
        setViewTrigger(prev => !prev);
    };

    return (
        <ViewChangerContext.Provider value={{ viewTrigger, triggerViewChange }}>
            {children}
        </ViewChangerContext.Provider>
    )
}

export default ViewChangerProvider