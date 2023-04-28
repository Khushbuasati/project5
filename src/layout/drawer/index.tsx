import React from 'react';
import { Drawer, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Logo from './logo';
import SideBarMenu from './sideBarmenu';

interface Props {
    drawerWidth: number;
}

export default function DrawerRoot({ drawerWidth }: Props) {
    const theme = useTheme();
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Logo />
            <SideBarMenu />
            <Divider />
        </Drawer>
    );
}
