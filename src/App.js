import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from "./Component/Navbar";
import ProductList from './Component/ProductList';
import  Details from './Component/Details';
import Cart from './Component/Cart';
import Default from './Component/Default';

class App extends Component{
  render(){
    return(
   <React.Fragment>
     <Navbar/>
       <Switch>
       <Route exact path="/" component={ProductList} /> 
       <Route path="/detials" exact component={Details} /> 
       <Route path="/cart" component={Cart} />
       <Route component={Default} />
       </Switch>
   </React.Fragment>
    )
  }
};


export default App;