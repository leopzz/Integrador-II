import React, { useEffect, useState } from 'react';
import SidebarMenu from '../Components/Global/Sidebar/Sidebar'
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
import './complementos.css'

const OpcoesSituacao = [
    { text: "Ativo", value: "S" },
    { text: "Inativo", value: "N" }
]

function Acompanhamento() {

    //#region CAMPOS

    // auxiliares
    const [abrirPesquisa, setAbrirPesquisa] = useState(true);

    // campos da entidade
    const [descricao, setDescricao] = useState("");
    const [status, setStatus] = useState("S");
    const [id, setId] = useState(0);
    const [valor, setValor] = useState(0);

    //campos grid
    const [columns, setColumns] = useState([])
    const [rows, setRows] = useState([])
    const [count, setCount] = useState(100)
    const [perPage, setPerPage] = useState(5)
    const [page, setPage] = useState(0)

    //#endregion CAMPOS

    //#region GRID
    const CarregarGrid = async (dados) => {
        await axios.post("http://localhost:3000/Acompanhamentos/ObterGridPesquisa", dados).then((res) => {
            var grid = res.data.Data;
            setColumns(grid.columns);
            setRows(grid.rows);
            setCount(grid.count);
        })
    }
    useEffect(() => { CarregarGrid({ page: 0, limit: 5 }) }, [])
    const pageChange = (event, newPage, a) => { setPage(newPage); CarregarGrid({ page: newPage, limit: 5 }); }
    const pesquisarClick = () => {
        var filtros = { descricao: pesquisaDescricao, status: pesquisaStatus }
        console.log(filtros)
        CarregarGrid({ page: page, limit: 5 });
    }
    //#endregion GRID

    //#region OUTROS
    const fecharPesquisa = () => { setAbrirPesquisa(!abrirPesquisa); }
    const limparCampos = () => {
        setAbrirPesquisa(true);
        setDescricao("");
        setId(0);
        setStatus("S");
        setValor(0);
    }
    //#endregion OUTROS

    //#region CADASTRO
    const salvarClick = async () => {
        var dados = {
            id_acom: id,
            ds_acom: descricao,
            vl_preco: valor,
            sn_ativo: status
        }
        console.log(dados)
        await axios.post("http://localhost:3000/Acompanhamentos/Salvar", dados).then((res) => {
            if (res.data.Status == true) {
                CarregarGrid({ page: page, limit: 5 });
                setAbrirPesquisa(true);
                limparCampos()
                toast.success("Salvo com sucesso")
            } else {
                toast.error("Ocorreu um erro ao salvar os dados")
            }
        })
        CarregarGrid({ page: page, limit: 5 });

    }

    const preencherCadastro = async (e) => {
        setAbrirPesquisa(false);
        await axios.post("http://localhost:3000/Acompanhamentos/BuscarPorCodigo", { Codigo: e.target.id }).then((res) => {
            var data = res.data.Data;
            setDescricao(data.ds_acom);
            setStatus(data.sn_ativo);
            setId(data.id_acom);
            setValor(data.vl_preco)
        })
    }
    //#endregion CADASTRO
    return (
        <>
            <ToastContainer></ToastContainer>
            <Row className='col-12 h-100'>
                <Col md={2}><SidebarMenu></SidebarMenu></Col>
                <Col md={10} style={{ justifyContent: "center", display: "flex" }}>
                    <Col md={11}>
                        {/* AQUI FICA A PESQUISA: */}
                        <Row md={12} style={{ marginBottom: "2rem", marginTop: "1rem" }}>
                            <h2 style={{ marginBottom: "1rem", color: "#fff" }}>Acompanhamentos</h2>
                            <Container className='col-md-12 pt-3 pb-1 shadowzao' style={{ backgroundColor: "rgb(39, 51, 163)" }}>
                                <Button variant="secondary mb-2" type="submit" onClick={fecharPesquisa}>
                                    Acompanhamentos
                                </Button>
                                <Collapse in={abrirPesquisa}>
                                    <Row id="Teste" style={{ transition: "0.3s" }}>
                                        <Col md={12}>
                                            <GridView
                                                onEdit={preencherCadastro}
                                                columns={columns}
                                                rows={rows}
                                                onPageChange={pageChange}
                                                count={count}
                                                perPage={perPage}
                                                page={page}
                                            >
                                            </GridView>
                                            <Col className="d-flex col-12 justify-content-end">
                                                <Button variant="secondary mb-2 mt-2" type="submit" onClick={pesquisarClick}>
                                                    Pesquisar
                                                </Button>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Collapse>
                            </Container>
                        </Row>
                        {/* AQUI FICA O CADASTRO */}
                        <Row md={12}>
                            <Container className='col-md-12 shadowzao' style={{ backgroundColor: "rgb(39, 51, 163)"  }} >
                                <Row md={12}>
                                    <Col md={12}>
                                        <Form>
                                            {/* AQUI FICAM OS CAMPOS */}
                                            <Row className="mb-3">
                                                <PropertyEntity
                                                    id="sn_descricao"
                                                    label="Descrição"
                                                    default=""
                                                    colSize={9}
                                                    type="string"
                                                    value={descricao}
                                                    onChangeFunction={(e) => setDescricao(e.target.value)}
                                                />
                                                <PropertyEntity
                                                    id="sn_ativo"
                                                    data={OpcoesSituacao}
                                                    label="Situação"
                                                    default="S"
                                                    value={status}
                                                    colSize={3}
                                                    type="select"
                                                    onChangeFunction={(e) => setStatus(e.target.value)}
                                                />
                                                <PropertyEntity
                                                    id="vl_preco"
                                                    label="Preço"
                                                    default={0}
                                                    value={valor}
                                                    colSize={9}
                                                    type="numeric"
                                                    onChangeFunction={(e) => setValor(e.target.value)}
                                                />
                                            </Row>
                                            <Row style={{ justifyContent: "end" }}>
                                                <Col md={1}>
                                                    {id > 0 &&
                                                        <Button variant="light" onClick={limparCampos}>
                                                            Cancelar
                                                        </Button>
                                                    }
                                                </Col>
                                                <Col md={1}>
                                                    <Button variant="success" onClick={salvarClick}>
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


export default Acompanhamento;