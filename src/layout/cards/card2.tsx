import React from 'react';
import { Paper, Box } from '@mui/material';
import Title from '../../UIComponents/title';
import TitleWithDetails from './titleWithDetails';
import graph from '../../assets/images/graph.png';

function Card2() {
    return (
        <Paper variant="outlined" square
            sx={{ height: 'fit-content', padding: '0.5rem 0.7rem 0rem' }}
        >
            <Title title="Network Monitoring" style={{ fontWeight: 'normal' }} />
            <TitleWithDetails title="Interface Traffic (re0)" subTitle="Intel Celeron G1610 @260Ghz" />
            <Box
                component="img"
                src={graph}
                width="100%"
            />
        </Paper>
    )
}

export default Card2;