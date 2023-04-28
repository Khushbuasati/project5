import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Stack, Breadcrumbs, Link, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function BreadcrumbsRoot() {
    const theme = useTheme();
    return (
        <Stack role="presentation">
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} >
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/"
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                </Link>
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '12px' }}
                    color={theme.palette.primary.main}
                    href="/material-ui/getting-started/installation/"
                >
                    Start
                </Link>
                <Typography
                    sx={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}
                    color={theme.palette.primary.light}
                >
                    Page Link
                </Typography>
            </Breadcrumbs>
        </Stack>
    );
}
