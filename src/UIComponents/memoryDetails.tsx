import React from 'react';
import { Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SubText from './subText';
import Title from './title';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

interface Props {
    value1: string;
    value2: string;
    value3: string;
    color?: string;
}

function MemoryDetails({ value1, value2, value3, color }: Props) {
    const theme = useTheme();
    return (
        <Stack spacing={1}>
            <SubText
                details={<><FiberManualRecordIcon sx={{ color: color || theme.palette.blue.main, fontSize: '12px' }} /> {value1}</>}
                style={{ alignItems: 'center', display: 'flex' }}
            />
            <Title title={value2} style={{ fontWeight: 'normal', fontSize: '13px' }} />
            <SubText details={value3} />
        </Stack>
    )
}

export default MemoryDetails;