import React from 'react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)<any>(({ theme }) => ({
    height: 5,
    marginBottom: '0.5rem',
    borderRadius: 2,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[100],
    },
    [`& .${linearProgressClasses.bar}`]: {
        backgroundColor: theme.palette.blue.main,
    },
}));

interface Props {
    status: string;
}

const ProgressBar = ({ status }: Props) => {
    return (
        <BorderLinearProgress variant="determinate" value={status} />
    );
}

export default ProgressBar;