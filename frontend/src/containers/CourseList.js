import '../css/List.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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

const CourseList = () => {
    const { sortCourse, setSortCourse, myCourse, setMyCourse, me } = useData();
  const handleRemoveItem = (e) => {
    console.log(e)
    let nSC = sortCourse.filter(course => course.course_name !== e)
    setSortCourse(nSC);
  };
  const ifSame = () => {
    console.log("ifSame/sortCourse: ", sortCourse)
    if(sortCourse.length !== myCourse.length)return false
    sortCourse.map((cor, key) => {
      if(cor !== myCourse[key]) return false
    })
    return true
  }
  const handleSave = async () => {
    const same = ifSame()
    if(!same){
      console.log("Different!")
      const { data: { messages, data } } = await api.post('/test/store',{
        name: me,
        course_array: sortCourse
    });
      console.log("messages", messages, "data", data)
      setMyCourse(sortCourse)
    }
    else {
      console.log("Same!")
    }
  }
  return (   
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} >
            <Container className="p-3" style={{width: "50%", position: "absolute", left: "25%"}} align="center">
                <div style={{height:'120px' , color: "#91d5ff"}}></div>
                <h3>The order of your desired courses !</h3>
                <SortableContext
                items={sortCourse}
                strategy={verticalListSortingStrategy}
                >
                
                {sortCourse.map(course => <SortableItem id={course.course_name} handleRemoveItem={handleRemoveItem}/>)}
                </SortableContext>
                <button style={{ position: 'fixed', bottom: '10px', right: '10px',}} onClick={handleSave}>Save</button>
            </Container>
        </DndContext>   
  );

  function handleDragEnd(event) {
    console.log("Drag end called");
    const {active, over} = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over.id);

    if(active.id !== over.id) {
      setSortCourse((items) => {
        const activeIndex = items.indexOf(active.id);
        console.log(activeIndex);
        const overIndex = items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
        
      });
      
    }
  }
}

export default CourseList;
