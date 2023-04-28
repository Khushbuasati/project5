import React from 'react'
import { Paper, Box, Stack, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Title from '../../UIComponents/title';
import SubText from '../../UIComponents/subText';
import MemoryDetails from '../../UIComponents/memoryDetails';
import ChipRoot from '../../UIComponents/chip';
import { description, list } from '../../data/paper1';
import chart1 from '../../assets/images/chart1.png';
import chart2 from '../../assets/images/chart2.png';
import chart3 from '../../assets/images/chart3.png';

const SubCard = ({ memoryValue, index }: any) => {
  const theme = useTheme();
  const colorValue = index === 2 ? theme.palette.success.main : index === 3 ? theme.palette.error.light : theme.palette.purple.main;
  const img = index === 1 ? chart2 : index === 2 ? chart3 : chart1;
  return (
    <>
      <Title title="Path" style={{ fontWeight: 'normal', marginBottom: '0.3rem' }} />
      <ChipRoot />
      <Title title={`${memoryValue} TiB`} style={{ fontSize: '16px' }} />
      <SubText details="Volume Size" />
      <Box
        component="img"
        src={img}
        width="70%"
      />
      <Stack direction="row">
        <MemoryDetails
          value1="Allocated"
          value2="48.7 MB"
          value3="79%"
          color={colorValue}
        />
        <MemoryDetails
          value1="Cache"
          value2="26.7 MB"
          value3="65%"
          color={theme.palette.primary.light}
        />
      </Stack>
    </>
  );
};

function Paper1() {
  const theme = useTheme();
  return (
    <Paper sx={{ bgcolor: theme.palette.background.default, boxShadow: 'none', marginBottom: '1rem' }}>
      <SubText details={description} />
      <SubText details="Volume Status" style={{ fontSize: '13px', margin: '1rem 0rem' }} />
      <Grid container spacing={2}>
        {
          list.map((item: any, index: number) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <SubCard memoryValue={item.memoryValue} index={index} />
            </Grid>
          ))
        }
      </Grid>
    </Paper>
  )
}

export default Paper1;