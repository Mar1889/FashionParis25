import React from "react"; //imr atajo
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import './login.css';

export default class login extends React.Component {
    //ccc atajo
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            pass: '',
        };
    }

    iniciarSesion(){
        alert(`usuario: ${this.state.usuario} - password: ${this.state.pass}`);
    }

    render() {
        return (
            <Container id="login-container">
                
                <Row >
                    
                </Row >
                <Row>
                    <Col
                    sm="12"
                    xs="12"
                    md= {{span:4, offset:4 }}
                    lg= {{span:4, offset:4 }}
                    xl= {{span:4, offset:4 }}
                    >
                        <div class="caja_trasera">
                        <h2>Iniciar Sesión</h2>
                        <Form>
                            <Form.Group>
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control 
                                    onChange={(e) =>
                                        this.setState({ usuario: e.target.value})
                                    }
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    onChange={(e) =>
                                        this.setState({ pass: e.target.value})
                                    }
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                onClick= { ()=>{
                                    this.iniciarSesion();
                                }}
                            >
                                Iniciar Sesión
                            </Button>
                        </Form>
                        </div>
                    </Col>                    
                </Row>                
            </Container>
        );
    }
}