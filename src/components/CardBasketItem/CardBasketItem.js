import './CardBasketItem.css';

function CardBasketItem({ id, title, price }) {
    return (
        <div className={'card-basket-item'}>
            <span>{title}</span>
            <div className={'card-basket-item__price'}>
                <span>{price} руб.</span>
            </div>
        </div>
    )
}
export default CardBasketItem;