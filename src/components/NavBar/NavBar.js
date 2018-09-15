import React, { Component } from 'react';
import './navbar.css';
import { slide as Menu } from 'react-burger-menu';
import menu from '../../assets/menu.png';


const routes = 
[
  {routeName:'Home',route:'/home'},
  {routeName:'Profile',route:'/profile'},
  {routeName:'Map',route:'/map'},
  {routeName:'Contact',route:'/contact'}
]

class NavBar extends Component {

  constructor(props) {
      super(props); 
  }

  

  render() {

    const {manageMenu,isOpen,activeNavbar} = this.props;

    return (
      <div>
        <div className="barrita">
          <img
            className="menu-bottom"
            onClick={() => manageMenu() } 
            src={menu} width="48px"
          />
        </div>
        {
          console.log("estado",activeNavbar)
        }
          {
            activeNavbar &&
            <ul id={!isOpen?'close':''} className={"list-menu"} >
              {
                routes.map( (elem, index) =>{
                  return (
                    <li key={index}><a href={elem.route} >{elem.routeName}</a></li>
                  );
                })
              }
            </ul>
          }
          
        

        
      </div>

    
    );
  }
}

export default NavBar;
