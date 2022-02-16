import './GameBuy.css';
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCard, setItemInCard} from "../../redux/cart/reducer";

function GameBuy({ game }) {
    const dispatch = useDispatch(); // хук для action redux
    const items = useSelector(state => state.card.itemsInCard);
    const isItemInCard = items.some(item => item.id === game.id);

    const handleClick = (e) => {
        e.stopPropagation(); // остановили всплытие, что бы не открыл вкладку с игрой
        if (isItemInCard){
            dispatch(deleteItemFromCard(game.id));
        } else {
            dispatch(setItemInCard(game)); // вытягиваем целую игру в массив
        }
    };
    return (
        <div className={'game-buy'}>
            <span className={'game-buy__price'}>{game.price} руб.</span>
            <Button type={isItemInCard ? 'secondary' : 'primary'} onClick={ handleClick } >
                { isItemInCard ? 'Убрать из корзины' : 'В корзину' }
            </Button>
        </div>
    )
}
export default GameBuy;