import { createContext, useContext, useState } from "react";

const Context = createContext(null);

const FilterProvider = (props) => {
    const [currTime, setCurrTime] = useState({
        cells: [
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
        ]
    });
    const [timeFilter, setTimeFilter] = useState([]);
    const [generalFilter, setGeneralFilter] = useState([]);
    return(
        <Context.Provider value={{
            currTime,
            setCurrTime,
            
            timeFilter,
            setTimeFilter,
            generalFilter,
            setGeneralFilter
        }}{...props} />
    )
}

const useFilter = () => useContext(Context);

export { FilterProvider, useFilter }