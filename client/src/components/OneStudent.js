import React, {useState, useEffect} from 'react';
import axios from 'axios';

const OneStudent = (props) => {

    const [details, setDetails] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/students/${props.id}`)
            .then(res=>{
                console.log("RESPONSE ->>>>",res)
                setDetails(res.data.results)
            })
            .catch()
    },[])
    return (
        
        <div className="container">
            <h1>Obie one Student only. ID# {props.id}</h1>
            <p>Name: {details.first_name} {details.last_name}</p>
            <p><img src={details.profilePic} alt=""/></p>
            <p>Graduation date: {details.graduation_date}</p>
            <p>Number of belts: {details.numberOfBelts}</p>
            <p>Is Vet? {details.isVeteran? "Yes": "No" }</p>
        </div>
    );
};


export default OneStudent;