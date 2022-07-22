import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import  { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItem = useSelector(state => state.cart.item);
  // console.log(cartItem);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItem.map((item) => {
          if(item.quantity > 0) {
            return <CartItem key={item.id} item={
              {
                id: item.id,
                title: item.title, 
                quantity: item.quantity, 
                total: item.total,
                price: item.price
              }}/>
          }
        
        })}
      
      </ul>
    </Card>
  );
};

export default Cart;
