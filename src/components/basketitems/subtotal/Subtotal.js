import React, { useEffect } from 'react'
import { Button } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import { useHistory } from 'react-router-dom';


const Subtotal = ({ basketQuantity, basketTotalAmount, loggedinUser, postage }) => {
    const history = useHistory();
    let total = (basketTotalAmount + parseFloat(postage)).toFixed(2);

    return (
        <div className="subtotal">
            <CurrencyFormat
                displayType={'text'}
                thousandSeparator={true}
                decimalScale={2}
                fixedDecimalScale={true}
                prefix={'£'}
                value={basketTotalAmount}
                renderText={value => (
                    <>
                        <div className="subtotal__amount">
                            <div className="subtotal__price">
                                <h3>Subtotal <span className="subtotal__qty"> ( {basketQuantity} item ):</span></h3>
                                <span>{value}</span>
                            </div>
                            {
                                postage &&
                                <div className={`${postage && "subtotal__postage"}`}>
                                    <h3>Postage:</h3>
                                    <span> {parseFloat(postage).toFixed(2)}</span>
                                </div>
                            }
                            <div className="subtotal__gift">
                                <CheckBoxOutlineBlankIcon />
                                <small>This order contains gift box</small>
                            </div>
                            {
                                postage &&
                                (<> <hr className="total__divider" />
                                    <div className="subtotal__total">
                                        <p>Total: </p>
                                        <span>£ {total}</span>
                                    </div>
                                </>
                                )
                            }
                        </div>
                        {
                            !postage ?
                                <Button
                                    className="subtotal__button"
                                    variant="contained"
                                    color="primary"
                                    onClick={() => loggedinUser?.email ? history.push('/checkout') : history.push('/signin')}
                                >Proceed to Checkout</Button>
                                : ''
                        }
                    </>
                )
                } />
        </div >
    )
}

export default Subtotal
