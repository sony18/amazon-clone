import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './OrderComplete.css'

const OrderComplete = () => {
  
    return (
        <div className="ordercomplete">
            <h3>Your order completed .....................👏 </h3>
            <p>Email confirmation sent... will notify once dispatch</p>
            <Link to="/" ><Button
                variant="contained"
                color="primary"
            >Continue Shopping</Button></Link>
        </div>
    )
}

export default OrderComplete
