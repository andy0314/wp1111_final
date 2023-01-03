import '../css/List.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    const { sortCourse, setSortCourse } = useData();

  return (   
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} >
            <Container className="p-3" style={{"width": "50%"}} align="center">
                <div style={{height:'120px' , color: "#91d5ff"}}></div>
                <h3>The order of your desired courses !</h3>
                <SortableContext
                items={sortCourse}
                strategy={verticalListSortingStrategy}
                >
                
                {sortCourse.map(course => <SortableItem key={course} id={course}/>)}
                </SortableContext>
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
