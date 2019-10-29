import React from 'react';
import Search from '../Search/Search';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Li = styled.li` 
    float: left;
    color: rgb(13, 168, 148);
    cursor: pointer;
    padding: ${props => props.search  ? "10px" : "20px 5px 0px 10px"};
    font-size: ${props => props.search  ? "10px" : "30px"};

    :hover {
        color: rgb(1, 255, 221);
    }
`;
const NavBar = () => {
    return(
    <div className="navContainer">
        <div>
            <h2>Welcome Talia, </h2>
        </div>
        <div>
            <ul class="topNav">
                <Li search><Search/></Li>
                <Li><FontAwesomeIcon icon={faEnvelope} /></Li>
                <Li><FontAwesomeIcon icon={faBell} /></Li>
            </ul>
        </div>   
    </div>

    );
}

export default NavBar;