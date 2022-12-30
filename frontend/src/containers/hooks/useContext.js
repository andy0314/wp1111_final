import { createContext, useContext, useState } from "react";

const Context = createContext({
    x: 0
})

const ContextProvider = (props) => {
    const courseData = (teacher, name) => {
        return{
            teacher: teacher,
            name: name
        }
    }
    const [searchKey, setSearchKey] = useState('');//關鍵字
    const [searchType, setSearchType] = useState('coursename');//搜尋種類
    const [searchModalOpen, setSearchModalOpen] = useState(false);//modal是否開啟
    const [sideBarCollapse, setSideBarCollapse] = useState(true);//sidebar是否開啟
    const [selectedSemester, setSelectedSemester] = useState('1111');//搜尋學期

    const [openedCourses, setOpenedCourses] = useState([
        courseData("教師一", "課程一"),
        courseData("教師二", "課程二"),
        courseData("教師三", "課程三")
    ]);

    return(
        <Context.Provider value={{
            sideBarCollapse,
            setSideBarCollapse,
            openedCourses,
            setOpenedCourses,
            searchKey,
            setSearchKey,
            searchType,
            setSearchType,
            searchModalOpen,
            setSearchModalOpen,
            selectedSemester,
            setSelectedSemester
        }}{...props}/>
    )
}

const useData = () => useContext(Context)

export{ ContextProvider, useData }