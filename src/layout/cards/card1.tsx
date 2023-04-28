import React from 'react';
import { Paper, Grid, Stack, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Title from '../../UIComponents/title';
import SubText from '../../UIComponents/subText';
import TitleWithDetails from './titleWithDetails';
import ProgressBar from '../../UIComponents/progressBar';
import MemoryDetails from '../../UIComponents/memoryDetails';
import chart from '../../assets/images/chart.png';

function Card1() {
    const theme = useTheme();
    return (
        <Paper variant="outlined" square sx={{ height: 'fit-content', padding: '0.5rem 0.7rem 1rem' }}>
            <Title title="System Monitoring" />
            <TitleWithDetails title="CPU" subTitle="Intel Celeron G1610 @260Ghz" />
            <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <SubText details="Core 0" />
                <ProgressBar status='40' />
                <SubText details="86%" />
            </Grid>
            <Stack direction="row" spacing={2}>
                <SubText details="Core 1" />
                <ProgressBar status='70' />
                <SubText details="40%" />
            </Stack>
            <TitleWithDetails title="Memory (Ram)" subTitle="GSkill 2x8 GB G1610 @260Ghz" />
            <ListItem sx={{ padding: '0px 10px 13px 0px' }}>
                <ListItemAvatar>
                    <Avatar src={chart} sx={{ width: '65px', height: '65px', marginRight: '1rem' }}>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="52 GB"
                    secondary={<SubText details="Total Memory" />}
                />
            </ListItem>
            <Stack direction="row" spacing={1}>
                <MemoryDetails
                    value1="Allocated"
                    value2="48.7 MB"
                    value3="79%"
                    color={theme.palette.success.main}
                />
                <MemoryDetails
                    value1="In Cache"
                    value2="26.7 MB"
                    value3="65%"
                />
                <MemoryDetails
                    value1="Availabe"
                    value2="2.7 MB"
                    value3="34%"
                    color={theme.palette.primary.light}
                />
            </Stack>
            <TitleWithDetails title="Interface Traffic (Ram)" subTitle="Intel Celeron G1610 @260Ghz" />
        </Paper>
    )
}

export default Card1;