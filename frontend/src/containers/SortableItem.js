import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from 'antd';
import '../css/List.css'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
const gridStyle = {
    display: 'flex',
    textAlign: 'center',
    width: '25%',
    padding: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '18px', 
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
export function SortableItem(props) {
    // props.id
    // JavaScript
    
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: props.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        justifyContent: 'space-around',
    }

    return (
        <div style={{ display:'flex', alignContent:'center', width: 'inherit', 
        justifyContent: 'space-around', padding: '0 100px',}}>
            <div style={{margin: '15px',}}>
                <div ref={setNodeRef} style={style}  {...attributes} {...listeners}>
                    <Card bodyStyle={spaceStyle}>
                        <Card.Grid style={gridStyle} hoverable={false}>{props.id.course_name}</Card.Grid>
                        <Card.Grid style={smallStyle}hoverable={false}>{props.id.course_id}</Card.Grid>
                        <Card.Grid style={gridStyle}hoverable={false}>{props.id.teacher}</Card.Grid>
                        <Card.Grid style={largeStyle}hoverable={false}>{props.id.time_place}</Card.Grid>
                    </Card>
                    {/* <Card bodyStyle={{padding: '4px' }} style={{minWidth: "500px", width: '70vw', margin:'5px'}}>
                        <div style={{display: 'flex', justifyContent:'space-around', alignContent:'start' }}>
                            <div style={{  width:'50%',float: 'left' ,margin: '5px'}}>
                                <div>
                                    <h4 style={{float:'left'}}>課程名稱 : {props.id.course_name}</h4>
                                </div>
                                <div>
                                    <h4 style={{float:'left'}}>時間地點 : {props.id.time_place}</h4>
                                </div>
                            </div>
                            <div style={{height: '16px'}}></div>
                            <div style={{width:'50%', margin: '5px'}}>
                                <div>
                                    <h4 style={{float:'left'}}>授課教師 : {props.id.teacher}</h4>
                                </div>
                                <div>
                                    <h4 style={{float:'left'}}>時間地點 : {props.id.time_place}</h4>
                                </div>
                            </div>
                        </div>
                    </Card> */}
                </div>
            </div>
            <div >
                <div style={{height:'7px'}}></div>
                <div style={{backgroundColor: 'aquamarine', border: '0px', borderRadius: '10px', width:'35px', height:'35px'}}>
                    <h3 style={{color: 'white' }}>{props.index}</h3>
                </div>
                <div style={{height:'15px'}}></div>
                <button className="button" style={{float: 'right', alignSelf: 'center'}} onClick={()=>props.handleRemoveItem(props.id._id)}>
                    <div className="tiptext">Remove Course</div>
                    <div>
                        < HighlightOffRoundedIcon style={{color: "white"}}/>
                    </div>
                </button>
            </div>
                        
        </div>
    )
}