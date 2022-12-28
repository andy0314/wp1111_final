import api from "../api"
//TODO 主畫面
const HomePage = () => {
    const test = async () =>{
        const { data: { messages } } = await api.get('/test/test');
        console.log(messages);
    }
    return (
        <div>
            <button onClick={test}>test</button>
        </div>
    )
}

export default HomePage;