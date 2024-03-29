import React, {Component} from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import styled from 'styled-components'
import {ButtonContainer} from './Button';


export default class Navbar extends Component {
    render(){
        return (
      <Navwrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">

  {/* 
  https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk  */}      
 <Link to='/'>
<img src={logo} alt="Product"
className="navbar-brand"/>
 </Link>
 <ul className ="navbar-nav align-items-center">
     <li className="nav-item ml-5"></li>
     <Link to ="/" className="nav-link">
         Products
     </Link>
     </ul>
     <Link to ='./Cart' className="ml-auto">
         <ButtonContainer>
             <span className="mr-2">

             <i className="fas fa-cart-plus"/>
            </span>
             My Cart
         </ButtonContainer>
     </Link>
      </Navwrapper> 
  )
    }

}

const Navwrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`
