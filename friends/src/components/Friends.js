import React, {useState,useEffect} from 'react';
import axios from 'axios'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import FriendsForm from './FriendsForm'

const Friends = () =>{
    const [data, setData] = useState([])

const addItem = (peep)=>{
    const newPeep={
id: Date.now(),
name: peep.name,
age: peep.age,
email: peep.email
    }
    setData([...data, newPeep])
}
    useEffect(() => {
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
       
       <FriendsForm setData={setData} addItem={addItem}/>
        </div>
    )
}

export default Friends;