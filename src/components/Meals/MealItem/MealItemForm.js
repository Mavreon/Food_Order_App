import React from "react";
import styles from './MealItemForm.module.css';
import Input from "../../UI/Input";

let count = 0;
const setCount = (value)=>{
    count = value;
    // console.log("Count: " + count);
};

const MealItemForm = (props)=>{
    const onAddHandler = (event)=>{
        event.preventDefault();
        props.setItemCount(count);
        props.addToCart();
        // console.log("Add Button Clicked");
    };
  
    return(
        <form className={styles.form} onSubmit={onAddHandler}>
            <Input sendValue ={setCount} input={{id:`amount + ${props.id}`, type:`number`, min:1, max:5, defaultValue:1}} label={`Count`}/>
            <button>+ Add</button>
        </form>
    );
}

export default MealItemForm;