import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './login.css';

function Login() {
    const [showChoices, setShowChoices] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setShowChoices(!showChoices); // Alterna a visibilidade das escolhas
    };

    const handleRegister = () => {
        // Implementar redirecionamento para a página de registro
        console.log('Redirecionar para a página de registro');
    };

    const handleChoice = (link) => {
        window.location.href = link; // Redireciona para o link escolhido
    };

    return (

        <>
            <div className='master'>
                <div className='login-centro'>


                    <Container className="container-login d-flex vh-100">
                        <Row className="m-auto align-self-center">
                            <Col md={6} className="mx-auto">
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="email" placeholder="Digite seu email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="password" placeholder="Digite sua senha" />
                                    </Form.Group>
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" onClick={handleLogin} size="lg">
                                            Login
                                        </Button>
                                        <Button variant="secondary" onClick={handleRegister} size="lg">
                                            Registrar
                                        </Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                        {showChoices && (
                            <Row className="mt-4">
                                <Col md={6} className="mx-auto text-center">
                                    <h4>Escolha um Restaurante</h4>
                                    <Button variant="primary" onClick={() => handleChoice("http://localhost:5173/home1")}>
                                        Restaurante 1
                                    </Button>
                                    <Button variant="secondary" onClick={() => handleChoice("http://link2.com")}>
                                        Restaurante 2
                                    </Button>
                                </Col>
                            </Row>
                        )}
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Login;