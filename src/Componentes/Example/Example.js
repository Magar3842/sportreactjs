import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import Carrito from './Carrito/Carrito';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar>
        <NavbarBrand>
      <img
        alt="logo"
        src="./img/logo1.png"
        style={{
          height: 40,
          width: 40
        }}
      />
      Decor-Inspire
    </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="">Productos</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Categorias
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Sillas</DropdownItem>
                <DropdownItem>Sillones</DropdownItem>
                <DropdownItem>Iluminacion</DropdownItem>
                <DropdownItem>Arte y varios</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
            <NavLink>Checkout</NavLink>
            </NavItem>
            </Nav>
            <Carrito/>
          <NavbarText>Loguin</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;