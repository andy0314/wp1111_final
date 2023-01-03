import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Card from 'react-bootstrap/Card';
import '../css/List.css'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useData } from './hooks/useContext';
import { positions } from "@mui/system";
export function SortableItem(props) {
    // props.id
    // JavaScript
    const { sortCourse, setSortCourse } = useData();
    const handleRemoveItem = (e) => {
      console.log(e)
      setSortCourse(sortCourse.filter(course => course !== e));
      console.log(1)
    };

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: props.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div style={{ display:'flex',justifyContent:'space-around', alignContent:'center', width: 'inherit'}}>
            <div>
                <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
                    <Card body className="m-3" style={{minWidth: 500, width: '70vw'}}>
                        <div style={{display: 'flex', justifyContent:'start', alignContent:'start'}}>
                            <div style={{width:'50%'}}>
                                <div >
                                    <h6>{props.id}</h6>
                                </div>
                                <div >
                                    <h6>{props.id}</h6>
                                </div>
                            </div>
                            
                            <div style={{width:'50%'}}>
                                <div>
                                    <h6>{props.id}</h6>
                                </div>
                                <div>
                                    <h6>{props.id}</h6>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <button className="button" style={{float: 'right', alignSelf: 'center'}} onClick={()=>handleRemoveItem(props.id)}>
                <div className="tiptext">Remove Course</div>
                <div>
                    < HighlightOffRoundedIcon style={{color: "white"}}/>
                </div>
            </button>            
        </div>
    )
}