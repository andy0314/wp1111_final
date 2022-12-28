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
    const [sideBarCollapse, setSideBarCollapse] = useState(true);
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
            setOpenedCourses
        }}{...props}/>
    )
}

const useData = () => useContext(Context)

export{ ContextProvider, useData }