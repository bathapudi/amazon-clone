import React from 'react'
import Styles from './Subtotal.module.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../context/ShoppingCart'

 
export default function Subtotal() {

    const [{ basket }] = useStateValue();
    var total = basket.reduce((sum, current) => sum + current.price, 0);

    return (
        <div className={Styles.subtotal}>
            <CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'}

                renderText={(value) => (
                    <>
                        <p>
                            {/* Part of the homework */}
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
            ></CurrencyFormat>
            <button>Proceed to checkout</button>
        </div>
    )
}
