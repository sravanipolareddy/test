import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function MonthlyDataTable(props) {
    let totalPoints = 0;
    return (
        <Table>
            <TableHead>
                <TableRow>
                    {props.data.map((row, index) => (
                        <TableCell key={index}>{`${row.month}-${new Date().getFullYear()}`}</TableCell>
                    ))}
                    <TableCell>Total</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    {props.data.map((row, index) => {
                        totalPoints += row.points
                        return <TableCell key={index}>{row.points}</TableCell>
                    })}
                    <TableCell>{totalPoints}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}