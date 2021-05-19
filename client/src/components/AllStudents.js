import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const AllStudents = () => {
    const [allStudents, setAllStudents]= useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/students")
            .then(res=>{
                console.log(res)
                setAllStudents(res.data.results)
            })
            .catch(err=>console.log(err))
    },[])

    return (
        <div className = "row">
           <div className="col">
               <h3>Ninjas (0-1 belt)</h3>
            {
                allStudents.filter(student=> student.numberOfBelts <=1).map((student, i)=>{
                    return <div key={i} className="card">
                        <div className="card-body">
                            <h4 className="card-title"><Link to = {`/students/${student._id}`}>{student.first_name} {student.last_name}</Link></h4>
                            <h6 className="card-subtitle mb-2 text-muted">Graduation date: {student.graduation_date}</h6>
                            <p className="card-text">
                                Number of Belts: {student.numberOfBelts}
                            </p>
                            <p><img src={student.profilePic} height="200px" width= "200px" alt=""/></p>
                            
                        </div>
                    </div>
                })
            }
           </div>
           <div className="col">
           <h3>Samurais (2 belts)</h3>

            {   allStudents.filter(student=> student.numberOfBelts ==2).map((student, i)=>{
                    return <div className="card">
                        <div className="card-body">
                            <h4 className="card-title"><Link to = {`/students/${student._id}`}>{student.first_name} {student.last_name}</Link></h4>
                            <h6 className="card-subtitle mb-2 text-muted">Graduation date: {student.graduation_date}</h6>
                            <p className="card-text">
                                Number of Belts: {student.numberOfBelts}
                            </p>
                            <p><img src={student.profilePic} height="200px" width= "200px" alt=""/></p>
                            
                        </div>
                    </div>
                })
            }
           </div>
           <div className="col">
           <h3>Senseis (3+ belts)</h3>

            {
                allStudents.filter(student=> student.numberOfBelts >=3).map((student, i)=>{
                    return <div className="card">
                        <div className="card-body">
                            <h4 className="card-title"><Link to = {`/students/${student._id}`}>{student.first_name} {student.last_name}</Link></h4>
                            <h6 className="card-subtitle mb-2 text-muted">Graduation date: {student.graduation_date}</h6>
                            <p className="card-text">
                                Number of Belts: {student.numberOfBelts}
                            </p>
                            <p><img src={student.profilePic} height="200px" width= "200px" alt=""/></p>
                            
                        </div>
                    </div>
                })
            }
           </div>
        </div>
    );
};


export default AllStudents;