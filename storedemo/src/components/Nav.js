import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

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

export default function Nav() {
    return (
        <NavBar>
            <Links exact={true} to='/'>Home</Links>
            <Links to='/store'>Store</Links>
            <Links to='/cart'>Cart</Links>
        </NavBar>
    )
}
