import React from 'react';
import {
    IconButton, Button, Divider, Box, Grid, List, ListItem, ListItemAvatar, ListItemText
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';
import img from '../../assets/images/notification.png';
import { description } from '../../data/paper1';
import Title from '../../UIComponents/title';
import SubText from '../../UIComponents/subText';
import InputBox from './inputBox';

const notification1 = 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests';

export default function NotificationsCard() {
    const theme = useTheme();
    return (
        <>
            <Grid sx={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', padding: '0rem 0.6rem 0.3rem'
            }}>
                <Title title="Messages" />
                <IconButton><EditIcon fontSize='small' /></IconButton>
            </Grid>
            <Divider />
            <Grid sx={{ display: 'flex', justifyContent: 'center', padding: '0.5rem 1rem' }}>
                <InputBox />
            </Grid>
            <Divider />
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', maxHeight: '49vh', overflowY: 'scroll' }}>
                {['Mallie Armstrong', 'Kacie Borer', 'Jordyn Weimann'].map((item: string, index: number) => (
                    <ListItem sx={{ alignItems: 'flex-start' }}>
                        <ListItemAvatar sx={{ paddingTop: '0px', paddingRight: '0px', minWidth: '45px' }}>
                            <Box
                                component="img"
                                src={img}
                                width="60%"
                                sx={{ marginBottom: '-17px' }}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Title
                                        title={
                                            <>
                                                <FiberManualRecordIcon
                                                    sx={{ color: index === 0 ? theme.palette.success.main : index === 1 ? theme.palette.error.main : theme.palette.error.light, fontSize: '12px', marginRight: '3px' }}
                                                />
                                                {item}
                                                <SubText details="(23)" style={{ marginLeft: '3px' }} />
                                            </>
                                        }
                                        style={{ display: 'inline-flex', alignItems: 'center' }}
                                    />
                                    <SubText details="Now" />
                                </Grid>
                            }
                            secondary={<SubText details={index === 0 ? notification1 : description} />}
                        />
                    </ListItem>))}
            </List>
            <Divider />
            <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button fullWidth endIcon={<KeyboardArrowRightIcon />} sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>View All</Button>
            </Grid>
        </>
    );
}
