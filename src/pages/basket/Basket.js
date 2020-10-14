import React from 'react'
import { useGlobalData } from '../../context/GlobalContext'
import './Basket.css'
import BasketItem from '../../components/basketitems/BasketItem'
import { selectBasketTotalAmount, selectBasketTotalItem } from '../../context/reducer'
import CurrencyFormat from 'react-currency-format';
import Subtotal from '../../components/basketitems/subtotal/Subtotal'
import BasketMessage from '../../components/basketitems/BasketMessage';

const Basket = () => {
    const [{ basket, loggedinUser }] = useGlobalData();
    console.log('basket_ids:' + basket?.map(item => item.id));
    return (
        <div className="basket">
            <div className="basket__left">
                <p className="basket__advert">Advert Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, unde!</p>
                {
                 (selectBasketTotalItem(basket) <= 0)
                        ? <BasketMessage />
                        : basket.map((item, i) =>
                            <BasketItem
                                key={i}
                                item={item} />)
                }
                {selectBasketTotalItem(basket) > 0 &&
                    <div className="basket__left-subtotal">
                        <p>Subtotal <span className="basket__left-figure">(
                            < CurrencyFormat
                                displayType={'text'}
                                thousandSeparator={true}
                                decimalScale={2}
                                fixedDecimalScale={true}
                                prefix={'£'}
                                value={selectBasketTotalAmount(basket)} />)</span></p>
                    </div>
                }
            </div>
            <div className="basket__right">
                {selectBasketTotalItem(basket) > 0 &&
                    <Subtotal
                        basketTotalAmount={selectBasketTotalAmount(basket)}
                        basketQuantity={selectBasketTotalItem(basket)}
                        loggedinUser={loggedinUser}
                    />
                }
            </div>
        </div>
    )

}

export default Basket

