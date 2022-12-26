import { useNavigate } from "react-router-dom";
import { Menu } from 'antd';
import React from "react";

function getItem(label, key, icon, children, type){
    return{
        label,
        key,
        icon,
        children,
        type
    }
}

const items = [
    getItem('搜尋')
]

const SideBar = () => {
    const navigate = useNavigate();
    return (
        <div style={{ height: "100%", width: "100%" }}>
            <div style={{ color: "white", top: "50px", height: "50px", width: "100%" }} onClick={() => navigate("/")}>
                台大課程網
            </div>
            <></>
            <div style={{ color: "white", top: "50px", height: "50px", width: "100%" }} onClick={() => navigate("/search")}>
                搜尋
            </div>
            <div style={{ color: "white", top: "50px", height: "50px", width: "100%" }} onClick={() => navigate("/coursetable")}>
                課表
            </div>
            <div style={{ color: "white", top: "50px", height: "50px", width: "100%" }} onClick={() => navigate("/courselist")}>
                志願序
            </div>
            <div style={{ color: "white", top: "50px", height: "50px", width: "100%" }} onClick={() => navigate("/coursedetail")}>
                課程資訊
            </div>
            
        </div>
    )
}

export default SideBar;