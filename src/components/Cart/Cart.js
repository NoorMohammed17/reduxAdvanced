import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartReducer.items);

  const content = (
    <ul>
    {cartItems.map((item) => (
      <CartItem
        //these all data comes from redux store so the key should match with the keys in the addTocart existing item
        key={item.id}
        item={{
          id:item.id,
          title: item.name,
          quantity: item.quantity,
          total: item.totalPrice,
          price: item.price,
        }}
      />
    ))}
  </ul>

  )
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
       {cartItems.length === 0  ? (<p className={classes.error}>No items in the cart</p>) : content}
    
    </Card>
  );
};

export default Cart;
