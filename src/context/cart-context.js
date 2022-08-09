import React, {useState, useEffect} from "react";

const CartContext = React.createContext({});

let amount = 0;
export const CartContextProvider = (props)=>{
    const [isCartButtonClicked, setIsCartButtonClicked] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    console.log("Context Rerun");
    const removeItem = (newCartItemDetails)=>{
        let newCartItems;
        for(let i = 0; i< cartItems.length; i++)
        {
            if(cartItems[i].id === newCartItemDetails.id)
            {
                console.log(cartItems[i].name + " detected");
                cartItems.splice(i, 1);
                newCartItems = cartItems;
                break;
            }
        }
        setCartItems(newCartItems);
    }

    const addToCart = (newCartItemDetails) =>{
        removeItem(newCartItemDetails);
        setCartItems([newCartItemDetails, ...cartItems]);
        // console.log("CartItems: "+ ctx.cartItems);
    };

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
                addToCart: addToCart,
                removeItem: removeItem
            }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;