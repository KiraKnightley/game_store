import './CounterBasket.css';

function CounterBasket({ quantity = 0 }) {

    return quantity > 0 ? (
        <div className={'counter-basket'}>
            { quantity }
        </div>
    ) : null
}
export default CounterBasket;