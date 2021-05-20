import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const AllStudents = () => {
    const [allStudents, setAllStudents]= useState([])

    const [onestudent, setonestudent] = useState({})
    const [grantBeltClicked, setGrantBeltClicked] = useState(0)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/students")
            .then(res=>{
                console.log(res)
                setAllStudents(res.data.results)
            })
            .catch(err=>console.log(err))
    },[grantBeltClicked])


    const grantBelt = (event, student)=>{
        setGrantBeltClicked(grantBeltClicked+1)
        console.log("trying to grant this student a belt. Student is this: ",student)
        //we will use that id variable (studentId) to get one student from the backend that matches that id
        student.numberOfBelts +=1
        console.log("STUDENT AFTER ADDING ONE TO NUMOFBELTS-->",student)
        axios.put(`http://localhost:8000/api/students/update/${student._id}`, student)
            .then(res=>{
                console.log("RESPONSE AFTER PUT REQUEST", res)
            })
            .catch(err=> console.log(err))
        
        //store that students information in a state variable, then modify that state variable's numberOfBelts property to be 1 more. Then we will sent that updated state variable as a PUT request to the backeend to update one student. 
    }


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
                            <button onClick = {(e)=>grantBelt(e, student)} className="btn-success">Grant Belt</button>
                            <Link to={`/students/edit/${student._id}`}><button className="btn-warning">Edit</button></Link>
                            
                        </div>
                    </div>
                })
            }
           </div>
           <div className="col">
           <h3>Samurais (2 belts)</h3>

            {   allStudents.filter(student=> student.numberOfBelts ==2).map((student, i)=>{
                    return <div key={i} className="card">
                        <div className="card-body">
                            <h4 className="card-title"><Link to = {`/students/${student._id}`}>{student.first_name} {student.last_name}</Link></h4>
                            <h6 className="card-subtitle mb-2 text-muted">Graduation date: {student.graduation_date}</h6>
                            <p className="card-text">
                                Number of Belts: {student.numberOfBelts}
                            </p>
                            <p><img src={student.profilePic} height="200px" width= "200px" alt=""/></p>
                            <button onClick = {(e)=>grantBelt(e, student)} className="btn-success">Grant Belt</button>
                            <Link to={`/students/edit/${student._id}`}><button className="btn-warning">Edit</button></Link>


                            
                        </div>
                    </div>
                })
            }
           </div>
           <div className="col">
           <h3>Senseis (3+ belts)</h3>

            {
                allStudents.filter(student=> student.numberOfBelts >=3).map((student, i)=>{
                    return <div key={i} className="card">
                        <div className="card-body">
                            <h4 className="card-title"><Link to = {`/students/${student._id}`}>{student.first_name} {student.last_name}</Link></h4>
                            <h6 className="card-subtitle mb-2 text-muted">Graduation date: {student.graduation_date}</h6>
                            <p className="card-text">
                                Number of Belts: {student.numberOfBelts}
                            </p>
                            <p><img src={student.profilePic} height="200px" width= "200px" alt=""/></p>
                            <button onClick = {(e)=>grantBelt(e, student)} className="btn-success">Grant Belt</button>
                            <Link to={`/students/edit/${student._id}`}><button className="btn-warning">Edit</button></Link>


                            
                        </div>
                    </div>
                })
            }
           </div>
        </div>
    );
};


export default AllStudents;