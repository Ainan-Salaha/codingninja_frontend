import React, {useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './enroll.css';
import { useOrder } from '../Context/Order';
import { useAuth } from '../Context/Auth';

const CourseDetail = () => {
const location = useLocation();
const data= [location.state]
console.log(data);
// eslint-disable-next-line
  const [order, setOrder] = useOrder();
  // eslint-disable-next-line
  const [price, setPrice] = useState([]);
  const [auth] = useAuth();
  const navigate = useNavigate();



  const handlePayment = () => {
    if (!auth.user) {
      alert('First Sign-In');
      navigate('/login');
    }
    if (auth.token && auth.user.name) {
      navigate('/payment');
    }
  };

  return (
    <>
      {data &&
        data.map((item, index) => {
          return (
            <div key={index} className='detailContainer' style={item}>
              <div className='detailSection'>
                <div>
                  <h1>
                    {item.type}-{item.name}
                  </h1>
                  <br />
                  <h5>{item.for}</h5>
                  <br />
                  <p>{item.description}</p>
                  <br />
                  <p>
                    4.8 &nbsp;<span><img src={item.rating} alt='404' />&nbsp; {item.ratedBy}</span>
                  </p>
                </div>
                <div className='enroll_btn'>
                  <button className='btn_1'>Enroll Now</button>
                  <button className='btn_2'>Try for free</button>
                </div>
                <hr />
                <div className='mini-details'>
                  <div>{item.enrolled}</div>
                  <div>{item.projects}</div>
                  <div>{item.duration}</div>
                  <div>{item.time} of lecture videos</div>
                </div>
              </div>
              <div className='image-section'>
                {/* <img src={item.courseImg} alt='404' /> */}
              </div>
            </div>
          );
        })}

      <div>
        <img
          style={{ width: '100%' }}
          src='https://files.codingninjas.com/gsst-homepage_web-27881.svg'
          alt='404'
        />
      </div>

      {data &&
        data.map((item, index) => {
          return (
            <div className='price-section' key={index}>
              <div>
                <h1>Select a plan based on your needs</h1>
              </div>
              <div className='price-flex'>
                <div className='price-flex-card'>
                  <h1>Basic</h1>
                  <h5>Rs. {item.early_price}/-</h5>
                  <Link
                    className='link'
                    to='/payment'
                    onClick={() => {
                      setOrder([item]);
                      localStorage.setItem('order', JSON.stringify([item]));
                      console.log('Item Added to Order');

                      setPrice(...[item.name]);
                      // console.log(price);
                    }}
                  >
                    <h6>Proceed to checkout</h6>
                  </Link>
                </div>

                <div className='price-flex-card'>
                  <h1>Standard</h1>
            <h5>
                
           Rs. {item.price}/-
          
            </h5>
            <Link className='link' to='/payment' onClick={() => {
                setOrder([item]);
                localStorage.setItem('order', JSON.stringify([item]));
                console.log("Item Added to Order");
              }}>
            </Link>
            <h6 onClick={handlePayment}> 
                Proceed to checkout
            </h6>
        </div>
    </div>
    <div className='pay-detail'>
        <div><img src='https://files.codingninjas.com/percentage-1-11045.png' alt='404'/>No Cost EMI on all major credit cards*</div>
        <div><img src='https://files.codingninjas.com/group-11044.png' alt='404'/>No Cost EMI on all major credit cards*</div>
        <div><img src='https://files.codingninjas.com/calendar-11043.png' alt='404'/>7-day money back Guarantee</div>
    </div>
</div>
        )
    })
}
</>

  )
}

export default CourseDetail