import './App.css';
import {Route, Routes, Outlet} from "react-router-dom";
import HomePage from "./components/pages/home-page/HomePage";
import Header from "./components/header/Header";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout />}>
                <Route index element={<HomePage />}/>
            </Route>
        </Routes>
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
