import React, { useState } from 'react';
import './TopMusic.css';
import imgNeuLucDo from '../../images/neulucdo.jfif';
import imgBoXiBo from '../../images/boxibo.jpg';
import imgGieoQue from '../../images/gieoque.jpg';
import imgSeeTinh from '../../images/seetinh.jpg';
import imgKeCapGapBaGia from '../../images/kecapgapbagia.jpg';
import HomeItem from './HomeItem';
import NeuLucDo from '../../audios/NeuLucDo-tlinh2pillz-8783613.mp3';
import BoXiBo from '../../audios/BoXiBo-HoangThuyLinh-7702270.mp3';
import GieoQue from '../../audios/GieoQue-HoangThuyLinhFeatDen-7702264.mp3';
import SeeTinh from '../../audios/SeeTinh-HoangThuyLinh-7702265.mp3';
import KeCapGapBaGia from '../../audios/DiamondCutDiamond-HoangThuyLinhBINZ-6153594.mp3';
import { TbPlayerPauseFilled } from "react-icons/tb";
import { RiPlayLargeFill } from "react-icons/ri";
import { PiWaveformBold } from "react-icons/pi";
import { useMusic } from '../../components/music-context/MusicContext';

function TopMusic() {
    const [selectedItemId, setSelectedItemId] = useState(null);
    const { setCurrentMusic } = useMusic();

    const TopMusic = [
        { id: 1, name: 'Nếu lúc đó', singer: 'Tlinh', image: imgNeuLucDo, time: '4:24', audio: NeuLucDo },
        { id: 2, name: 'Bo Xì Bo', singer: 'Hoàng Thuỳ Linh', image: imgBoXiBo, time: '2:52', audio: BoXiBo },
        { id: 3, name: 'Gieo Quẻ', singer: 'Hoàng Thuỳ Linh', image: imgGieoQue, time: '3:18', audio: GieoQue },
        { id: 4, name: 'See Tình', singer: 'Hoàng Thuỳ Linh', image: imgSeeTinh, time: '3:05', audio: SeeTinh },
        { id: 5, name: 'Kẻ cắp gặp bà già', singer: 'Hoàng Thuỳ Linh', image: imgKeCapGapBaGia, time: '3:51', audio: KeCapGapBaGia },
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
                    {selectedItemId === item.id ? <HomeItem Icon={PiWaveformBold} /> : ''}
                    {selectedItemId === item.id ? <HomeItem Icon={TbPlayerPauseFilled} className="icon-play" /> : <RiPlayLargeFill size={25} className="icon-play" />}
                </div>
            ))}
        </div>

    );
}

export default TopMusic;
