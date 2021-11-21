import React from 'react'
import styles from './Product.module.css'
import { useStateValue } from '../../context/ShoppingCart'


function Product({ id, title, url, price, rating }) {
    const [state, dispacth] = useStateValue();
    const addToBasket = () => {

        dispacth(
            {
                type: 'ADD_TO_BASKET',
                item: {
                    id: id,
                    title: title,
                    url: url,
                    price: price,
                    rating: rating
                }
            }
        );
    }
    return (


        <div className={styles.product}>
            <div className={styles.product__info}>
                <p>{title}</p>
                <p className={styles.product__price}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className={styles.product__rating}>

                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>🌟</p>
                        ))}
                </div>


            </div>
            <img src={url}></img>


            <button onClick={() => addToBasket()} className={styles.product__button}>Add to Basket</button>
        </div>

    )
}

export default Product
