import React, { useContext } from "react";
import CartContext from "../../context/cart-context";
import Modal from "../UI/Modal";
import styles from './Cart.module.css';
import CartItem from "./CartItem";

const Cart = (props)=>{
    const ctx = useContext(CartContext);
    const Items = ctx.cartItems;

    const cartItems = (
        <ul className={styles['cart-items']}>
            {Items.map(item => 
            <CartItem
            key={item.id} 
            item ={item}
            onRemove={()=>{}}
            onAdd={()=>{}}
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