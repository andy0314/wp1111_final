import api from "../api"

const HomePage = () => {
    const test = async () =>{
        const { data: { messages, data } } = await api.get('/crawler/datainit');
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