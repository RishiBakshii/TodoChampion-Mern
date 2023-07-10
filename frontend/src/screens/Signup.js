import React, { useState } from 'react'
import './css/signup/Signup.css'
import './css/signup/Responsive.css'
import { Link, redirect, useNavigate } from 'react-router-dom'

function Signup() {

    const navigate=useNavigate()
    const [image,setImage]=useState('')

    const [credentials,setCredentials]=useState({
        name:"",
        email:"",
        password:"",
        location:""
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
                image:image,
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

    const convertToBase64=(e)=>{
        let reader=new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload=()=>{
            setImage(reader.result)
        }

        reader.onerror=(error)=>{
            console.log("Error uploading the image",error)
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
                <div className="profile-image-container">
                    <input type='file' accept='image/*' onChange={convertToBase64} aria-description='asd'/>
                    <img src={`${image!==''?image:"data:image/png;base64,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"}`} alt="Profile Image" />
                </div>
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