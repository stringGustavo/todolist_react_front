import { useState } from "react"
import { ViewChangerContext } from "./ViewChangerContext"

const ViewChangerProvider = ({ children }) => {
    const [viewTrigger, setViewTrigger] = useState(false);

    return (
        <ViewChangerContext.Provider value={{ viewTrigger, setViewTrigger }}>
            {children}
        </ViewChangerContext.Provider>
    )
}

export default ViewChangerProvider