import './Header.css';
import {Link} from "react-router-dom";
import CardBlock from "../CardBlock/CardBlock";

function Header() {
    return (
        <header className={'header'}>
            <div className="wrapper">
                <Link to={'/'} className={'header__logo'}>Game Store</Link>
            </div>
            <div className="wrapper header__basket-card">
                <CardBlock />
            </div>
        </header>
    )
}
export default Header;