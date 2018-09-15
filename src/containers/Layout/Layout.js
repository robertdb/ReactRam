import React from 'react';
import NavBar from '../../components/NavBar';


class Layout extends React.Component {

  constructor(props) {
      super(props); 
      this.state = {
          menuOpen:false,
          activeNavbar: false
      }
      this.handleChangeMenu = this.handleChangeMenu.bind(this);

  }

  handleChangeMenu(){
    this.setState({activeNavbar:true})
    this.setState({menuOpen:!this.state.menuOpen});
  }

  render() {
    const {menuOpen,activeNavbar} = this.state;
    const {children} = this.props;

    return (
        <div>
            <NavBar activeNavbar={activeNavbar} manageMenu={this.handleChangeMenu} isOpen={menuOpen} bg="rgb(234, 234, 234)"/>    
            <div onClick={() => this.setState({menuOpen:false})}>
                {children}
            </div>  
        </div>
    );
  }
}

export default Layout;
