
import {  Card, Row, Col  } from "antd";
// let table = [{num:"10001", time:[2, 3, 4]}, {num:"10002", time:[2, 3, 4]}, {num:"10007", time:[16, 17, 18]} ]
// const makeCourse = (num, time) => {
//     table.push({num: num, time: time})
// }
const weekDays = ["一", "二", "三", "四", "五", "六", "日"]
const intervals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
const tableStyle = {
    width: '98%',
    height: '90%',
    padding: '15px',
    textAlign: 'center',
    overflow: 'scroll', 
    padding: '50px',
    position: 'fixed',
    top: '80px',
  };
const gridStyle = {
    padding: '5px',
};
const spaceStyle = {
    height: '50px',
}

const CourseTable = () => {


        return (
            <div className="tableContainer" style={tableStyle}>
            {intervals.map((key, day) => 
                 <Row style={gridStyle} gutter={[8, 8]}>
                    {weekDays.map((ikey, intv)=>{
                        return (
                            <Col span={3}>
                                <Card size="small">{day}
                                </Card>
                            </Col>
                        )
                    })}
                 </Row>
            )}
            </div>
            
        )

}

export default CourseTable;