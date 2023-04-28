import React from 'react';
import { Paper, Stack, Box } from '@mui/material';
import Title from '../../UIComponents/title';
import SubText from '../../UIComponents/subText';
import graph from '../../assets/images/graph.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useTheme } from '@mui/material/styles';

function SuvTitleWithDetails({ subtitle }: any) {
    const theme = useTheme();
    return <>
        <Title title={subtitle} style={{ fontWeight: 'normal', fontSize: '13px', marginTop: '0.5rem' }} />
        <Stack direction="row" spacing={2} sx={{ alignItems: 'baseline' }}>
            <SubText
                details={
                    <>
                        <ArrowDropDownIcon sx={{ color: theme.palette.error.main }} /> Min: 19 C
                    </>
                }
                style={{ marginBottom: '0.5rem', fontSize: '10px', display: 'inline-flex', alignItems: 'center' }}
            />
            <SubText
                details={
                    <>
                        <ArrowDropUpIcon sx={{ color: theme.palette.success.main }} /> Min: 26 C
                    </>
                }
                style={{ marginBottom: '0.5rem', fontSize: '10px', display: 'inline-flex', alignItems: 'center' }}
            />
            <SubText
                details={
                    <>
                        <ArrowDropUpIcon sx={{ color: theme.palette.success.main }} /> Min: 32 C
                    </>
                }
                style={{ marginBottom: '0.5rem', fontSize: '10px', display: 'inline-flex', alignItems: 'center' }}
            />
        </Stack>
        <Box
            component="img"
            src={graph}
            width="100%"
        />
    </>;
}

function Card3() {
    return (
        <Paper variant="outlined" square
            sx={{ height: 'fit-content', padding: '0.5rem 0.7rem 0rem' }}
        >
            <Title title="Hardware Temperature" style={{ fontWeight: 'normal' }} />
            <SuvTitleWithDetails subtitle="CPU (idle)" />
            <SuvTitleWithDetails subtitle="HDD1 WD3DEZRX (idle)" />
        </Paper>
    )
}

export default Card3;