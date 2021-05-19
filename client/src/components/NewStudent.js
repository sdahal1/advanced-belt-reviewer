import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from "@reach/router";

const NewStudent = () => {

    const [forminfo, setforminfo] = useState({
        first_name:"",
        last_name:"",
        graduation_date:"",
        profilePic:"",
        numberOfBelts:0,
        isVeteran:false
    })

    const [errors, seterrors]= useState({})

    const changehandler = (e)=>{
        console.log("changin some inputs")
        console.log(e.target.checked)

        if(e.target.type =="checkbox"){
            setforminfo({
                ...forminfo,
                [e.target.name]: e.target.checked
            })

        }else{
            setforminfo({
                ...forminfo,
                [e.target.name]: e.target.value
            })
        }
    }


    const submithandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/students/create",forminfo )
            .then(res=>{
                console.log(res)
                //if there are errors, then response is going to have res.data.errors
                if(res.data.errors){
                    seterrors(res.data.errors)

                }else{
                    navigate("/")
                }


            })
            .catch(err=>console.log(err))

    }

    return (
        <div className="container">
            <h3>Enroll a new student below: </h3>
            <form onSubmit={submithandler}>
                <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    <input onChange={changehandler} type="text" name="first_name" id="" className="form-control"/>
                    <p className= "text-danger">{errors.first_name? errors.first_name.message: ""}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                    <input onChange={changehandler} type="text" name="last_name" id="" className="form-control"/>
                    <p className= "text-danger">{errors.last_name? errors.last_name.message: ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Graduation Date:</label>
                    <input onChange={changehandler} type="date" name="graduation_date" id="" className="form-control"/>
                    <p className= "text-danger">{errors.graduation_date? errors.graduation_date.message: ""}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="">Profile Picture Link:</label>
                    <input onChange={changehandler} type="text" name="profilePic" id="" className="form-control"/>
                    <p className= "text-danger">{errors.profilePic? errors.profilePic.message: ""}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="">Is Veteran?:</label>
                    <input onChange={changehandler} checked= {forminfo.isVeteran} value= {forminfo.isVeteran} type="checkbox" name="isVeteran" className="form-control"/>
                </div>
                <input type="submit" value="Enroll!"/>
            </form>
        </div>
    );
};



export default NewStudent;