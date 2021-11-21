import React from 'react'
import Styles from './CheckoutProduct.module.css'
import { useStateValue } from '../../context/ShoppingCart'

export default function CheckoutProduct({ id, url, title, price, rating }) {

    const [state, dispacth] = useStateValue();

    const RemoveItem = () => {
        dispacth(
            {
                type: "DELETE_FROM_BASKET",
                item: { id: id }
            }
        )
    }
    return (
        <div>
            <div className={Styles.checkoutProduct}>
                <img src={url} className={Styles.checkoutProduct__image}></img>

                <div className={Styles.checkoutProduct__info}>
                    <p className={Styles.checkoutProduct__title}>
                        {title}
                    </p>
                    <p className={Styles.checkoutProduct__price}>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>

                    <div className={Styles.checkoutProduct__rating}>
                        {
                            Array(rating).fill(<p>🌟</p>)
                        }
                    </div>
                    <button onClick={() => RemoveItem()}>Remove this Item</button>
                </div>
            </div>

        </div>
    )
}
