import React from 'react'
import BasketItem from '../../components/basketitems/BasketItem';
import BasketMessage from '../../components/basketitems/BasketMessage';
import { useGlobalData } from '../../context/GlobalContext'
import { selectBasketTotalAmount, selectBasketTotalItem } from '../../context/reducer';
import DeliveryOption from '../../components/deliveryoption/DeliveryOption';
import PaymentDetail from '../../components/payment/PaymentDetail';
import './Checkout.css'

const Checkout = () => {
    const [{ basket, loggedinUser }] = useGlobalData();
    return (
        <div className="checkout">
            <div className="checkout__address">
                <h3>Review Your Order</h3>
                <h4>Delivery Address</h4>
                <p>User name</p>
                <p>50 Bath Rd</p>
                <p>Reading, Uk</p>
            </div>
            <div className="checkout__orderItems">
                <div className="checkout__items">
                    <h3 className="checkout__itemsTitle">Guaranteed Delivery by ------------- 20 sept 2020</h3>
                    {
                        (selectBasketTotalItem(basket) <= 0)
                            ? <BasketMessage />
                            : basket.map((item, i) =>
                                <BasketItem
                                    key={i}
                                    item={item} />)
                    }
                </div>
                <div className="checkout__deliveryOption">
                    <DeliveryOption />
                </div>
            </div>
            <div className="checkout__payment">
                <PaymentDetail
                    basketTotalAmount={selectBasketTotalAmount(basket)}
                    basketQuantity={selectBasketTotalItem(basket)}
                    loggedinUser={loggedinUser}
                    postage={0.2} />
            </div>
        </div>
    )
}

export default Checkout
