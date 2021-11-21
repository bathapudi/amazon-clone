import React from 'react'
import Styles from './Checkout.module.css'
import Subtotal from '../subtotal/Subtotal'
import CheckoutProduct from '../checkoutproduct.js/CheckoutProduct'

import { useStateValue } from '../../context/ShoppingCart'
function Checkout() {
    const [{ basket }] = useStateValue();



    var checkoutProductsList = basket.map((item, index) => {

        return <CheckoutProduct id={item.id} price={item.price} url={item.url} title={item.title} rating={item.rating}></CheckoutProduct>
    });


    return (
        <div className={Styles.checkout}>
            <div className={Styles.checkout__left}>
                <img
                    className={Styles.checkout__ad}
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                <div>
                    <h2 className={Styles.checkout__title}>Your shopping Basket</h2>
                    {checkoutProductsList}
                </div>

            </div>


            <div className="checkout__right">

                <Subtotal ></Subtotal>
            </div>
        </div>
    )
}

export default Checkout
