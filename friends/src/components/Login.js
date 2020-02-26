import React,{useState} from 'react';


const Login = () =>{
    const [inputData, setInputData] = useState({
        name: '', 
        password: ''
    })
    const [data, setData] = useState("")

    const getLoggedIn = (peep)=>{
const newLog = {
    id: Date.now(), 
    name: peep.name,
    password: peep.password
}
setData([...data, newLog])
    }

    const changeHandler=e=>{

setInputData({...inputData, [e.target.name]: e.target.value})
console.log(e.target.value)
    }

    const submitHandler = e =>{
        e.preventDefault();
        getLoggedIn(inputData);
        console.log('Submit clicked', inputData)
    }

    return (
        <div>
            <h1>E.B.'s Friends App (Form)</h1>
<form onSubmit={submitHandler}>
    <input 
    type="text" 
    label="name"
    name="name" 
    value={inputData.name} 
    placeholder="name" 
    onChange={changeHandler} />

<input 
    type="password" 
    label="password"
    name="password" 
    value={inputData.password} 
    placeholder="password" 
    onChange={changeHandler} />

        <button>Login</button>
</form>
        

        </div>
    )
}

export default Login;