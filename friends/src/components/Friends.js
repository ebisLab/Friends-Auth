import React, {useState,useEffect} from 'react';
import axios from 'axios'
import {axiosWithAuth} from '../utils/axiosWithAuth'


const Friends = () =>{
    const [data, setData] = useState([])


    useEffect(() => {
        const token = window.localStorage.getItem('token')
        axiosWithAuth()
       .get(`/api/friends`)
       .then(res => {
        console.log('res', res)
        setData(res.data)})
        .catch(err =>
            console.log(err))
    }, [])

    return (
        <div>
            <h1>Hello I'm the Friends component</h1>
{console.log(data, 'in return')}
            {data.map(peeps => <div key={peeps.id}>{peeps.name}</div>)}
        </div>
    )
}

export default Friends;