import React from 'react';
import { request } from '../helper/helper';
import { Container, Row} from 'react-bootstrap';

export default class ClientesBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        }
    }
    
    render() { 
        return ( 
            <Container>
                <Row>
                    <h1>Buscar Empleados</h1>
                </Row>
            </Container>
        );
    }
}