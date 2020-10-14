import { Button } from '@material-ui/core'
import React from 'react'
import './Product.css'
import { actionType } from '../../context/reducer'
import { useGlobalData } from '../../context/GlobalContext'
import { useHistory } from 'react-router-dom'

const Product = ({ id, title, name, img, price, description,rating}) => {
  const [{ basket }, dispatch] = useGlobalData();
  const history = useHistory();
  const handleBasket = () => {
    dispatch({
      type: actionType.LOAD_BASKET,
      payload: {
        id,
        title,
        name,
        img,
        price,
        amount: price,
        description,
        quantity: 1,
        rating
      }
    });
    history.push('/basket')
  }

  return (
    <div className="product">
      <div className="product__detail">
        <h2>{title}</h2>
        <h3>{name}</h3>
        <strong>Description: </strong> <p>{description}</p>
        <strong className="product__rating">{Array(rating).fill().map((_,i)=> <span>⭐</span> )}</strong>
        <p className="product__price"> <span>Price: </span> <span>£</span>{price}</p>
      </div>
      <img src={img} alt="" />
      <Button
        className="product__button"
        variant="contained"
        color="primary"
        onClick={handleBasket}>Add to Basket</Button>
    </div>
  )
}

export default Product