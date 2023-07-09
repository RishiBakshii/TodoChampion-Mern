import React, { useState } from 'react'
import './css/signup/Signup.css'
import './css/signup/Responsive.css'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {

    const navigate=useNavigate()

    const [credentials,setCredentials]=useState({
        name:"",
        email:"",
        password:"",
        location:"",
    })

    const handleOnChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }

    const handleSignupSubmit=async(e)=>{
        e.preventDefault();

        const response=await fetch("http://localhost:5000/api/createnewuser",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:credentials.name,
                email:credentials.email,
                password:credentials.password,
                location:credentials.location,
            })
        })

        const json=await response.json()

        if(!json.createdNewUser){
            alert("Error creating a new user ☹️")
        }
        else{
            setCredentials({name:"",email:"",password:"",location:""})
            navigate("/login")
        }




    }

  return (

    <>
    <div className="signup-container">
        <div className="box">

            <div className="title">
            <h1>Todo Champion - Signup</h1>
            </div>
            <form onSubmit={handleSignupSubmit}>
            <input name='name' type="text" placeholder='Username' value={credentials.name} onChange={handleOnChange}/>
            <input name='email' type="text" placeholder='Email' value={credentials.email} onChange={handleOnChange}/>
            <input name='password' type="text" placeholder='Password' value={credentials.password} onChange={handleOnChange}/>
            <input name='location' type="text" placeholder='Location' value={credentials.location} onChange={handleOnChange}/>
            <button>Signup</button>
            </form>
            <p>Already a User- <Link id='login-link' to='/login'>Login</Link></p>

        </div>
    </div>
    
    </>
  )
}

export default Signup