import React,{useState} from "react";
import styles from './Input.module.css'

const Input = (props)=>{
    const [value, setValue] = useState(props.input.defaultValue);
    const onChangeHandler=(event)=>{
        setValue(Number(event.target.value));
        console.log(value);
    }
    
    props.sendValue(value);

    return(
        <div className={styles.input}>
            <label htmlFor={props.input.id}> {props.label} </label>
            <input {...props.input} onChange={onChangeHandler} />
        </div>
    )
}

export default Input;