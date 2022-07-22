import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/index';

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  // const item = useSelector(state => state.cart.item)
  const disptach = useDispatch();

  const decreaseCartItemQuantity = () => {
    disptach(cartActions.removeItemFromCart({
      id,
      title
    }));  
  }

  const increaseCartItemQuantity = () => {
    disptach(cartActions.addItemToCart({
      id,
      title, 
      price
    }));  
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseCartItemQuantity}>-</button>
          <button onClick={increaseCartItemQuantity}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
