import React from 'react'
import styled from 'styled-components'
import BannerComp from './style'
import background from '../../assests/bg.jpeg'

export default function Banner() {
    return (
        <BannerComp image={background}>
            <Content>
                <H2>Unlimited movies, TV shows and more.</H2>
                <SPAN>Watch anywhere. Cancel anytime.</SPAN>
                <P>Ready to watch? Enter your email to create or restart your membership.</P>
            </Content>
        </BannerComp>
    )   
}

const Content = styled.div`
    max-width : 600px;
    margin : 0 auto;
    color : #ffffff;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
`


const H2 = styled.h2`
    margin : 0;
`

const SPAN = styled.span`
  
`

const P = styled.p`
  
`