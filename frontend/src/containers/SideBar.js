import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { Button, Menu } from 'antd';
import { HomeOutlined, SearchOutlined, TableOutlined, OrderedListOutlined, CommentOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { blue } from '@ant-design/colors'
import { useData } from './hooks/useContext';


function getItem(label, key, icon, children, type){
    return{
        label,
        key,
        icon,
        children,
        type
    }
}

const ButtonWrapper = styled.div`
    height: 50px;
    width: 100%;
    background: ${blue[0]};
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledButton = styled(Button)`
    height: 100%;
    width: 100%;
    background: ${blue[0]};
`

const SideBar = () => {
    const navigate = useNavigate();

    const { sideBarCollapse, setSideBarCollapse, openedCourses } = useData();

    const items = [
        getItem('主畫面', '/', <HomeOutlined />),
        getItem('搜尋課程', '/search', <SearchOutlined />),
        getItem('已選課表', '/coursetable', <TableOutlined />),
        getItem('選課志願序', '/courselist', <OrderedListOutlined />),
        getItem('課程資訊', 'coursedetail', <CommentOutlined />,
            openedCourses.map((e) => getItem(`${e.teacher}  ${e.name}`, '/coursedetail', null))
        )
    ]

    const changeCollapse = () => {
        setSideBarCollapse(!sideBarCollapse);
    }

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <ButtonWrapper>
                <StyledButton onClick={changeCollapse}>
                    {sideBarCollapse? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                </StyledButton>
            </ButtonWrapper>
            <Menu
                onClick={(e) => navigate(e.key)}
                style={{height: "calc(100% - 50px)", width: "100%", background: blue[0]}}
                items={items}
                mode='inline'
            />
        </div>
    )
}

export default SideBar;