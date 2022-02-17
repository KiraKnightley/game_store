import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import HomePage from "./components/pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import GamePage from "./components/pages/GamePage/GamePage";
import OrderPage from "./components/pages/OrderPage/OrderPage";
import './App.css';

function App() {
    return (
        <Provider store={ store }> {/*подключаем redux*/}
            <Router>
                <div className={"App"}>
                    <Header />
                    <Routes>
                        <Route path={"/"} element={<HomePage />} />
                        <Route path={"/app/:title"} element={<GamePage />} />
                        <Route path={'/order'} element={<OrderPage />}  />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
