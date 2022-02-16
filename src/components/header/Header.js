import './Header.css';
import {Link} from "react-router-dom";
import BasketBlock from "../BasketBlock/BasketBlock";

function Header() {
    return (
        <header className={'header'}>
            <div className="wrapper">
                <Link to={'/'} className={'header__logo'}>Game Store</Link>
            </div>
            <div className="wrapper header__basket-card">
                <BasketBlock />
            </div>
        </header>
    )
}
export default Header;