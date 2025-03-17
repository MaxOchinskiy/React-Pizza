import React from "react";
import {Header} from "./Components";
import {Cart, Home} from "./Components/Pages";
import {Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchPizzas} from "./redux/actions/pizzas";




function App() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchPizzas());
        },[dispatch]);
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
