import { useEffect } from "react"
import { useParams } from "react-router-dom";

const CourseDetail = () => {
    const { courseyear, courseid } = useParams();
    console.log(courseyear, courseid);
    return (
        <div>
            TODO 課程資訊
        </div>
    )
}

export default CourseDetail