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
import PropertyEntity from '../Components/Global/Campos/PropertyEntity'
import Collapse from 'react-bootstrap/Collapse';

const OpcoesSituacao = [
    { text: "Ativo", value: "S" },
    { text: "Inativo", value: "N" }
]

function Ingrediente() {
    //auxiliares
    const [abrirPesquisa, setAbrirPesquisa] = useState(true);

    // campos da entidade
    const [descricao, setDescricao] = useState();
    const [status, setStatus] = useState();
    const [id, setId] = useState(0);

    //campos grid
    const [columns, setColumns] = useState([])
    const [rows, setRows] = useState([])
    const [count, setCount] = useState(100)
    const [perPage, setPerPage] = useState(5)
    const [page, setPage] = useState(0)

    //funções de requisição
    const ObterGridPadrao = async (dados) => {
        await axios.post("http://localhost:3000/Ingredientes/ObterGridPesquisa").then((res) => {

        })
    }
    useEffect(() => { ObterGridPadrao() }, [])
    const fecharPesquisa = () => {setAbrirPesquisa(!abrirPesquisa);}
    const pageChange = (event, newPage) => {
        setPage(newPage)
        ObterGridPadrao();
    }

    return (
        <>
            <ToastContainer></ToastContainer>
            <Row className='col-12 h-100'>
                <Col md={2}><SidebarMenu></SidebarMenu></Col>
                <Col md={10} style={{ justifyContent: "center", display: "flex" }}>
                    <Col md={11}>
                        <Row md={12} style={{ marginBottom: "2rem", marginTop: "1rem" }}>
                            <h2 style={{ marginBottom: "1rem" }}>Ingredientes</h2>
                            <Container className='col-md-12 pt-3 pb-1' style={{ backgroundColor: "red" }}>
                                <Button variant="secondary mb-2" type="submit" onClick={fecharPesquisa}>
                                    Ingredientes
                                </Button>
                                <Collapse in={abrirPesquisa}>
                                    <Row id="Teste" style={{ transition: "0.3s" }}>
                                        <Col md={12}>
                                            <GridView
                                                onEdit={() => { }}
                                                columns={columns}
                                                rows={rows}
                                                onPageChange={pageChange}
                                                count={count}
                                                perPage={perPage}
                                                page={page}
                                            >
                                            </GridView>
                                            <Col className="d-flex col-12 justify-content-end">
                                                <Button variant="secondary mb-2 mt-2" type="submit">
                                                    Pesquisar
                                                </Button>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Collapse>
                            </Container>
                        </Row>
                        <Row md={12}>
                            <Container className='col-md-12' style={{ backgroundColor: "green" }}>
                                <Row md={12}>
                                    <Col md={12}>
                                        <Form>
                                            <Row className="mb-3">
                                                <PropertyEntity
                                                    id="sn_descricao"
                                                    label="Descrição"
                                                    default=""
                                                    colSize={9}
                                                    type="string"
                                                    onChangeFunction={(e) => {
                                                        console.log(entity)
                                                        setDescricao(e.target.value)
                                                    }}
                                                />
                                                <PropertyEntity
                                                    id="sn_ativo"
                                                    data={OpcoesSituacao}
                                                    label="Situação"
                                                    default="S"
                                                    colSize={3}
                                                    type="select"
                                                />
                                            </Row>
                                            <Row style={{ justifyContent: "end" }}>
                                                <Col md={1}>
                                                    {id > 0 &&
                                                        <Button variant="light" type="submit">
                                                            Cancelar
                                                        </Button>
                                                    }
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