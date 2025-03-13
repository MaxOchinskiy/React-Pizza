import React, {useState} from "react";
import {Header} from "./Components";
import {Cart, Home} from "./Components/Pages";
import {Route, Routes} from "react-router-dom";
import axios from "axios";

function App() {
  const [pizzas, setPizzas] = useState([]);
  React.useEffect(() => {
      axios.get('http://localhost:3000/db.json').then(({data}) => {setPizzas(data.pizzas);
      });
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
