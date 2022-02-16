import './BasketBlock.css';
import { BiCartAlt} from "react-icons/bi";
import {useSelector} from "react-redux";
import CardMenu from "../CardMenu/CardMenu";
import {calcTotalPrice} from "../../redux/untils";
import {useState} from "react";
import CounterBasket from "../CounterBasket/CounterBasket";

function BasketBlock() {
    const [isCardMenuVisible, setIsCardMenuVisible] = useState(false);
    const items = useSelector((state) => state.card.itemsInCard);// получили массив из redux
    const totalPrice = calcTotalPrice(items);
    return (
        <div className={'card-block'}>
            <CounterBasket quantity={items.length}/>
            <BiCartAlt size={25} className={'card-block__icon'}
                       onClick={() => setIsCardMenuVisible(!isCardMenuVisible)}/> {/*при клике на корзину показывает меню*/}
            { totalPrice > 0 ? <span className={'card-block__total-price'}>{ totalPrice } руб.</span>
                : null }
            { isCardMenuVisible && <CardMenu items={items} onClick={() => null}/> } {/*скрываем меню корзины*/}
        </div>
    )
}
export default BasketBlock;