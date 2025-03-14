import React from "react";
import {Header} from "./Components";
import {Cart, Home} from "./Components/Pages";
import {Route, Routes} from "react-router-dom";
import axios from "axios";
import {connect} from "react-redux";
import {setPizzas as setPizzasAction} from "./redux/actions/pizzas";


class App extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            this.props.setPizzas(data.pizzas);
        });
    }
    render() {
        return (<div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home items={this.props.items}/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </div>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.pizzas.items,
        filter: state.pizzas.filter,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setPizzas: (items) => dispatch(setPizzasAction(items)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
