import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './Sidebar.css'

function SidebarMenu() {
    return (
        <>
            <div className='sidebar-background'>
                <div class="sidebar-div">
                    <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" /></svg>
                    <span>Nome do Funcionário</span>
                </div>
                <hr class="divider"></hr>
                <Sidebar>
                    <Menu>
                        <SubMenu label="Charts">
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                        </SubMenu>
                        <MenuItem> Documentation </MenuItem>
                        <MenuItem> Calendar </MenuItem>
                    </Menu>
                </Sidebar>
            </div>
        </>
    );
};

export default SidebarMenu;