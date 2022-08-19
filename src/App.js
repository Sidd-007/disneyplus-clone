import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import "./App.css";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/detail/:id" element={<Detail />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;