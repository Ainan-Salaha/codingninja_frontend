import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/Auth";
import DropIn from "braintree-web-drop-in-react";
import { useOrder } from "../../Context/Order";
import axios from "axios";
import "./payment.css";
import { Link } from "react-router-dom";
// import enrollbg from '../../../Images/enrollbg.jpeg'

const PaymentPage = () => {
  // eslint-disable-next-line
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState(null);
  const [auth] = useAuth();
  const [order, setOrder] = useOrder();
  // Get payment gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get("https://backend-codingninja.onrender.com/braintree/token");
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAlert=()=>{
    alert("Payment Successfull")
  }
  
  useEffect(() => {
    getToken();
  }, [auth?.token]);
  
  // handle payments
  const handlePayment = async () => {
    
      try {
        const { nonce } = await instance.requestPaymentMethod();
        // eslint-disable-next-line
        await axios.post("https://backend-codingninja.onrender.com/braintree/payment", {
          nonce,
          order,
        });
        console.log("payment")
        alert("payment Completed");
        localStorage.removeItem("order");
        setOrder([]);
      } catch (error) {
        console.log(error);
      }
    
  };
  return (
    <>
      <div className="payment_bg">
        <div className="payment">
          {!clientToken || !order?.length ? ("") : (
            <>
              {clientToken && (
                <DropIn
                  options={{
                    authorization: clientToken,
                    paypal: {
                      flow: "vault",
                    },
                  }}
                  onInstance={(instance) => setInstance(instance)}
                />
              )}
              <Link to='/' onClick={handleAlert}>
              <button
                className="payment_btn"
                onClick={handlePayment}
                disabled={!instance}
                >
               Make Payment
              </button>
                </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
