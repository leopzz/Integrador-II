import React, { useEffect, useState } from 'react';
import SidebarMenu from '../Components/Global/Sidebar/Sidebar'
import './Ingrediente.css'
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GridView from '../Components/Global/Grid/GridView'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CampoSelect from '../Components/Global/Campos/Select'

const OpcoesSituacao = [
    { text: "Ativo", value: "S" },
    { text: "Inativo", value: "N" }
]

function Ingrediente() {
    const ExibirMensagem = (mensagem, status) => {
        console.log("qaqui")
        toast.success(mensagem, {
            position: toast.POSITION.TOP_RIGHT,
            style: ""
        });
        if (status)
            toast.success(mensagem, {
                position: toast.POSITION.TOP_RIGHT,
            });
        else
            toast.error(mensagem, {
                position: toast.POSITION.TOP_RIGHT,
            });
    };

    var columns = []
    columns.push({ field: "ds_ingrediente", headerName: "Descrição", width: 400, editable: true })
    columns.push({ field: "sn_ativo", headerName: "Ativo", width: 400, editable: true })

    const ObterGridPadrao = async () => {
        await axios.post("http://localhost:3000/Ingredientes/ObterGridPesquisa").then((res) => {
        })
    }
    useEffect(() => {
        ObterGridPadrao();
    }, [])

    const SalvarLinha = async (linha) => {
        delete linha["id"]
        delete linha["sn_ativo"]
        console.log(linha)
        await axios.post("http://localhost:3000/Ingredientes/Salvar", linha).then((res) => {
            if (res.data.Status)
                ExibirMensagem("Salvo com sucesso", true)
            else
                ExibirMensagem("Não foi possível salvar o registro", false)
        })
    }

    return (
        <>
            <ToastContainer></ToastContainer>
            <Row className='col-12 h-100'>
                <Col md={2}><SidebarMenu></SidebarMenu></Col>
                <Col md={10} style={{ justifyContent: "center", display: "flex" }}>
                    <Col md={11}>

                        <Row md={12} style={{ marginBottom: "2rem", marginTop: "1rem" }}>
                            <Container className='col-md-12' style={{ backgroundColor: "red" }}>
                                <h2 style={{ marginBottom: "1rem" }}>Ingredientes</h2>
                                <GridView>

                                </GridView>
                            </Container>
                        </Row>
                        <Row md={12}>
                            <Container className='col-md-12' style={{ backgroundColor: "green" }}>
                                <Row md={12}>
                                    <Col md={12}>

                                        <Form>
                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridDescricao">
                                                    <Form.Label>Descrição</Form.Label>
                                                    <Form.Control type="string" placeholder="Descrição" />
                                                </Form.Group>

                                                <CampoSelect
                                                    id="id_select"
                                                    data={OpcoesSituacao}
                                                    label="Situação"
                                                    default="S"
                                                    colSize={3}
                                                >
                                                </CampoSelect>
                                            </Row>
                                            <Row style={{justifyContent: "end"}}>
                                                <Col md={1}>
                                                    <Button variant="default" type="submit">
                                                        Cancelar
                                                    </Button>
                                                </Col>
                                                <Col md={1}>
                                                    <Button variant="success" type="submit">
                                                        Salvar
                                                    </Button>
                                                </Col>

                                            </Row>
                                        </Form>

                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                    </Col>
                </Col>
            </Row>


        </>
    );
};


export default Ingrediente;