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
            <Row md={12} className='h-100' style={{minHeight: "100vh"}}>
                <Sidebar className='teste2'>
                    <div class="sidebar-div">
                        <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" /></svg>
                        <span>Nome do Funcionário</span>
                    </div>
                    <hr class="divider"></hr>
                    <Menu>
                        <MenuItem onClick={() => handleExternalNavigation('http://localhost:5173/home1')}>Home</MenuItem>
                        <MenuItem> Comanda </MenuItem>
                        <MenuItem> Pedido </MenuItem>
                        <MenuItem> Usuarios </MenuItem>
                        <SubMenu label="Cadastros">
                            <MenuItem> Sabores </MenuItem>
                            <MenuItem> Bebida </MenuItem>
                            <MenuItem> Acompanhamento </MenuItem>
                            <MenuItem> Drinks </MenuItem>
                            <MenuItem> Entradas </MenuItem>
                            <MenuItem> Massas </MenuItem>
                            <MenuItem> Pratos </MenuItem>
                            <MenuItem> Vinhos </MenuItem>
                        </SubMenu>
                        <SubMenu label="Ingredientes">
                            <MenuItem onClick={() => handleExternalNavigation('http://localhost:5173/Cadastros/Ingrediente')}>Ingredientes Pizza</MenuItem>
                            <MenuItem onClick={() => handleExternalNavigation('http://localhost:5173/Cadastros/Ingrediente_Drinks')}>Ingredientes Drinks</MenuItem>
                        </SubMenu>
                    </Menu>
                </Sidebar>
            </Row>
 
        </>
    );
};

export default SidebarMenu;