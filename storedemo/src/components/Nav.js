import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import Search from './Search'


export default function Nav() {
    return (
        <Container>
            <NavBar>
                <Links exact={true} to='/'>Home</Links>
                <Links to='/store'>Store</Links>
                <Links to='/cart'>Cart</Links>
            </NavBar>
            <Search/>
        </Container>
            
    )
}

const Container = styled.div`
    margin-bottom: 2%;
    padding-bottom: 2%;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
`;

const NavBar = styled.nav`
    display: flex;
    justify-content: flex-end;
    background: white;
    // padding: 2% 0;
`;

const Links = styled(NavLink)`
    // margin: 0 4%;
    text-decoration: none;
    // color: black;
    padding: 2% 6%;
    // border: 1px solid red;
`;