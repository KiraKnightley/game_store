import './CardMenu.css';
import {calcTotalPrice} from "../../redux/untils";
import Button from "../Button/Button";
import CardBasketItem from "../CardBasketItem/CardBasketItem";

function CardMenu({ items, onClick }) {
    return (
        <div className={'card-menu'}>
            <div className="card-menu__games-list">
                { items.length > 0 ? items.map((game) =>
                    <CardBasketItem key={game.title}
                                    title={game.title}
                                    id={game.id}
                                    price={game.price}/>)
                    : 'Корзина пуста'}
            </div>
            {
                items.length > 0 ?
                    <div className={'.card-menu__arrange'}>
                        <div className={'.card-menu__total-price'}>
                            <span>Итого: </span>
                            <span>{calcTotalPrice(items)} руб.</span>
                        </div>
                        <Button type={'primary'} size={'m'} onClick={ onClick }>Оформить заказ</Button>
                    </div>
                    : null
            }
        </div>
    )
}
export default CardMenu;