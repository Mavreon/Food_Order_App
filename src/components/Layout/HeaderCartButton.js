import React, {useContext} from "react";
import styles from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../context/cart-context";

const HeaderCartButton = (props)=>{
    const ctx = useContext(CartContext);
    const onClickHandler = ()=>{
        // console.log('Open Cart');
        ctx.setIsCartButtonClicked(true);
    }
    return(
        <button className={styles.button} onClick={onClickHandler}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={styles.badge}>
                {`${ctx.cartItems.length}`}
            </span>
        </button>
    )
}

export default HeaderCartButton;