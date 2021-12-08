import React from 'react'
import styled from 'styled-components';
import { FaMapMarkedAlt } from 'react-icons/fa';

function NavBar(){
    return(
        <Wrapper>
            <Title>
                <Icon/>
                Maps
            </Title>
        </Wrapper>
    )
}

export default NavBar

const Wrapper=styled.nav`
background-image: url("header-4.png");
height:90px;
display:flex;
justify-content:left;
align-items:center;
margin-bottom:20px;

`
const Title=styled.h1`
text-align: left;
font-size:40px;
color:white;
`
const Icon = styled(FaMapMarkedAlt)`
margin-right: 0.5rem;
margin-left: 1rem;
`