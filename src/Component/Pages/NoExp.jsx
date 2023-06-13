import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './enroll.css'


const NoExp = () => {
    const[data,setData]=useState([]);

    useEffect(()=>{
        axios.get('https://backend-codingninja.onrender.com/course')
        .then((res)=>setData(res.data))
        .catch(err=>console.log(err));
    },[])
  return (
    <div className='course_flexContainer'>.
    
    <div className='courseContainer'>
                {
          data && data.filter((item)=>item.category==='Web Development').map((item,index)=>{
                return(
                    <Link style={{color:"black"}} className='link' to='/course_detail' key={index}  state={item}>
                    <div  className='course_card' >
                        <div className='cardOne'>
                            <div>
                            <div style={{opacity:'.6'}}>{item.type}</div>
                            <div><h5>{item.name}</h5></div>
                            </div>
                            <img src={item.image} alt='404 course' />
                            </div>
                        <div className='cardTwo'>
                            <div>
                                <img src={item.time_img} alt='404 time'/>{item.time}  
                            </div>
                            <div><img alt='404' src={item.project_img}/>{item.projects}</div>
                            <div>4.8<img alt='404' style={{width:'90px'}} src={item.rating} />({item.enrolled})</div>
                        </div>
 
                    </div>
                    </Link>
                )
            })
        }

    </div>
    </div>
  )
}

export default NoExp