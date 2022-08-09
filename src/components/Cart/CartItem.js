import { useContext } from 'react';
import CartContext from '../../context/cart-context';
import styles from './CartItem.module.css';

const CartItem = (props) => {
  const ctx = useContext(CartContext);
  const cartItemDetails = props.item;
  const price = `$${cartItemDetails.price.toFixed(2)}`;

  const onRemoveHandler = ()=>{
    cartItemDetails.amount--;
    if(cartItemDetails.amount <= 0)
    {
      ctx.removeItem(cartItemDetails);
      console.log(ctx.cartItems);
      return;
    }
    ctx.setCartItems([cartItemDetails, ...ctx.cartItems]);
    // ctx.addToCart(cartItemDetails);
    console.log(cartItemDetails.amount);
    console.log(ctx.cartItems);
  }

  const onAddHandler = ()=>{
    // console.log("Add");
    cartItemDetails.amount++;
    console.log("Item Count: " + cartItemDetails.amount);
  }
  
  return (
    <li className={styles['cart-item']}>
      <div>
        <h2>{cartItemDetails.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{price}</span>
          <span className={styles.amount}>x {cartItemDetails.amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={onRemoveHandler}>−</button>
        <button onClick={onAddHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;