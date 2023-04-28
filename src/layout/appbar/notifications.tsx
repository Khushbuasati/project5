import React from 'react';
import { Stack, IconButton, Badge, Popper, Fade, Paper } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { useTheme } from '@mui/material/styles';
import NotificationsCard from './notificationsCard';

export default function Notifications() {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = React.useState(false);

    const handleClick = () =>
        (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
            setOpen((prev) => !prev);
        };

    return (
        <>
            <Stack spacing={1} direction="row" sx={{ color: 'action.active', alignItems: 'center' }}>
                <IconButton>
                    <Badge badgeContent={6}
                        sx={{
                            '& .MuiBadge-badge': {
                                backgroundColor: theme.palette.blue.main,
                                color: theme.palette.background.paper,
                                fontSize: '10px',
                                minWidth: '15px',
                                height: '15px',
                                padding: '0px'
                            }
                        }}
                    >
                        <NotificationsNoneOutlinedIcon fontSize='small' />
                    </Badge>
                </IconButton>
                <IconButton onClick={handleClick()}>
                <Badge badgeContent={6}
                        sx={{
                            '& .MuiBadge-badge': {
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.background.paper,
                                fontSize: '10px',
                                minWidth: '15px',
                                height: '15px',
                                padding: '0px'
                            }
                        }}
                    >
                        <MailOutlineOutlinedIcon fontSize='small' />
                    </Badge>
                </IconButton>
                <IconButton>
                    <PowerSettingsNewOutlinedIcon fontSize='small' />
                </IconButton>
            </Stack>
            <Popper open={open} anchorEl={anchorEl} placement="bottom-end" transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper
                            sx={{
                                padding: '1rem 0rem 0.5rem', width: '90%',
                                borderTop: `1px solid ${theme.palette.secondary.dark}`
                            }}
                            variant="outlined"
                            square
                        >
                            <NotificationsCard />
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </>
    );
}
