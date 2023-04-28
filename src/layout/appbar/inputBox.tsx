import React from 'react';
import { Paper, InputBase, Divider, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

export default function InputBox() {
    const theme = useTheme();
    return (
        <Paper
            component="form"
            sx={{ display: 'flex', alignItems: 'center', height: '30px', width: '100%' }}
            variant="outlined" square
        >
            <InputBase
                sx={{
                    pl: 1, flex: 1, fontSize: '12px',
                    height: 'inherit', background: theme.palette.secondary.light,
                    border: `1px solid ${theme.palette.secondary.dark}`
                }}
                placeholder="Search Message"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <Divider sx={{ height: 28 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
