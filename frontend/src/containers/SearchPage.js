import styled from "styled-components";
import { Typography, Table, Space, Button } from 'antd'
import { useFilter } from './hooks/useFilter'
import { blue } from '@ant-design/colors'
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
const handleAdd = (e) => {
    console.log("handleAdd/e", e)
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
      key: 'course_name',
      width: '30%',
      render: (text) => <Text>{text}</Text>,
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
              <Button onClick={() => handleAdd(record._id)}>add</Button>
            </Space>
      )},
  ];
  const data = [
    {
      key: '1',
      course_name: 'John Brown',
      time_place: '(五)(廣場)',
      course_id: '10001',
      teacher: 'Mari',
      _id: '11111111111',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      course_name: 'Jim Green',
      time_place: '(四)(廣場)',
      course_id: '10001',
      teacher: 'Mari',
      _id: '2222222222222',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      course_name: 'Jim Green',
      time_place: '(三)(廣場)',
      course_id: '10001',
      teacher: 'Mari',
      _id: '3333333333333',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
const SearchPage = () => {
    const { searchResult } = useFilter()
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