import api from "../api"

const HomePage = () => {
    const test = async () =>{
        const { data: { messages, data } } = await api.get('/crawler/coursedetail',{
            params: {
                semester: "111-2",
                courseId: "97001"
            }
        });
        console.log(messages);
        console.log(data);
    }
    return (
        <div>
            <button onClick={test}>test</button>
        </div>
    )
}

export default HomePage;