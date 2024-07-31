import React from 'react';
import './TopMusic.css';
import HomeItem from './HomeItem';
import { TbPlayerPauseFilled } from "react-icons/tb";
import { RiPlayLargeFill } from "react-icons/ri";
import { PiWaveformBold } from "react-icons/pi";
import { useMusic } from '../../components/music-context/MusicContext';

function TopMusic() {
    const { setCurrentMusic, musicList, selectedItemId, setSelectedItemId } = useMusic();

    // set current music when click on item music list 
    const handleItemClick = (music) => {
        setSelectedItemId(music._id);
        setCurrentMusic(music);
    }

    return (
        <div className="top-music-list">
            {musicList.map((item, index) => (
                <div key={item._id}
                    className={`top-music-item ${selectedItemId === item._id ? 'selected' : ''}`}
                    onClick={() => handleItemClick(item)}>

                    <h2>{index < 9 ? `0${index + 1}` : index + 1}</h2>
                    <img src={item.image} alt={item.name} />
                    <p className='name'>{item.singer} - {item.name}</p>
                    <p className='time'>{item.time}</p>
                    {selectedItemId === item._id ? <HomeItem Icon={PiWaveformBold} /> : ''}
                    {selectedItemId === item._id ? <HomeItem Icon={TbPlayerPauseFilled} className="icon-play" /> : <RiPlayLargeFill size={25} className="icon-play" />}
                </div>
            ))}

        </div>

    );
}

export default TopMusic;
