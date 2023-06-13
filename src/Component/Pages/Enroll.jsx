import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './enroll.css'
import enrollbg from '../../Images/enrollbg.jpeg'
import { Link } from 'react-router-dom';
import Exp from './Exp';
import NoExp from './NoExp';

const Enroll = () => {
    const[data,setData]=useState([]);

    useEffect(()=>{
        axios.get('https://backend-codingninja.onrender.com/course')
        .then((res)=>setData(res.data))
        .catch(err=>console.log(err));
    },[])

  
  return (
    <>
        <img className='enroll_img' alt='404' src={enrollbg} />
    
    <div className='enroll_back'>
        
        <h1><p>Online Coding Courses</p></h1> 
        <h6>Most loved online coding courses for college students and working professionals</h6>
        <div className='enroll_btn'>
            <Link to='/course' className=' btn_1'>
            <button className=' btn_1'>Browse Popular Course</button>
            </Link>
        <button className=' btn_2'>Try for free</button></div>
        </div>

        <div>
            <img src='https://files.codingninjas.com/gsst-homepage_web-27881.svg' alt='404' />
        </div>
        <div className='courseSection'>
        <h2>Courses specially curated for</h2>
        <div className='option'>
        <div  className='no-work-ex'>
        <h6 style={{backgroundColor:'orange',textAlign:'center'}}>No Work Experience</h6>
        <h3>Recommended courses for students</h3>
        <div className='no-work'>
        <NoExp/>
        </div>
        </div>
        <div className='work-exp'>
        <h5 style={{backgroundColor:'orange',textAlign:'center'}}>
        Having work experience</h5>
        <h3>Recommended courses for professionals</h3>
        <div className='work-ex'>
            <Exp/>
        </div>
        
        </div>
        </div>
        </div>
        <h1>More Course</h1>
        <div className='courseConatiner'>
        {
           data && data.slice(0, 3).map((item,index)=>{
                return(
                    <Link style={{color:"black"}} className='link' to='/course_detail'  key={index}>
                    <div  className='course_card'>
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
        <div className='enroll_btn' style={{display:"flex" ,justifyContent:"center"}}>
            <Link to='/course' >
            <button className=' btn_1'>Explore More Courses</button>
            </Link>
            </div>
        </div>
   </>     
  )
}

export default Enroll