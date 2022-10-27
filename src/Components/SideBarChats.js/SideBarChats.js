import React, { useEffect, useState } from 'react'
import {Avatar} from '@mui/material'
import './SideBarChats.css'
import axios from 'axios'
import {Link} from "react-router-dom"
const SideBarChats = ({addNewChat,name,id}) => {

    const [seed,setSeed]=useState("");

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    },[])

  const createChat=async()=>{
    const roomName=prompt("Please Enter Some Name")
    if(roomName){
      try{
      await axios.post("https://whatsappclone-project.herokuapp.com/group/create",{
        groupName:roomName,
      })
    } catch(error){
        console.log(error);
      }
    }
  }


  return !addNewChat ? (
    <Link to ={`/room/${id}`}>
    <div className='sidebarchat'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className='sidebarchat_details'>
        <h4>{name}</h4> 
        </div>
    </div>
    </Link>
  ):(
    <div className='sidebarchat' onClick={createChat}>
        <h2>Add new chat</h2>
    </div>
  )
}

export default SideBarChats