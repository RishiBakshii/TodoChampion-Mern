import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import './css/community/community.css'
import './css/community/responsive.css'

function Community() {


  const [userdata,setUserData]=useState([])

  const getAllUserData=async()=>{

    try {
      const response= await fetch("http://localhost:5000/api/getalluserdata")

      if(response.ok){
        const alluserdata=await response.json()
        setUserData(alluserdata)
      }

      else{
        alert("Error fetching the data from server")
      }

    } catch (error) {
      alert("Sorry server is down!😮")
    }



  }


  useEffect(()=>{

    getAllUserData()

  },[])


  return (
    <>
    <Navbar/>

    <div className="community-grid">
      {
        userdata.map((user)=>{
          return  <div className="profile-card">

        <div className="profile-image-contanier">
          <img src={user.image} alt="" />
        </div>

        <div className="user-details-box">
          <h2>{user.name}</h2>
          <p>{user.location}</p>
          <p>Active Todos - {user.todos.length}</p>
        </div>

      </div>
        })
      }
     


    </div>
    </>
  )
}

export default Community