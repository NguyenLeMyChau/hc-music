import React, { useState, useEffect, useRef } from 'react';
import './footer.css';
import image from '../../images/neulucdo.jfif';
import FooterItem from './FooterItem';
import NeuLucDo from '../../audios/NeuLucDo-tlinh2pillz-8783613.mp3';
import { IoPlayBack, IoPlaySkipBack, IoPlayForward, IoPlaySkipForward } from "react-icons/io5";
import { TbPlayerPauseFilled } from "react-icons/tb";
import { RiPlayLargeFill } from "react-icons/ri";
import { FaVolumeHigh } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { AiOutlineInteraction } from "react-icons/ai";
import { IoIosAlbums } from "react-icons/io";
import { TbMicrophone2 } from "react-icons/tb";

import { useMusic } from '../../components/music-context/MusicContext';

function Footer() {
    const [isPlaying, setIsPlaying] = useState(true); //State play - stop nhạc
    const [progress, setProgress] = useState(0); // State cho thanh tiến trình nhạc
    const [currentTime, setCurrentTime] = useState(0); // State cho thời gian hiện tại của bài hát
    const [duration, setDuration] = useState(0); // State cho thời lượng của bài hát
    const [volume, setVolume] = useState(0.5); // State cho âm lượng của bài hát
    const audioRef = useRef(null); // Ref cho phần tử audio
    const progressBarRef = useRef(null);

    const { currentMusic } = useMusic();


    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        console.log('.....currentMusic', currentMusic);
        if (currentMusic && audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    }, [currentMusic]);

    useEffect(() => {
        const audio = audioRef.current;

        const updateProgress = () => {
            const current = audio.currentTime;
            const dur = audio.duration;
            setCurrentTime(current);
            setDuration(dur);
            setProgress((current / dur) * 100);
        };

        if (audio) {
            audio.addEventListener('timeupdate', updateProgress);
        }

        return () => {
            if (audio) {
                audio.removeEventListener('timeupdate', updateProgress);
            }
        };
    }, []);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleProgressClick = (e) => {
        const progressBar = progressBarRef.current;
        const audio = audioRef.current;
        const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
        audio.currentTime = clickPosition * audio.duration;
        setProgress((currentTime / duration) * 100);
    };

    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    };

    const handleSkipForward = () => {
        if (audioRef.current) {
            let newTime = audioRef.current.currentTime + 10;
            if (newTime > audioRef.current.duration) {
                newTime = audioRef.current.duration; // Đảm bảo không vượt quá thời lượng
            }
            audioRef.current.currentTime = newTime;
        }
    };

    const handleSkipBack = () => {
        if (audioRef.current) {
            let newTime = audioRef.current.currentTime - 10;
            if (newTime > audioRef.current.duration) {
                newTime = audioRef.current.duration; // Đảm bảo không vượt quá thời lượng
            }
            audioRef.current.currentTime = newTime;
        }
    };


    return (
        <div className='footer-body'>
            <img src={currentMusic ? currentMusic.image : image} alt="imageFooter" className='footer-avatar' />

            <div className='footer-name'>
                <p>{currentMusic ? currentMusic.name : 'H&C Music'}</p>
                <p>{currentMusic ? currentMusic.singer : 'MyChow'}</p>
            </div>

            <FooterItem Icon={IoPlayBack} />
            <FooterItem Icon={IoPlaySkipBack} onClick={handleSkipBack}/>
            <div className="footer-gradient-circle" onClick={togglePlay}>
                {isPlaying ? <FooterItem Icon={TbPlayerPauseFilled} /> : <FooterItem Icon={RiPlayLargeFill} />}
            </div>
            <FooterItem Icon={IoPlaySkipForward} onClick={handleSkipForward}/>
            <FooterItem Icon={IoPlayForward} />

            <div className="footer-music-progress-container" >
                <span className="time-label">{formatTime(currentTime)}</span>
                <div className="footer-music-progress" ref={progressBarRef} onClick={handleProgressClick}>
                    <div
                        className="progress-bar"
                        style={{
                            width: `${progress}%`,
                            background: `linear-gradient(to right, #B5179E, #7209B7)`
                        }}
                    ></div>

                    {/* Thêm nút tại vị trí currentTime */}
                    <div
                        className="progress-button"
                        style={{
                            left: `${progress}%`
                        }}
                    ></div>

                </div>
                <span className="time-label">{formatTime(duration)}</span>
            </div>
            <audio ref={audioRef} src={currentMusic ? currentMusic.audio : NeuLucDo}/>

            <FooterItem Icon={FaVolumeHigh} />
            <div className="footer-volume-control">
                <input
                    className={`volume-slider`}
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </div>

            <FooterItem Icon={IoIosAlbums} className='icon-special' tooltip="Thêm vào album"/>
            <FooterItem Icon={AiOutlineInteraction} className='icon-special' tooltip="Phát lại"/>
            <FooterItem Icon={CiHeart} className='icon-special' tooltip="Lưu vào yêu thích"/>
            <FooterItem Icon={TbMicrophone2} className='icon-special' tooltip="Xem lời bài hát"/>
        </div >
    );
}

export default Footer;
