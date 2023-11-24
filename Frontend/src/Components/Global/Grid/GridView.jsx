import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styled } from '@mui/material/styles';


function createData(name, calories) {
    return { name, calories };
}

const rows = [
    createData('Frozen yoghurt', 159),
    createData('Ice cream sandwich', 237),
    createData('Eclair', 262),
    createData('Eclair', 262),
    createData('Eclair', 262),
    createData('Eclair', 262),
    createData('Eclair', 262),
];

function GridView(props) {
    var columns = ["Descrição", "Ativo"]
    const funcao22 = () => {
        console.log(111)
    }
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="a dense table" size="small">
                <TableHead>
                    <TableRow>
                        {columns.map((obj) => {
                            console.log(obj)
                            return (<TableCell align="left">{obj}</TableCell>)
                        }
                        )}

                        <TableCell><FontAwesomeIcon icon="fa-solid fa-pen" /></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            {Object.keys(row).map((property) => {
                                return (<TableCell align="left">{row[property]}</TableCell>)
                            })}
                            <TableCell align="left"><a onClick={funcao22} href='javascript:void(0);'>Editar</a></TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[4]}
                            rowsPerPage={4}
                            count={rows.length}
                            page={0}

                        //   onPageChange={handleChangePage}
                        //   onRowsPerPageChange={handleChangeRowsPerPage}
                        //   ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

export default GridView