import '../css/List.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Typography } from 'antd';
import api from "../api"
import Container from 'react-bootstrap/Container';
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { useState } from 'react';
import { SortableItem } from './SortableItem';
import { useData } from './hooks/useContext';

const { Text } = Typography
const gridStyle = {
  display: 'flex',
  textAlign: 'center',
  width: '25%',
  padding: '10px',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};
const smallStyle = {
  display: 'flex',
  textAlign: 'center',
  width: '15%',
  padding: '10px',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  fontSize: '16px', 
};
const largeStyle = {
  display: 'flex',
  textAlign: 'center',
  width: '35%',
  padding: '10px',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  fontSize: '18px', 
};
const spaceStyle = {
  minHeight: '80px',
  width: '900px',
}

const CourseList = () => {
  const { sortCourse, setSortCourse, myCourse, setMyCourse, me } = useData();
    const handleRemoveItem = (e) => {
      console.log(e)
      let nSC = sortCourse.filter(course => course._id !== e)
      setSortCourse(nSC);
    };
    const ifSame = () => {
      let insame = false
      if(sortCourse.length !== myCourse.length){insame = true}
      if(!insame){
        sortCourse.map((cor, key) => {
          if(cor._id !== myCourse[key]._id){ 
            insame = true;
            
          }
        })
      }
      if(insame){
        return false
      }
      else return true
    }
    const handleSave = async () => {
      const same = ifSame()
      if(!same){
        const { data: { messages, data } } = await api.post('/test/store',{
          name: me,
          course_array: sortCourse
      });
        setMyCourse(sortCourse)
      }
    }
  return ( 
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} >
            <Container className="p-3" style={{ minWidth: '100%', alignContent:'center',}} align="center">
                <div style={{ color: "#91d5ff"}}></div>
                <h1>Order of desired courses</h1>
                <div style={{ display:'flex', alignContent:'center', width: 'inherit', 
                justifyContent: 'space-around', padding: '0 100px',}}>
                  <div style={{margin: '15px',}}>
                    <Card bodyStyle={spaceStyle}>
                      <Card.Grid style={gridStyle} hoverable={false}><Text strong>課程名稱</Text></Card.Grid>
                      <Card.Grid style={smallStyle}hoverable={false}><Text strong>流水號</Text></Card.Grid>
                      <Card.Grid style={gridStyle}hoverable={false}><Text strong>授課教師</Text></Card.Grid>
                      <Card.Grid style={largeStyle}hoverable={false}><Text strong>時間地點</Text></Card.Grid>
                    </Card>
                  </div>
                  <div style={{width: '50px',}}></div>
                </div>
                <SortableContext
                  items={sortCourse}
                  strategy={verticalListSortingStrategy}
                >

                {sortCourse.map((course, index) => <SortableItem key={course._id} id={course} index={index+1} handleRemoveItem={handleRemoveItem} />)}
                </SortableContext>
                <div class="fix" style={{left: '10%'}}>
                    <button style={{backgroundColor: 'aquamarine', border: '0px', borderRadius: '10px'}} onClick={handleSave}>
                      <h3 style={{color: 'white' }}>Save</h3>
                    </button>
                </div>
                <div class="fix" style={{left: '85%'}}>
                      <h3>Course : {sortCourse.length}</h3>
                </div>
            </Container>
        </DndContext>
  );

  function handleDragEnd(event) {
    console.log("Drag end called");
    const {active, over} = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over.id);
    console.log(active)

    if(active.id !== over.id) {
      setSortCourse((items) => {
        const activeIndex = items.indexOf(active.id);
        console.log(active)
        console.log(activeIndex)
        const overIndex = items.indexOf(over.id);
        console.log(over)
        console.log(overIndex)
        console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
        
      });
      
    }
  }
}

export default CourseList;