import React, {useState} from "react";
import {Header} from "./Components";
import {Cart, Home} from "./Components/Pages";
import {Route, Routes} from "react-router-dom";

function App() {
  const [pizzas, setPizzas] = useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3001/db.json').then((resp)=>resp.json()).then(json=>{
      setPizzas(json.pizzas);
    })
  }, []);
  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
          <Route path="/" element={<Home items={pizzas} />}/>
          <Route path="/cart" element={<Cart />}/>
          </Routes>
        </div>
      </div>
  )
}
export default App;
