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
    getItem('課程資訊', 'coursedetail', <CommentOutlined />,[
        getItem('課程', '/coursedetail', null)
    ])
]

const Navigate = (e) =>{
    console.log("a")
}


const SideBar = () => {
    const navigate = useNavigate();
    return (
        <div style={{ height: "100%", width: "100%" }}>
            <Menu
                onClick={(e) => navigate(e.key)}
                style={{height: "100%", width: "100%", background: blue[0]}}
                items={items}
                mode='inline'
            />            
        </div>
    )
}

export default SideBar;