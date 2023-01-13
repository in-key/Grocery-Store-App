import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeProduce } from '../../store/cart';
import { updateProduce } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  const handleIncrement = (item) => {
    dispatch(updateProduce(item.id, count + 1))
  }

  const handleDecrement = (item) => {
    if (count <= 1){
      dispatch(removeProduce(item.id));
    } else {
      dispatch(updateProduce(item.id, count - 1))
    }
  }

  const handleChange = (e, item) => {
    dispatch(updateProduce(item.id, Number(e.target.value)))
  }

  const handleRemove = (item) => {
    dispatch(removeProduce(item.id));
  }

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={(e) => handleChange(e, item)}
        />
        <button
          className="cart-item-button"
          onClick={() => handleIncrement(item)}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => handleDecrement(item)}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => handleRemove(item)}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
