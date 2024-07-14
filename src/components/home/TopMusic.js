import React, { useState } from 'react';
import './TopMusic.css';
import img1 from '../../images/tlinh-ai-album.jpg';
import img2 from '../../images/album2.jpg';
import img3 from '../../images/neulucdo.jfif';
import HomeItem from './HomeItem';
import { TbPlayerPauseFilled } from "react-icons/tb";
import { RiPlayLargeFill } from "react-icons/ri";
import { PiWaveformBold  } from "react-icons/pi";
import { useMusic } from '../../components/music-context/MusicContext';

function TopMusic() {
    const [selectedItemId, setSelectedItemId] = useState(null);
    const { setCurrentMusic } = useMusic();

    const TopMusic = [
        { id: 1, name: 'Nếu lúc đó', singer: 'Tlinh', image: img3, time: '4:24' },
        { id: 2, name: 'Ái', singer: 'Tlinh', image: img1, time: '4:24' },
        { id: 3, name: 'Ái', singer: 'Tlinh', image: img2, time: '4:24' },
        { id: 4, name: 'Nếu lúc đó', singer: 'Tlinh', image: img1, time: '4:24' },
        { id: 5, name: 'Nếu lúc đó', singer: 'Tlinh', image: img3, time: '4:24' },
        { id: 6, name: 'Nếu lúc đó', singer: 'Tlinh', image: img3, time: '4:24' },
        { id: 7, name: 'Ái', singer: 'Tlinh', image: img1, time: '4:24' },
        { id: 8, name: 'Ái', singer: 'Tlinh', image: img2, time: '4:24' },
        { id: 9, name: 'Nếu lúc đó', singer: 'Tlinh', image: img1, time: '4:24' }
    ];

    const handleItemClick = (music) => {
        setSelectedItemId(music.id);
        setCurrentMusic(music);
        console.log(music);
    }

    return (
        <div className="top-music-list">
            {TopMusic.map((item) => (
                <div key={item.id}
                    className={`top-music-item ${selectedItemId === item.id ? 'selected' : ''}`}
                    onClick={() => handleItemClick(item)}>

                    <h2>0{item.id}</h2>
                    <img src={item.image} alt={item.name} />
                    <p className='name'>{item.singer} - {item.name}</p>
                    <p className='time'>{item.time}</p>
                    {selectedItemId === item.id ? <HomeItem Icon={PiWaveformBold }/> : ''}
                    {selectedItemId === item.id ? <HomeItem Icon={TbPlayerPauseFilled} className="icon-play"/> : <RiPlayLargeFill size={25} className="icon-play" />}
                </div>
            ))}
        </div>

    );
}

export default TopMusic;
