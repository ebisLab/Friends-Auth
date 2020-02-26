import React, {useState,useEffect} from 'react';
import axios from 'axios'
import {axiosWithAuth} from '../utils/axiosWithAuth'


const FriendsForm = (props) =>{
    const [data, setData] = useState({
        name:'',
        age: '',
        email: ''
    })

const changeHandler = e =>{
    setData({...data, [e.target.name]:e.target.value})

}
const submitHandler = (e) =>{
    e.preventDefault();
    props.addItem(data);
    // setData(data)
    console.log(data)

}

    return (
        <div>
<form onSubmit={submitHandler}>
    <input
    placeholder="Name"
    type="text"
    name="name"
    label="name"
    value={data.name}
    onChange={changeHandler}/>
   <input
    placeholder="Age"
    type="text"
    name="age"
    label="age"
    value={data.age}
    onChange={changeHandler}/>
       <input
    placeholder="Email"
    type="text"
    name="email"
    label="email"
    value={data.email}
    onChange={changeHandler}/>

    <button>Add</button>
    </form>        </div>
    )
}

export default FriendsForm;