import './GameBuy.css';
import Button from "../Button/Button";

function GameBuy({ game }) {
    return (
        <div className={'game-buy'}>
            <span className={'game-buy__price'}>{game.price} руб.</span>
            <Button type='primary' onClick={ () => null} >В корзину</Button>
        </div>
    )
}
export default GameBuy;