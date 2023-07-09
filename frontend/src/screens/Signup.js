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

    const [errors,setErrors]=useState([]);

    const handleOnChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }

    const handleSignupSubmit=async(e)=>{
        e.preventDefault();

        try {
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

        if(response.ok){
            setCredentials({name:"",email:"",password:"",location:""})
            navigate("/login")
        }
        else{
            let json=await response.json()
            setErrors(json.errors.map((error)=>error))
        }
        } 
        
        
        catch (error) {
            console.log(error)
            setErrors("The server is currently down 😖")
        }

    }

  return (

    <>
    <div className="signup-container">
        <div style={{height:`${errors.length!==0?("80vh"):("")}`}} className="box">

            <div className="title">
            <h1>Todo Champion - Signup</h1>
            </div>
            <form onSubmit={handleSignupSubmit}>

            <input required name='name' type="text" placeholder='Username' value={credentials.name} onChange={handleOnChange}/>
            <input required name='email' type="text" placeholder='Email' value={credentials.email} onChange={handleOnChange}/>
            <input required name='password' type="text" placeholder='Password' value={credentials.password} onChange={handleOnChange}/>
            <input required name='location' type="text" placeholder='Location' value={credentials.location} onChange={handleOnChange}/>
            <button>Signup</button>
            {
                errors.map((error)=>{ 
                    return <button style={{backgroundColor:"var(--secondary-background)",outline:"1px solid var(--primary-background)"}} onClick={()=>{setErrors([])}} >{error.msg}</button>
                })
            }
            </form>
            <p>Already a User- <Link id='login-link' to='/login'>Login</Link></p>

        </div>
    </div>
    
    </>
  )
}

export default Signup