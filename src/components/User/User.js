import React from "react";
import Avatar from '../Avatar/Avatar';
import logo from './avatar-img.png';
import './User.css';

const User = () => {
    return(
        <div className='user'>
            <div className='user'>
                <div className="avImg">
                    <Avatar imgPath={logo} />
                </div>
                <div className='info'>
                    <p><b>YOussef Khaled</b></p>
                    <span>Math 101</span>
                </div>
            </div>
            <div className="vl"></div>
            <div className='description'> 
                <span>afjdalfjladjflpasjdfpjasdplfjasdfjals;jfka</span>
            </div>
            
        </div>
    );
}

export default User;