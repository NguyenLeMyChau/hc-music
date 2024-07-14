import React from 'react';
import './User.css';
import { HiOutlineBellAlert } from "react-icons/hi2";
import avatar from '../../images/avatar-music.jpg';
import HeaderItem from '../header/HeaderItem';
function User() {

    return (

        <div className='user-body'>
            <div className='user-info'>
                <img src={avatar} alt="avatarHeader" />
                <div className='user-name'>
                    <p>Mỹ Châu</p>
                    <p>Premium Blog</p>
                </div>
                <HeaderItem Icon={HiOutlineBellAlert} />
            </div>

            <h3>Top Artist</h3>
            <h3>Recently Played</h3>
        </div>


    );
}

export default User;