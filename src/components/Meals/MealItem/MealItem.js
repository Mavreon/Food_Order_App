import React, {useContext} from "react";
import styles from './MealItem.module.css';
import MealItemForm from "./MealItemForm";
import CartContext from "../../../context/cart-context";
// import { isElement } from "react-dom/test-utils";

const MealItem = (props)=>{
    const ctx = useContext(CartContext);
    const meal = props.meal;
    const price =  `$${meal.price.toFixed(2)}`;

    const newCartItemDetails = {
        ...meal,
        amount: 0
    };

    const setItemCount=(count)=>{
        newCartItemDetails.amount = +count;
        // console.log("NewCartItemDetailsAmount: "+newCartItemDetails.amount);
    }

    const addToCart = ()=>{
        for(let i = 0; i< ctx.cartItems.length; i++)
        {
            if(ctx.cartItems[i].id === meal.id)
            {
                console.log(ctx.cartItems[i].name + " repeated");
                ctx.cartItems.splice(i, 1);
                console.log(ctx.cartItems);
                break;
            }
        }
        ctx.setCartItems([newCartItemDetails, ...ctx.cartItems]);
        // console.log("CartItems: "+ ctx.cartItems);
    };

    return (
        <li className={styles.meal}>
            <div>
                <h3>{meal.name}</h3>
                <div className={styles.description}>{meal.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm
                id={meal.id}
                addToCart={addToCart}
                setItemCount={setItemCount}/>
            </div>
        </li>
    )
}

export default MealItem;