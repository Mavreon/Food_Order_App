import React, {useState, useEffect} from "react";

const CartContext = React.createContext();

let amount = 0;
export const CartContextProvider = (props)=>{
    const [isCartButtonClicked, setIsCartButtonClicked] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    
    useEffect(() => {
        amount = 0;
        console.log("UseEffect");
        cartItems.forEach(item => {
            amount += item.price * item.amount;
        });
        amount = amount.toFixed(2);
        setTotalAmount(amount);
        console.log(amount);
    }, [cartItems]);
    
    return(
        <CartContext.Provider value={
            {
                isCartButtonClicked:isCartButtonClicked,
                setIsCartButtonClicked: setIsCartButtonClicked,
                cartItems : cartItems,
                setCartItems: setCartItems,
                totalAmount: totalAmount,
            }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;