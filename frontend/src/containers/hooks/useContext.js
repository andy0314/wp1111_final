import { createContext, useContext, useState } from "react";

const Context = createContext({
    x: 0
})

const ContextProvider = (props) => {
    const [x, setx] = useState(0);
    return(
        <Context.Provider value={{x, setx}}{...props}/>
    )
}

const useData = () => useContext(Context)

export{ ContextProvider, useData }