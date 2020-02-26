import React, {useState,useEffect} from 'react';
import axios from 'axios'


const Friends = () =>{
    const [data, setData] = useState([])

    useEffect(() => {
        const token = window.localStorage.getItem('token')
       axios
       .get(`http://localhost:5000/api/friends`, {
           headers: {
               authorization: token
           }
       })
       .then(res => 
        console.log('res', res))
        .catch(err =>
            console.log(err))
    }, [])

    return (
        <div>
            <h1>Hello I'm the Friends component</h1>
        </div>
    )
}

export default Friends;