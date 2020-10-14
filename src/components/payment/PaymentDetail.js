import React, { useState } from 'react'
import './PaymentDetail.css'
import { CardElement, useStripe } from '@stripe/react-stripe-js';
import Subtotal from '../basketitems/subtotal/Subtotal';
import { Button } from '@material-ui/core';
import {actionType} from '../../context/reducer';
import { useHistory } from 'react-router-dom';
import { useGlobalData } from '../../context/GlobalContext';

const PaymentDetail = ({ basketTotalAmount, basketQuantity, loggedinUser, postage }) => {
    const [{},dispatch] = useGlobalData();
    const [error, setError] = useState('');
    const [cardDetail, setCardDetail] = useState(false);
    const history = useHistory();
    const stripe = useStripe();

//  alert card Errors/empty basket/redirect user  to order completion page
    const handleSubmit = async (e) => {
        e.preventDefault()
       if(!cardDetail){ 
            alert('pls. enter card details')
             return;
            }
       if(error){
                alert(error)        
                return;
            }          
       history.replace('/ordercomplete')
       dispatch({
              type:actionType.EMPTY_BASKET,
              payload:null
          })
      
  }

    const handleChange = (e) => {         
        setCardDetail(!e.empty && true)
        setError(e.error ? e.error.message : "")
    }
    return (
        <div className="paymentDetail">
            <div className="paymentDetail__title">Payment Method</div>
            <form onSubmit={handleSubmit} className="paymentDetail__content">
                <div className="paymentDetail__cardElement">
                    <CardElement onChange={handleChange} />
                    <div className="paymentDetail__note">
                        <h4>Sample card </h4>
                        <ul>
                            <li> valid card no: 4242 4242 4242 4242</li>
                            <li>zip code : any no(5 digits)</li>
                        </ul>
                    </div>
                </div>
                <div className="paymentDetail__buynow">
                    <Subtotal
                        basketTotalAmount={basketTotalAmount}
                        basketQuantity={basketQuantity}
                        loggedinUser={loggedinUser}
                        postage={postage}
                    />
                    <Button
                        type="submit"
                        disabled={!stripe}
                        variant="outlined"
                    >Buy now</Button>
                </div>
            </form>
        </div>
    )
}
export default PaymentDetail
