import React, { useEffect } from 'react';
import SidebarMenu from '../Components/Global/Sidebar/Sidebar'
import './Ingrediente.css'
import { useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Ingrediente() {
    const [rows, setRows] = useState([]);
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
            setRows(res.data.Data.rows)
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
            <div className='master'>
                <SidebarMenu></SidebarMenu>
                <div className='ingrediente-background'>
                    <div className='row'>
                        <h1 style={{ height: "10px" }}> Ingredientes </h1>
                        <div style={{ height: '80%', width: '80%' }} className='grid-background'>
                            <DataGrid
                                processRowUpdate={(updatedRow, originalRow) => {
                                    SalvarLinha(updatedRow);
                                }}
                                onProcessRowUpdateError={(up, or) => {ExibirMensagem("Falha ao processar", false)}}
                                rowHeight={45}
                                autoPageSize={true}
                                rows={rows}
                                columns={columns}

                            >

                            </DataGrid>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Ingrediente;