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


function GridView(props) {
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
                        {Object.keys(props.columns).map((obj) => {
                            return (<TableCell align="left">{props.columns[obj]}</TableCell>)
                        }
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map((row) => (
                        <StyledTableRow key={row.id}>
                            {Object.keys(row).map((property) => {
                                if (!Object.keys(props.columns).includes(property))
                                    return;
                                return (<TableCell align="left">{row[property]}</TableCell>)
                            })}
                            <TableCell align="left"><a onClick={props.onEdit} id={row["id"]} href='javascript:void(0);'>Editar</a></TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[]}
                            rowsPerPage={props.perPage}
                            count={props.count}
                            page={props.page}
                            onPageChange={props.onPageChange}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

export default GridView