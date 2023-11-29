import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './Sidebar.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const handleExternalNavigation = (url) => {
    window.location.href = url;
  };

function SidebarMenu() {
    return (
        <>
            <Row md={12 } className='h-100' style={{minHeight: "100vh"}}  >
                <Sidebar className='teste2'backgroundColor="rgb(39, 51, 163)" >
                    <div class="sidebar-div" style={{backgroundColor: "rgb(39, 51, 163)"}}  >
                        <svg  xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" /></svg>
                        <span style={{color: "#fff"}}>Nome do Funcionário</span>
                    </div>
                    <hr class="divider" ></hr>
                    <Menu   >
                        <MenuItem onClick={() => handleExternalNavigation('http://localhost:5173/home1')} className='HOVERZAO'>Home</MenuItem>
                        <MenuItem className='HOVERZAO' > Comanda </MenuItem>
                        <MenuItem className='HOVERZAO'> Pedido </MenuItem>
                        <MenuItem className='HOVERZAO'> Usuarios </MenuItem>
                        <SubMenu label="Cadastros" className='HOVERZAO'>
                            <MenuItem onClick={() => handleExternalNavigation('http://localhost:5173/Cadastros/Sabores')} className='HOVERZAO'> Sabores </MenuItem>
                            <MenuItem onClick={() => handleExternalNavigation('http://localhost:5173/Cadastros/Bebida')} className='HOVERZAO'> Bebida </MenuItem>
                            <MenuItem onClick={() => handleExternalNavigation('http://localhost:5173/Cadastros/Acompanhamento')} className='HOVERZAO'> Acompanhamento </MenuItem>
                            <MenuItem onClick={() => handleExternalNavigation('http://localhost:5173/Cadastros/Drink')} className='HOVERZAO'> Drinks </MenuItem>
                            <MenuItem onClick={() => handleExternalNavigation('http://localhost:5173/Cadastros/Entrada')} className='HOVERZAO'> Entradas </MenuItem>
                            <MenuItem onClick={() => handleExternalNavigation('http://localhost:5173/Cadastros/Massa')}className='HOVERZAO'> Massas </MenuItem>
                            <MenuItem className='HOVERZAO'> Pratos </MenuItem>
                            <MenuItem className='HOVERZAO'> Vinhos </MenuItem>
                        </SubMenu>
                        <SubMenu label="Ingredientes" className='HOVERZAO'>
                            <MenuItem onClick={() => handleExternalNavigation('http://localhost:5173/Cadastros/Ingrediente')} className='HOVERZAO'>Ingredientes Pizza</MenuItem>
                            <MenuItem onClick={() => handleExternalNavigation('http://localhost:5173/Cadastros/Ingrediente_Drinks')} className='HOVERZAO'>Ingredientes Drinks</MenuItem>
                        </SubMenu>
                    </Menu>
                </Sidebar>
            </Row>
 
        </>
    );
};

export default SidebarMenu;