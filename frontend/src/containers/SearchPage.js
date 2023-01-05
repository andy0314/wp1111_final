import styled from "styled-components";
import { Typography, Table, Space, Button } from 'antd'
import { useFilter } from './hooks/useFilter'
import { useData } from './hooks/useContext'
import { useNavigate } from 'react-router-dom';
import api from "../api"
const { Text } = Typography
const Wrapper = styled.div`
    width: 95%;
    height: 90%;
    padding: 10px;
`
const OutWrapper = styled.div`
    width: 98%;
    margin: 0 auto;
`
const RowStyle = { 
    minWidth: '100%', 
    minHeight: '6em',
    // borderWidth: '2px',
    // borderStyle: 'solid',
    // borderRadius: '6px',
}

  const data = [
    {
      key: '1',
      course_name: 'John Brown',
      time_place: '(五)(廣場)',
      course_id: '73256',
      teacher: 'Mari',
      semester: '111-2',
      _id: '3131312d322d37333235362d',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      course_name: 'Jim Green',
      time_place: '(四)(廣場)',
      course_id: '55868',
      teacher: 'Mari',
      semester: '111-2',
      _id: '3131312d322d35353836382d',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      course_name: 'Jim Green',
      time_place: '(三)(廣場)',
      course_id: '97074',
      teacher: 'Mari',
      semester: '111-1',
      _id: '3131312d322d35333339392d',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
const SearchPage = () => {
    const { searchResult } = useFilter()
    const { setHold, sortCourse, setSortCourse, myCourse, setMyCourse } = useData()
    let navigate = useNavigate()
    const handleAdd = (e) => {
      console.log(e)
      const toadd = {
        _id: e._id,
        semester: e.semester,
        course_id: e.course_id,
        course_name: e.course_name,
        teacher: e.teacher,
        time_for_filter: e.time_for_filter,
        time_place: e.time_place,
      }
      console.log("myCourse",myCourse)
      const nSortC = [...sortCourse, toadd]
      setMyCourse(nSortC);
    }
    const handleJump = async (semester, id) => {
      const { data: { messages, data }} = await api.get('/search/searchcourse', {
        params: {
             semester: semester,
             id: id,
        },
      })
      setHold(data)
      navigate('/coursedetail/' + semester + '/' + id)
    }
    const columns = [
      {
        title: '流水號',
        dataIndex: 'course_id',
        key: 'course_id',
        width: '10%',
        render: (text) => <Text strong>{text}</Text>,
      },
      {
        title: '課程名稱',
        dataIndex: 'course_name',
        width: '30%',
        render: (_, record) => (
          <Space size="large">
            <Button type='link' onClick={() => handleJump(record.semester, record.course_id)}>{record.course_name}</Button>
          </Space>
        //(text) => <Text>{text}</Text>,
        )
      },
      {
        title: '教師',
        dataIndex: 'teacher',
        key: 'teacher',
        width: '10%',
        render: (text) => <Text>{text}</Text>,
      },
      {
        title: '時間與地點',
        dataIndex: 'time_place',
        key: 'time_place',
        width: '40%',
        render: (text) => <Text>{text}</Text>,
      },
      {
          title: 'Add',
          key: 'add',
          width: '10%',
          render: (_, record) => (
              <Space size="large">
                <Button onClick={() => handleAdd(record)}>add</Button>
              </Space>
        )},
    ];

    console.log("searchResult", searchResult)
    return (
        <Wrapper>
            <Table columns={columns} dataSource={data} />
        </Wrapper>
           
        // <OutWrapper>
        // <Wrapper>
        //     <Row style={RowStyle}>
        //         <Col span={2} style={ColStyle} >10001</Col>
        //         <Col span={8} style={ColStyle} >10001</Col>
        //         <Col span={2} style={ColStyle} >10001</Col>
        //         <Col span={9} style={ColStyle} >10001</Col>
        //         <Col span={2} style={ColStyle} >10001</Col>
        //     </Row>
        // </Wrapper>
        // </OutWrapper>
    )
}

export default SearchPage;