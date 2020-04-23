import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="MyNavbar">
        <Navbar dark expand="md">
          <NavbarBrand>SWGOH Counters - Order of the Sith</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto text-center" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/5v5">5v5</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/3v3/">3v3</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://docs.google.com/forms/d/e/1FAIpQLSdQidz6SVXldDL5RN4b_y5bZzje0fw2YEzsOcX0C2cWMoWiiA/viewform">Submit a Counter</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
