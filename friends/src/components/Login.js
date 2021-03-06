import React,{useState} from 'react';
import axios from 'axios'
const Login = (props) =>{
    const [inputData, setInputData] = useState({
          username: '', 
        password: ''  

    })
    const [data, setData] = useState([])
    
    const [isLoading, setIsLoading] = useState(true)
    const getLoggedIn = (peep)=>{
const newLog = {
    id: Date.now(), 
    name: peep.username,
    password: peep.password
}
setData([...data, newLog])
    }
    const changeHandler=e=>{
setInputData({...inputData, [e.target.name]: e.target.value})
console.log(inputData, 'input data creds')
console.log(e.target.value)
    }
    // const submitHandler = e =>{
    //     e.preventDefault();
    //     getLoggedIn(inputData);
    //     console.log('Submit clicked', inputData)
    // }
    const login = e =>{
        e.preventDefault()
        axios
        .post(`http://localhost:5000/api/login`, inputData)
        .then(res =>{
            // setIsLoading(false);
            // console.log(isLoading, 'loads')
            console.log('res', res.data.payload)
            window.localStorage.setItem('token', res.data.payload)
            //navigate user to protected routes
            props.history.push('/protected')
           })
        .catch(err => err )
        }
    return (
        <div>
            <h1>E.B.'s Friends App (Form)</h1>
<form onSubmit={login}>
    <input 
    type="text" 
    label="username"
    name="username" 
    value={inputData.username} 
    placeholder="username" 
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