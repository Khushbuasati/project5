import React from 'react';
import { Box, Grid, CssBaseline, Toolbar, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AppBarRoot from './appbar/index';
import DrawerRoot from './drawer/index';
import Paper1 from './papers/paper1';
import TableRoot from './papers/table';
import Card1 from './cards/card1';
import Card2 from './cards/card2';
import Card3 from './cards/card3';

const drawerWidth = 190;

export default function Main() {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarRoot drawerWidth={drawerWidth} />
      <DrawerRoot drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: theme.palette.background.default, p: 3 }}
      >
        <Toolbar />
        <Grid container spacing={2}>
          <Grid item xs={0} sm={0.7} md={1} />
          <Grid item xs={12} sm={10.6} md={10}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={4}>
                <Stack spacing={2} >
                  <Card1 />
                  <Card2 />
                  <Card3 />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} md={8}>
                <Stack spacing={2}>
                  <Paper1 />
                  <TableRoot />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={0} sm={0.7} md={1} />
        </Grid>
      </Box>
    </Box>
  );
}
