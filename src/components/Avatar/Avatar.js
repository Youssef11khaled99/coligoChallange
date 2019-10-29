import React from 'react';
// import logo from './avatar-img.png';
import './Avatar.css';
 

const Avatar = ({imgPath}) => {
    return(
        <img src={imgPath} alt="Avatar" className="avatar" />
    );
}

export default Avatar;