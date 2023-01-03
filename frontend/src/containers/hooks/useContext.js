import { createContext, useContext, useState } from "react";
import { message } from 'antd'
const Context = createContext({
    x: 0,
    status: {},
    me: '',
    signIn: false,
    signUp: false,
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
    const [sortCourse, setSortCourse] = useState(["JavaScript", "Python", "TypeScript", "hello", "C++", 'C', 'react']); 
    const [openedCourses, setOpenedCourses] = useState([
        courseData("教師一", "課程一"),
        courseData("教師二", "課程二"),
        courseData("教師三", "課程三")
    ]);

    const [me, setMe] = useState('')
    const [signUp, setSignUp] = useState(false)
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState({})
    const [signIn, setSignIn] = useState(false)

    const displayStatus = (s) => {
        if (s.msg) {
            const { type, msg } = s
            const content = {
                content: msg,
                duration: 1,
            }
            switch (type) {
                case 'success':
                    message.success(content)
                    break
                case 'error':
                default:
                    message.error(content)
                    break
            }
        }
    }

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
            setSelectedSemester,
            sortCourse,
            setSortCourse,
            me, 
            setMe,
            password,
            setPassword,
            status,
            setStatus,
            signUp,
            setSignUp,
            signIn,
            setSignIn,            
            displayStatus,
        }}{...props}/>
    )
}

const useData = () => useContext(Context)

export{ ContextProvider, useData }