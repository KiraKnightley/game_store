import './OrderPage.css';
import {useSelector} from "react-redux";
import OrderItem from "../../OrderItem/OrderItem";
import {calcTotalPrice} from "../../../redux/untils";

function OrderPage() {
    const items =useSelector(state => state.card.itemsInCard);

    if(items.length < 1) {
        return <h2>Ваша Корзина пуста</h2>
    }
    const productTitle = () => {
        if (items.length === 1) { return <span>товар</span>}
        if (items.length < 5) { return <span>товара</span>}
        else {return <span>товаров</span>}
    }
    return (
        <div className={'order-page'}>
            <div className="order-page__left">
                { items.map(game => <OrderItem game={ game }/>)}
            </div>
            <div className="order-page__right">
                <div className="order-page__total-price">
                    <span>{ items.length } {productTitle(items.length)} на сумму { calcTotalPrice(items) } руб.</span>
                </div>
            </div>
        </div>
    )
}
export default OrderPage;