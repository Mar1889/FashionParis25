import React from "react"; //imr atajo
import axios from "axios"; 
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import './login.css';
import { isNull } from 'util';
// import Cookies from "universal-cookie";
import app from '../../app.json';

const {APIHOST} = app;

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
        axios.post(`${APIHOST}/usuarios/login`, {
            usuario: this.state.usuario,
            pass: this.state.pass,
        })
        .then((response) =>{
            if (isNull(response.data.token)){
                alert('Usuario y/o contraseña invalidos')
            }else{
                
            }
        })
        .catch((err) =>{
            console.log(err)
        });
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
                        <div id="caja_trasera">
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
                                variant="danger"
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
