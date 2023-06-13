import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './enroll.css'

const Courses = () => {
    const[data,setData]=useState([]);
    console.log(data)

    useEffect(()=>{
        axios.get('https://backend-codingninja.onrender.com/course')
        .then((res)=>setData(res.data))
        .catch(err=>console.log(err));
    },[])

  return (
    <div>
        <h1 style={{textAlign:"center"}}>Course Details</h1>
        <Link to="/home">
              <span className='back'>
                <i className="fa-solid fa-xmark"></i>
              </span>
            </Link>
        <div className='courseConatiner'>
        {
            data && data.map((item,index)=>{
                return(
                    <Link style={{color:"black"}} className='link' to='/course_detail' state={item}>
                    <div key={index}  className='course_card'>
                        <div className='cardOne'>
                            <div key={index} >
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

export default Courses