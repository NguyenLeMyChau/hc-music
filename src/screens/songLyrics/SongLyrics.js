import React from 'react';
import './SongLyrics.css';
import { CiUser, CiHeart, CiSettings } from "react-icons/ci";


function SongLyrics() {
    return (
        <div className='song-lyrics-background'>
            <div className="half-half-square">
                <div className="inner-rectangle">
                    <div className="image-column">
                        <img src="https://res.cloudinary.com/dxvrdtaky/image/upload/v1720200076/your_folder_name/y7lnffpxaf4m60hrm0b7.jpg" alt="music" />
                        <p className='name-music'>Tên bài hát</p>
                        <p className='author'>Tác giả</p>

                    </div>
                    <div className="text-column">
                        {/* Văn bản */}
                        <p className='lyrics'>Your text here</p>
                    </div>
                </div>
                <div className='icons-container'>
                    <CiUser size={30} color="#000000" />
                    <CiHeart size={30} color="#000000" />
                    <CiSettings size={30} color="000000" />
                </div>

            </div>
        </div>

    );
}

export default SongLyrics;
