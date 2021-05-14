import React from 'react'
import styled from 'styled-components'
import logo from '../../assests/logo.png'
import HeaderComp from './style'

export default function Header() {
    return (
        <HeaderComp>
            <Logo>
                <img src={logo}/>
            </Logo>
            <Control>
                <Select>
                    <option>English</option>
                    <option>Spanish</option>
                </Select>
                <Button>
                    Sign In
                </Button>
            </Control>
        </HeaderComp>
    )
}

const Logo = styled.div`
    width : 200px;
`

const Select = styled.select`
    width : 100px;
    padding : 7px;
    border-radius :3px;
    margin-right : 10px;
`


const Button = styled.button`
    background-color: #e50914;
    line-height: normal;
    padding: 7px 17px;
    font-weight: 400;
    font-size: 1rem;
    box-shadow: none;
    outline: 0;
    border: 0;
    color: #ffffff;
    border-radius: 3px;
`

const Control = styled.div`
    width : 200px;
`
