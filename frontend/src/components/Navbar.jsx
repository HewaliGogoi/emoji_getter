import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyleLink=styled(Link)`
    text-decoration:none
`


const Navbar = () => {
  return (
    <>
        <StyleLink to="/">HOME</StyleLink>
    </>
  )
}

export default Navbar;