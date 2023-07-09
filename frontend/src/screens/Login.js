import React, { useState } from 'react'
import './css/signup/Signup.css'
import './css/signup/Responsive.css'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const navigate=useNavigate()
    const [error,setError]=useState("")

    const [credentials,setCredentials]=useState({
        email:"",
        password:"",
    })

    const handleOnChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }

    const handleLoginSubmit= async(e)=>{
        e.preventDefault();

        try {
            const response=await fetch("http://localhost:5000/api/authenticateuser",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                email:credentials.email,
                password:credentials.password,
            })
        })
        const json=await response.json()
        
        if(response.ok){
            localStorage.setItem("authToken",json.authToken)
            navigate("/")
        }

        else{
            setError(json.message)
        }

        } catch (error) {
            setError("Sorry! Server is down 🥺")
        }
        


    }

  return (

    <div className="signup-container">
        <div className="box">

            <div className="title">
            <h1>Todo Champion - Login</h1>
            </div>
            <form onSubmit={handleLoginSubmit}>
            <input required name='email' type="text" placeholder='Email' value={credentials.email} onChange={handleOnChange}/>
            <input required  name='password' type="text" placeholder='Password' value={credentials.password} onChange={handleOnChange}/>
            <button>Login</button>
            {
                error.length!==0?(
                    <button onClick={()=>setError("")}>{error}</button>
                ):('')
            }
            </form>
            <p><Link id='login-link' to='/signup'>Create A New Account</Link></p>

        </div>
    </div>

  )
}

export default Login;