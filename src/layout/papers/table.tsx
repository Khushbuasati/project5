import React from 'react';
import { Box, Table, Grid, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { useTheme, styled } from '@mui/material/styles';

import SubText from '../../UIComponents/subText';
import ProgressBar from '../../UIComponents/progressBar';
import ChipRoot from '../../UIComponents/chip';

const TableCellHeader = styled(TableCell)(({ theme }) => ({
    color: theme.palette.primary.light, fontWeight: 'bold', fontSize: '12px'
}));

const rowCapacity = [
    '15', '40', '70', '90', '10', '45', '75'
];

export default function TableRoot() {
    const theme = useTheme();
    return (
        <Paper sx={{bgcolor: theme.palette.background.default, boxShadow: 'none'}}>
            <SubText details="Mounted Devices" style={{fontSize: '14px', fontWeight: 'bold'}} />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCellHeader>Description</TableCellHeader>
                        <TableCellHeader>Raid</TableCellHeader>
                        <TableCellHeader>Capacity</TableCellHeader>
                        <TableCellHeader align="right">Usage</TableCellHeader>
                        <TableCellHeader align="right">Status</TableCellHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowCapacity.map((row: string, index: number) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell
                                component="th"
                                scope="row"
                            >
                                <SubText
                                    details={
                                        <>
                                            HDD1 &nbsp;<SubText details="(ada0)" />
                                        </>
                                    }
                                    style={{ display: 'inline-flex', color: theme.palette.primary.main, fontWeight: 'bold' }}
                                />
                            </TableCell>
                            <TableCell sx={{ fontSize: '12px', color: theme.palette.primary.light, display: 'flex' }}>Mirror <ChipRoot style={{marginLeft: '3px'}} /></TableCell>
                            <TableCell><ProgressBar status={row} /></TableCell>
                            <TableCell align="right">
                                <Grid sx={{ display: 'inline-flex', padding: '0px' }}>
                                    <SubText details="7.3.5 TiB" style={{ fontWeight: 'bold', color: theme.palette.primary.main }} />
                                    <SubText details=" / 9.3.1 TiB" style={{ fontWeight: 'normal', color: theme.palette.primary.light }} />
                                </Grid>
                            </TableCell>
                            <TableCell align="right">
                                <SubText
                                    details={
                                        <>
                                            <SubText details={index % 2 === 0 ? 'Degraded' : 'Healthly'} />
                                            {index % 2 === 0 ?
                                                <CheckCircleIcon sx={{ color: theme.palette.success.main, fontSize: '14px' }} />
                                                : <Box
                                                    sx={{
                                                        background: theme.palette.error.main,
                                                        alignItems: 'center',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        borderRadius: '50%',
                                                        height: '11px',
                                                        width: '11px',
                                                        marginLeft: '3px'
                                                    }}
                                                >
                                                    <PriorityHighIcon sx={{ color: theme.palette.background.paper, fontSize: '8px' }} />
                                                </Box>
                                            }
                                        </>
                                    }
                                    style={{ fontSize: '14px', display: 'inline-flex', alignItems: 'center' }}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
