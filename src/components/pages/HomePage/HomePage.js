import './HomePage.css';
import GameItem from "../../GameItem/GameItem";
import forza_5 from '../../../game-img/forza_5.jpeg';
import battlefield_2042 from '../../../game-img/battlefield_2042.jpg';
import life_is_strange_true_colors from '../../../game-img/life_is_strange_true_colors.jpeg';
import gta_v from '../../../game-img/gta_v.jpeg';
import rainbow_siege from '../../../game-img/rainbow_siege.jpeg';
import assassins_creed_valhalla from '../../../game-img/assassins_creed_valhalla.png';

function HomePage() {
    const GAMES = [
        {
            image: forza_5,
            title: 'Forza Horizon 5',
            genres: ['Гонки', 'Симулятор', 'Открытый мир'],
            price: 2343,
            video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
            id: 1,
            description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
        },
        {
            image: battlefield_2042,
            title: 'Battlefield 2042',
            genres: ['Экшен', 'Шутер', 'Война'],
            video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
            price: 2433,
            id: 2,
            description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
        },
        {
            image: life_is_strange_true_colors,
            title: 'Life is Strange True Colors',
            genres: ['Глубокий сюжет', 'Протагонистка'],
            video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
            price: 3021,
            id: 3,
            description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
        },
        {
            image: gta_v,
            title: 'Grand Theft Auto V',
            genres: ['Открытый мир', 'Экшен'],
            video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
            price: 789,
            id: 4,
            description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
        },
        {
            image: rainbow_siege,
            title: 'Tom Clancy\'s Rainbow Six® Siege',
            video: 'https://www.youtube.com/embed/6wlvYh0h63k',
            genres: ['Тактика', 'Шутер'],
            price: 982,
            id: 5,
            description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
        },
        {
            image: assassins_creed_valhalla,
            title: 'Assassin’s Creed Valhalla',
            genres: ['Паркур', 'РПГ', 'Открытый мир'],
            video: 'https://www.youtube.com/embed/ssrNcwxALS4',
            price: 2863,
            id: 6,
            description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
        },
    ]
    return (
        <div className={'home-page'}>
            { GAMES.map(game => <GameItem key={game.id} game={game}/>)}
        </div>
    )
}
export default HomePage;