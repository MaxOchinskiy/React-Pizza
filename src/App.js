import React from "react";
import {Header} from "./Components";
import {Cart, Home} from "./Components/Pages";
import {Route, Routes} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setPizzas} from "./redux/actions/pizzas";


function App() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            dispatch(setPizzas(data.pizzas));
    });})
    return (<div className="wrapper">
        <Header/>
        <div className="content">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </div>
    </div>)
}
export default App
