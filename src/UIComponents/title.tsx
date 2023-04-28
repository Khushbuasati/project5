import React from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface Props {
    title: string | any;
    style?: Object;
}

function Title({ title, style={} }: Props) {
    const theme = useTheme();
    return (
        <Typography sx={{ fontSize: '14px', color: theme.palette.primary.main, fontWeight: 'bold', ...style }}>{title}</Typography>
    )
};
export default Title;
