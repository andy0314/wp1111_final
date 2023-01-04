import { createContext, useContext, useState, useEffect } from "react";
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
    const [departFilter, setDepartFilter] = useState('All');
    const [selectedSemester, setSelectedSemester] = useState('111-2');//搜尋學期
    const [searchResult, setSearchResult] = useState([]);
    const [cstypeFilter, setCSTypeFilter] = useState('');
    const [filter, setFilter] = useState({});

    useEffect(() => {
        setFilter({
            searchKey: searchKey,
            searchType: searchType,
            timeFilter: (timeFilter.length === 0 ? 'none' : timeFilter),
            generalFilter: (generalFilter.length === 0 ? 'none' : generalFilter ),
            departFilter: departFilter,
            selectedSemester: selectedSemester,
            cstypeFilter: cstypeFilter,
        })
        console.log("set", filter)
    }, []);

    const handleSearch = async() => {
        setFilter({
            searchKey: searchKey,
            searchType: searchType,
            timeFilter: (timeFilter.length === 0 ? 'none' : timeFilter),
            generalFilter: (generalFilter.length === 0 ? 'none' : generalFilter ),
            departFilter: departFilter,
            selectedSemester: selectedSemester,
            cstypeFilter: cstypeFilter,
        })
        console.log(filter)
        const { data } = await api.post('/search/searchcourses', {
            filter: {
                searchKey: searchKey,
                searchType: searchType,
                timeFilter: (timeFilter.length === 0 ? 'none' : timeFilter),
                generalFilter: (generalFilter.length === 0 ? 'none' : generalFilter ),
                departFilter: departFilter,
                selectedSemester: selectedSemester,
                cstypeFilter: cstypeFilter,
            }
        }).catch((e) => console.log(e));
        console.log(data);
        setSearchResult(data);
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
            searchResult,
            cstypeFilter,
            setCSTypeFilter,
            
            handleSearch
        }}{...props} />
    )
}

const useFilter = () => useContext(Context);

export { FilterProvider, useFilter }