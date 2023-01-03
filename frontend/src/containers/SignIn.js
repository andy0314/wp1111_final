
import { useData } from './hooks/useContext'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import api from "../api"
import { ClassNames } from '@emotion/react'

const bcrypt = require('bcryptjs')
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
const SignIn = () => {
    const {
        me, 
        setMe,
        signUp, 
        setSignUp,
        signIn,
        setSignIn,
        password,
        setPassword,
        setStatus
    } = useData()
const encryptPW = async (pass) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(pass, salt)
    return hash
}
const handleSignUp = async (name, pass) => {
    if(!name){
        setStatus({
            type: "error",
            msg: "Missing user name!",
        })
    }
    else if(!pass){
        setStatus({
            type: "error",
            msg: "Missing password!",
        })
    }
    else{
        const hash = await encryptPW(pass)
        const { data: { messages, data } } = await api.post('/test/signup',{
                name: name,
                password: hash,
        });
        setStatus({
            type: "success",
            msg: "Signed up!",
        })
        console.log("handleSignUp retrieved: ", messages);//
        setSignIn(true)
    }
}
const handleSignIn = async (name, pass) => {
    console.log("handleSignIn under construction");//
    if(!name){
        setStatus({
            type: "error",
            msg: "Missing user name!",
        })
    }
    else if(!pass){
        setStatus({
            type: "error",
            msg: "Missing password!",
        })
    }
    else {
        const { data: { messages, data } } = await api.post('/test/login',{
                name: name,
        });
        if(messages === "Doesn'tExist")        
            setStatus({
                type: "error",
                msg: "User doesn't exist!",
            })
        else if(messages === "Hash"){
            const result = bcrypt.compareSync(pass, data)
            if(result){
                setStatus({
                    type: "success",
                    msg: "Logged in.",                   
                })
                setSignIn(true)
            }
            else{
                setStatus({
                    type: "error",
                    msg: "Wrong password.",
                })                
            }
        }
    }
}
    return (
        <div>
            <div style={{height:'120px' , color: "#91d5ff"}}></div>
            {signUp ? (
                <SignUp 
                    onSignUp={handleSignUp}
                    me={me}
                    setName={setMe}
                    password={password}
                    setPassword={setPassword}
                    setSignUp={setSignUp}
                />
            ) : (
                <Login 
                    onSignIn={handleSignIn}
                    me={me}
                    setName={setMe}
                    password={password}
                    setPassword={setPassword}  
                    setSignUp={setSignUp}                                  
                />
            ) }


        </div>
    )
}

export default SignIn