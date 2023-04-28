import React from 'react';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

function ChipRoot({style={}}: any) {
    const theme = useTheme();
    return (
        <Chip label="Chip Filled"
            sx={{
                height: '17px',
                color: theme.palette.background.paper,
                bgcolor: theme.palette.secondary.main,
                fontSize: '10px', fontWeight: 'bold',
                marginBottom: '1.3rem',
                '& .MuiChip-label': {
                    paddingLeft: '6px',
                    paddingRight: '7px'
                },
                ...style,
            }}
        />
    )
}

export default ChipRoot;