import axios from 'axios';
import React, {useState, useEffect} from 'react';
import moment from 'moment';
import { navigate } from '@reach/router';



const Edit = (props) => {
    const [forminfo, setforminfo] = useState({
            first_name:"",
            last_name:"",
            graduation_date:"",
            profilePic:"",
            numberOfBelts:0,
            isVeteran:false
        })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/students/${props.id}`)
            .then(res=>{
                console.log("RESPONSE ABOUT ONE STUDENT", res)
                setforminfo(res.data.results)
            })
            .catch(err=> console.log(err))
    },[])

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


    const submithandler= (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/students/update/${props.id}`, forminfo)
            .then(res=>{
                console.log(res)
                navigate("/")
            })
            .catch(err=> console.log(err))
    }

    
    return (
        <div className="container">
        <h3>Edit student below: </h3>
        <form onSubmit={submithandler}>
            <div className="form-group">
                <label htmlFor="">First Name:</label>
                <input onChange={changehandler} type="text" name="first_name" id="" className="form-control" value= {forminfo.first_name}/>
                {/* <p className= "text-danger">{errors.first_name? errors.first_name.message: ""}</p> */}

            </div>
            <div className="form-group">
                <label htmlFor="">Last Name:</label>
                <input onChange={changehandler} type="text" name="last_name" id="" className="form-control" value= {forminfo.last_name}/>
                {/* <p className= "text-danger">{errors.last_name? errors.last_name.message: ""}</p> */}
            </div>
            <div className="form-group">
                <label htmlFor="">Graduation Date:</label>
                <input onChange={changehandler} type="date" name="graduation_date" id="" className="form-control" value= {moment(forminfo.graduation_date).format("YYYY-MM-DD")}/>
                {/* <p className= "text-danger">{errors.graduation_date? errors.graduation_date.message: ""}</p> */}

            </div>
            <div className="form-group">
                <label htmlFor="">Profile Picture Link:</label>
                <input onChange={changehandler} type="text" name="profilePic" id="" className="form-control" value= {forminfo.profilePic}/>
                {/* <p className= "text-danger">{errors.profilePic? errors.profilePic.message: ""}</p> */}

            </div>
            <div className="form-group">
                <label htmlFor="">Number of belts:</label>
                <input onChange={changehandler} type="number" name="numberOfBelts" id="" className="form-control" value= {forminfo.numberOfBelts}/>
                {/* <p className= "text-danger">{errors.profilePic? errors.profilePic.message: ""}</p> */}

            </div>
            <div className="form-group">
                <label htmlFor="">Is Veteran?:</label>
                <input onChange={changehandler} checked= {forminfo.isVeteran} value= {forminfo.isVeteran} type="checkbox" name="isVeteran" className="form-control"/>
            </div>
            <input type="submit" value="Update!"/>
        </form>
    </div>
    );
};


export default Edit;