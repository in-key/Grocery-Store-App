import { useDispatch } from 'react-redux';
import { addProduce } from '../../store/cart';
import { changeLike } from '../../store/produce';

function ProduceDetails({ produce }) {
  const cartItem = {};
  const dispatch = useDispatch();

  const handleAddProduce = (produce) => {
    dispatch(addProduce(produce.id));
  }

  const handleLike = (produce) => {
    dispatch(changeLike(produce));
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={() => handleLike(produce)}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={(e) => handleAddProduce(produce)}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
