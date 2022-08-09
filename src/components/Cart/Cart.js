import React, { useContext, useState} from "react";
import CartContext from "../../context/cart-context";
import Modal from "../UI/Modal";
import styles from './Cart.module.css';
import CartItem from "./CartItem";

const Cart = ()=>{
    // console.log("Rerun");
    const ctx = useContext(CartContext);
    const [items, setItems] = useState(ctx.cartItems);

    const refresh = (items)=>{
        setItems(items);
    }

    const cartItems = (
        <ul className={styles['cart-items']}>
            {items.map(item => 
            <CartItem
            key={item.id} 
            item ={item}
            refresh = {refresh}
            />)}
        </ul>
    );
    
    const onCloseHandler = ()=>{
        // console.log("Close Cart");
        ctx.setIsCartButtonClicked(false);
    };
    const onOrderHandler = ()=>{
        console.log("Order");
    };

    
    return(
        <Modal>
            {cartItems}
            <div className={styles.total}>
            {
                ctx.cartItems.length > 0 ? 
                <React.Fragment><span>Total Amount</span> <span>${`${ctx.totalAmount}`}</span></React.Fragment>:
                <React.Fragment><span>Cart Empty</span></React.Fragment>
            }
                
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={onCloseHandler}>Close</button>
                <button className={styles['button']} onClick={onOrderHandler}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart