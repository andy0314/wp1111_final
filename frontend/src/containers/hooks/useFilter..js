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
    const printTime = () => {
        console.log(currTime);
    }
    const [timeFilter, setTimeFilter] = useState([]);
    return(
        <Context.Provider value={{
            currTime,
            setCurrTime,
            printTime,
            timeFilter,
            setTimeFilter
        }}{...props} />
    )
}

const useFilter = () => useContext(Context);

export { FilterProvider, useFilter }