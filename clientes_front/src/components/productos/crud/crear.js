import React from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import MessagePrompt from '../../prompts/message';

export default class ProductosCrear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rediret: false,
            message:{
                text: "",
                show: false
            },
            loading: false,
            producto: {
                id_producto: "",
                nombre: "",
                descripcion: "",
                precio: "",
            }
        };
        this.onExitedMessage = this.onExitedMessage.bind(this);
    }

    setValue(index, value) {
        this.setState({
            producto: {
                ...this.state.producto,
                [index]: value,
            },
        });
    }

    guardarProductos() {
        this.setState({ loading: true });
        request
            .post('/productos', this.state.producto)
            .then((response) => {
                if (response.data.exito){
                    this.setState({
                        rediret: response.data.exito,
                        message: {
                            text: response.data.msg,
                            show: true,
                        },
                    });
                }
                this.setState({ loading: false });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
    }
    onExitedMessage(){
        if(this.state.rediret) this.props.changeTab('buscar');
    }

    render() {
        return (
            <Container id="productos-crear-container">

                <MessagePrompt 
                text={this.state.message.text}
                show={this.state.message.show}
                duration={2500}
                onExited={this.onExitedMessage} 
                />

                <Loading show={this.state.loading} />

                <Row>
                    <h1>Crear Productos</h1>
                </Row>
                <Row className='justify-content-center'>
                    <Form style={{ width: '18rem', marginTop: '2rem'}} >
                        <Form.Group className="mb-3" controlId="formBasic" >
                            <Form.Control placeholder="Identificacion"
                                onChange={(e) => this.setValue('id_producto', e.target.value)}
                                />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic" >
                            <Form.Control placeholder="Nombre"
                                onChange={(e) => this.setValue('nombre', e.target.value)}
                                />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Control placeholder="Descripcion"
                                onChange={(e) => this.setValue('descripcion', e.target.value)}
                                />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Control placeholder="Precio"
                                onChange={(e) => this.setValue('precio', e.target.value)}
                                />
                        </Form.Group>
                        
                        <Button variant="primary" 
                        onClick={() => console.log(this.guardarProductos())}>
                            Guardar Producto
                        </Button>
                    </Form>
                </Row>
            </Container>
        )
    }
}