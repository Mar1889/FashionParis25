import React from 'react';
import { 
    Container, 
    Dropdown, 
    DropdownButton, 
    Nav, 
    Navbar,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    
    render() { 
        return ( 
        <Navbar id="navbar" bg="light" variant="light">
        <Container>
            <Navbar.Brand href="#home">
                Fashion Paris <span id="usuario-sub-branm"></span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>

            <DropdownButton id="dropdown-basic-button" title="Usuario">
                <Dropdown.Header id="dropdown-header">
                    <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                </Dropdown.Header>
                <Dropdown.Item href="#/action-1">Cerrar Sesion</Dropdown.Item>
                {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </DropdownButton>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
    }
}