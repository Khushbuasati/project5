import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Stack, Toolbar, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Notifications from './notifications';
import BreadcrumbsRoot from './breadcrumbs';

interface Props {
    drawerWidth: number;
}

export default function AppBarRoot({drawerWidth}: Props) {
    const theme = useTheme();
    return (
        <AppBar
            position="fixed"
            sx={{
                width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,
                bgcolor: theme.palette.background.default,
                boxShadow: 'none'
            }}
        >
            <Toolbar sx={{ minHeight: '38px', padding: '0px !important', display: 'flex', justifyContent: 'space-between' }}>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                    <IconButton><MenuIcon fontSize='small' /></IconButton>
                    <BreadcrumbsRoot />
                </Stack>
                <Notifications />
            </Toolbar>
        </AppBar>
    );
}
