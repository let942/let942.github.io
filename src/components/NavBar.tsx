import './NavBar.css';

import { Link, NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

function NavBar() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
        <Navbar.Brand href="#home">&lt; Letícia Chagas Marques &gt;</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> {/* justify-content-center */}
            <NavLink to='/' data-text="Awesome" className="button">
              <span className="actual-text">Sobre</span>
              <span className="hover-text" aria-hidden="true">Sobre</span>
            </NavLink>
            <NavLink to='/technologies' data-text="Awesome" className="button">
              <span className="actual-text">Tecnologias</span>
              <span className="hover-text" aria-hidden="true">Tecnologias</span>
            </NavLink>
            <NavLink to='/projects' data-text="Awesome" className="button">
              <span className="actual-text">Projetos</span>
              <span className="hover-text" aria-hidden="true">Projetos</span>
            </NavLink>
            <NavLink to='/contact' data-text="Awesome" className="button">
              <span className="actual-text">Contato</span>
              <span className="hover-text" aria-hidden="true">Contato</span>
            </NavLink>

          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar