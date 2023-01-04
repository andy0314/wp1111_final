import { useParams } from 'react-router-dom';
import { Card, Typography } from 'antd'
import { blue } from '@ant-design/colors'
import { useData } from './hooks/useContext'
import api from "../api"
const { Text, Title } = Typography

const SgridStyle = {
     textAlign: 'center',
     alignContent:'center',
     width: '10%',
     fontSize: '20px',
     padding: '10px',
     backgroundColor: blue[0],
}
const LgridStyle = {
     textAlign: 'center',
     alignContent:'center',
     width: '90%',
     fontSize: '20px',
     paddingTop: '2px',
     paddingBottom: '2px',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'space-around',
}
const textStyle = {
     fontSize: '24px',
}
const titleStyle = {
     marginBottom: '0',
     alignSelf: 'center',
}
const CourseInfo = () => {
     let {courseid, courseyear} = useParams()
     const { hold, setHold } = useData()
     console.log(courseid)
     console.log(courseyear)
     const getCourse = async () =>{
          const { data: { messages, data }} = await api.get('/search/searchcourse', {
               params: {
                    semester: courseyear,
                    id: courseid,
               },
          })          
          setHold(data)
          console.log("getCourse/messages; ", messages)
          console.log("getCourse/hold; ", hold)
     }
          

     return ( 
          <div style={{margin: 'auto',width: '85%', position: 'relative', left: '-35px',}} >{!hold ? <button onClick={getCourse}> getCourse </button> : (
               <div style={{padding: '20px', display: 'flex', flexDirection: 'column', width: '100%',
               alignContent:'center',}}>
                    <Card>
                         <Card.Grid hoverable={false} style={SgridStyle}>
                              <Text style={{textStyle}}>課名</Text>
                         </Card.Grid>
                         <Card.Grid hoverable={false} style={LgridStyle}>
                              <Title level={5} style={titleStyle}>{hold.course_name}</Title>
                         </Card.Grid>
                    </Card>
                    <Card>
                         <Card.Grid hoverable={false} style={SgridStyle}>
                              <Text style={{textStyle}}>教師</Text></Card.Grid>
                         <Card.Grid hoverable={false} style={LgridStyle}>
                              <Title level={5} style={titleStyle}>{hold.teacher}</Title></Card.Grid>
                    </Card>
                    <Card>
                         <Card.Grid hoverable={false} style={SgridStyle}>
                              <Text style={{textStyle}}>流水號 <p></p> 課號 <p></p> 課程識別碼</Text></Card.Grid>
                         <Card.Grid hoverable={false} style={LgridStyle}>
                              <Title level={5} style={titleStyle}>
                              {hold.course_id}<p></p>{hold.course_code}<p></p>{hold.course_id_}
                              </Title>
                         </Card.Grid>
                    </Card>
               </div>
          )}

          
          
          </div>
     )
}
export default CourseInfo