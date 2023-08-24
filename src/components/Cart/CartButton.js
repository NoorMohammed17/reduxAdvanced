import classes from './CartButton.module.css';
import { uiActions } from '../../Store/ui-slice';
import { useDispatch ,useSelector} from 'react-redux';

const CartButton = (props) => {
  const cartQunatity = useSelector(state => state.cartReducer.totalQuantity)
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle())

  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQunatity}</span>
    </button>
  );
};

export default CartButton;
