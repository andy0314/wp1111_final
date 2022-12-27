import { createContext, useContext, useState } from "react";

const Context = createContext({
    x: 0
})

const ContextProvider = (props) => {
    const [sideBarCollapse, setSideBarCollapse] = useState(true);
    return(
        <Context.Provider value={{sideBarCollapse, setSideBarCollapse}}{...props}/>
    )
}

const useData = () => useContext(Context)

export{ ContextProvider, useData }