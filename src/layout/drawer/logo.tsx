import React from 'react';
import { styled } from '@mui/material/styles';
import { Badge, Box, Typography, Avatar, Stack, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTheme } from '@mui/material/styles';
import Profile from '../../assets/images/user.jpg';
import SubText from '../../UIComponents/subText';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

export default function Logo() {
    const theme = useTheme();
    const [open, setOpen] = React.useState<Boolean>(false);
    
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setOpen(!open);
    };

    return (
        <Box sx={{paddingTop: '6px', paddingLeft: '0.9rem'}}>
            <Typography
                sx={{ color: theme.palette.blue.main, fontWeight: 'bold', fontSize: '24px' }}
            >
                airframe
            </Typography>
            <Stack spacing={2} sx={{alignItems: 'flex-start'}}>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                >
                    <Avatar alt="R" src={Profile} />
                </StyledBadge>
                <Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    sx={{fontWeight: 'bold', textTransform: 'capitalize'}}
                >
                    Dashboard
                </Button>
                <SubText details='Internal Web Designer' style={{marginTop: '-4px !important', marginLeft: '8px !important'}} />
            </Stack>
        </Box>
    );
}
