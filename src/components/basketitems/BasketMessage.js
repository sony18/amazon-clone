import React from 'react'
import { Link } from 'react-router-dom'
import SigninButton from '../../components/buttons/SigninButton'
import './BasketItem.css'

const BasketMessage = () => {
    return (
        <div className="basketmessage">
            <h3>Your basket is empty </h3>
            <a href="/">Deal of the Day</a>
            <Link to="/signin" >
                <SigninButton className="basket__signin-button" />
            </Link>
        </div>
    )
}

export default BasketMessage
