import React from "react"; //imr atajo
import axios from "axios"; 
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import './login.css';
import app from '../../app.json';
import { isNull } from 'util';
import Cookies from "universal-cookie";
import { caLcuLaExracionSesion } from '../helper/helper';
import Loading from "../loading/loading";

const cookies = new Cookies();
const {APIHOST} = app;

export default class login extends React.Component {
    //ccc atajo
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            usuario: '',
            pass: '',
        };
    }

    iniciarSesion(){

        this.setState({ loading: true });

        axios
        .post(`${APIHOST}/usuarios/login`, {
            usuario: this.state.usuario,
            pass: this.state.pass,
        })
        .then((response) =>{
            if (isNull(response.data.token)){
                alert('Usuario y/o contraseña invalidos')
            }else{
            cookies.set('_s', response.data.token, {
                    path: '/',
                    expires: caLcuLaExracionSesion(),
                });
                this.props.history.push(window.open('/productos'));
            }

            this.setState({ loading: false });
        })
        .catch((err) =>{
            console.log(err);
            this.setState({ loading: false });
        });
    }

    render() {
        return (
            <Container id="login-container"> 

                <Loading show={this.state.loading} />              
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
