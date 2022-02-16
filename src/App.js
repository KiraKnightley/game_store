import './App.css';
import {Route, Routes, Outlet} from "react-router-dom";
import HomePage from "./components/pages/home-page/HomePage";
import Header from "./components/header/Header";
import {Provider} from "react-redux";
import {store} from "./redux/store";


function App() {
    return (
        <Provider store={store}> {/*подключаем redux*/}
            <Routes>
                <Route path={'/'} element={<Layout />}>
                    <Route index element={<HomePage />}/>
                </Route>
            </Routes>
        </Provider>
    );
}
function Layout(){
    return (
        <div className="App">
            <Header />
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default App;
