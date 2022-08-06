import { useContext } from 'react';
import CartContext from '../../context/cart-context';
import styles from './CartItem.module.css';

const CartItem = (props) => {
  const ctx = useContext(CartContext);
  const item = props.item;
  const price = `$${item.price.toFixed(2)}`;
  
  return (
    <li className={styles['cart-item']}>
      <div>
        <h2>{item.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{price}</span>
          <span className={styles.amount}>x {item.amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;