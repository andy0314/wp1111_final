import { createContext, useContext, useState } from "react";
import api from "../../api";

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
    const [searchKey, setSearchKey] = useState('');//關鍵字
    const [searchType, setSearchType] = useState('coursename');//搜尋種類
    const [timeFilter, setTimeFilter] = useState([]);
    const [generalFilter, setGeneralFilter] = useState([]);
    const [departFilter, setDepartFilter] = useState('');
    const [selectedSemester, setSelectedSemester] = useState('111-2');//搜尋學期
    const [searchResult, setSearchResult] = useState([]);

    const handleSearch = async() => {
        const { data } = await api.get('/search/searchcourses', {
            params: {
                filter: {
                    searchKey: searchKey,
                    searchType: searchType,
                    timeFilter: timeFilter,
                    generalFilter: generalFilter,
                    departFilter: departFilter,
                    selectedSemester: selectedSemester
                }
            }
        });
        setSearchResult(...data);
    }
    return(
        <Context.Provider value={{
            currTime,
            setCurrTime,

            timeFilter,
            setTimeFilter,
            generalFilter,
            setGeneralFilter,
            departFilter,
            setDepartFilter,
            searchType,
            setSearchType,
            searchKey,
            setSearchKey,
            selectedSemester,
            setSelectedSemester,
            searchResult
        }}{...props} />
    )
}

const useFilter = () => useContext(Context);

export { FilterProvider, useFilter }