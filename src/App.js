import React from "react";
import {Header} from "./Components";
import {Cart, Home} from "./Pages";
import {Route, Routes} from "react-router-dom";

function App() {
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
