import { useNavigate } from "react-router-dom";
import { Menu } from 'antd';
import { HomeOutlined, SearchOutlined, TableOutlined, OrderedListOutlined, CommentOutlined } from '@ant-design/icons'
import { blue } from '@ant-design/colors'
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
    getItem('主畫面', '/', <HomeOutlined />),
    getItem('搜尋課程', '/search', <SearchOutlined />),
    getItem('已選課表', '/coursetable', <TableOutlined />),
    getItem('選課志願序', '/courselist', <OrderedListOutlined />),
    getItem('課程資訊', '/coursedetail', <CommentOutlined />)
]

const Navigate = (e) =>{
    console.log("a")
}

const temp = (
    <div>
        <div style={{ color: "white", top: "50px", height: "50px", width: "100%" }} onClick={() => Navigate("/search")}>
            搜尋
        </div>
        <div style={{ color: "white", top: "50px", height: "50px", width: "100%" }} onClick={() => Navigate("/coursetable")}>
            課表
        </div>
        <div style={{ color: "white", top: "50px", height: "50px", width: "100%" }} onClick={() => Navigate("/courselist")}>
            志願序
        </div>
        <div style={{ color: "white", top: "50px", height: "50px", width: "100%" }} onClick={() => Navigate("/coursedetail")}>
            課程資訊
        </div>
    </div>
)

const SideBar = () => {
    const navigate = useNavigate();
    return (
        <div style={{ height: "100%", width: "100%" }}>
            <Menu
                onClick={(e) => navigate(e.key)}
                style={{height: "100%", width: "100%", background: blue[0]}}
                items={items}
            />            
        </div>
    )
}

export default SideBar;