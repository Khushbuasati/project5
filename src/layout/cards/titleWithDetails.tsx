import React from 'react'
import Title from '../../UIComponents/title';
import SubText from '../../UIComponents/subText';

function TitleWithDetails({ title, subTitle }: any) {
    return <>
        <Title title={title} style={{ fontWeight: 'normal', fontSize: '13px', marginTop: '0.5rem' }} />
        <SubText details={subTitle} style={{marginBottom: '0.5rem'}} />
    </>;
}

export default TitleWithDetails;