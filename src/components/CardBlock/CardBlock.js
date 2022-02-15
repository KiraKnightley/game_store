import './CardBlock.css';
import { BiCartAlt} from "react-icons/bi";

function CardBlock() {
    return (
        <div className={'card-block'}>
            <BiCartAlt size={25} className={'card-block__icon'}/>
            <span className={'card-block__total-price'}>руб.</span>
        </div>
    )
}
export default CardBlock;