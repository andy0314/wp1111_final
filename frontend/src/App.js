import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import styled from 'styled-components';

import HomePage from './containers/HomePage';
import SearchPage from './containers/SearchPage';
import CourseTable from './containers/CourseTable';
import CourseList from './containers/CourseList';
import SideBar from './containers/SideBar';
import { useData } from './containers/hooks/useContext';

const { Header, Sider, Content } = Layout;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-contents: center;
  height: 100vh;
  width: 100vw;
  margin: auto;
`

const SideBarWrapper = styled(Sider)`
  height: 100vh;
`

function App() {
  const { sideBarCollapse } = useData();

  return (
    <AppWrapper>
      <Layout>

          <SideBarWrapper collapsed={sideBarCollapse}>
            <SideBar />
          </SideBarWrapper>

        <Layout>
          <Header>
            台大課程網
          </Header>
          
          <Content>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/search' element={<SearchPage />} />
              <Route path='/coursedetail/:courseyear/:courseid' element={<>TODO 課程資訊</>} />
              <Route path='/coursetable' element={<CourseTable />} />
              <Route path='/courselist' element={<CourseList />} />
              <Route path='*' element={<h1>ERROR</h1>} />
            </Routes>
          </Content>
        </Layout>

      </Layout>
    </AppWrapper>
  );
}

export default App;
