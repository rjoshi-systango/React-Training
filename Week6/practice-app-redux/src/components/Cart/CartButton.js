import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/index'; 

const CartButton = (props) => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const disptach = useDispatch();
  
  const cartClickHandler = () => {
    disptach(cartActions.onClickCartButton());
  }

  return (
    <button onClick={cartClickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
