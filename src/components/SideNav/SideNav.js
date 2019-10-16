import React from 'react';
import styles from './SideNav.module.scss';
import styled from 'styled-components';

const Link = styled.a` 
    padding: 8px;
    border: white solid;
    width: 100%;
    height: 20%;
    text-decoration: none;
    font-size: 25px;
    color: white;
    margin-top: 5px;
    transition: 0.3s;

    :hover {
      color: rgb(0, 174, 255);
      background: white;
    }
`;

const SideNav = () => {
    return (
        <div id="mySidenav" class={styles.sidenav}>
            <Link href="#" id='coligo'> C o l i g o</Link>
            <Link href="#"><i class="fa fa-file-code-o"></i> Dashboard</Link>
            <Link href="#"><i class="fa fa-plus"></i> Schedule</Link>
            <Link href="#"><i class="fa fa-plus"></i> Courses</Link>
            <Link href="#"><i class="fa fa-plus"></i> GradeBook</Link>
            <Link href="#"><i class="fa fa-plus"></i> Performance</Link>
            <Link href="#"><i class="fa fa-plus"></i> Announcements</Link>
            {/* <a href="Profile/AddUser"><i class="fa fa-user-plus"></i> Add Users</a> */}
            <Link href="#"><i class="fa fa-cogs"></i> Settings</Link>
        </div>

    );
}

export default SideNav;