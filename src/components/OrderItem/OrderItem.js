import './OrderItem.css';
import GameCover from "../GameCover/GameCover";
import {useDispatch} from "react-redux";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {deleteItemFromCard} from "../../redux/cart/reducer";

function OrderItem({ game }) {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteItemFromCard(game.id));
    }
    return (
        <div className={'order-item'}>
            <div className="order-item__cover">
                <GameCover image={game.image}/>
            </div>
            <div className="order-item__title">
                <span>{game.title}</span>
            </div>
            <div className="order-item__price">
                <span>{game.price} руб.</span>
                <AiOutlineCloseCircle // иконка крестика из библиотеки react-icons
                size={25}
                className={'card-basket-item__delete-icon'}
                onClick={handleClick}
                />
            </div>
        </div>
    );
}
export default OrderItem;