import React, { useState, useEffect, useRef } from 'react';
import './footer.css';
import image from '../../images/neulucdo.jfif';
import FooterItem from './FooterItem';
import audio from '../../audios/NeuLucDo-tlinh2pillz-8783613.mp3'

import { IoPlayBack, IoPlaySkipBack, IoPlayForward, IoPlaySkipForward, IoShareSocialOutline } from "react-icons/io5";
import { TbPlayerPauseFilled } from "react-icons/tb";
import { RiPlayLargeFill } from "react-icons/ri";
import { FaVolumeHigh } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

function Footer() {
    const [isPlaying, setIsPlaying] = useState(true); //State play - stop nhạc
    const [progress, setProgress] = useState(0); // State cho thanh tiến trình nhạc
    const [currentTime, setCurrentTime] = useState(0); // State cho thời gian hiện tại của bài hát
    const [duration, setDuration] = useState(0); // State cho thời lượng của bài hát
    const [volume, setVolume] = useState(1); // State cho âm lượng
    const audioRef = useRef(null); // Ref cho phần tử audio
    const progressBarRef = useRef(null);

    const handleProgressClick = (e) => {
        const progressBar = progressBarRef.current;
        const audio = audioRef.current;
        const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
        audio.currentTime = clickPosition * audio.duration;
        setProgress((currentTime / duration) * 100);
    };

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

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

    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    };

    return (
        <div className='footer-body'>
            <img src={image} alt="imageFooter" className='footer-avatar' />

            <div className='footer-name'>
                <p>Nếu lúc đó</p>
                <p>Tlinh</p>
            </div>

            <FooterItem Icon={IoPlayBack} />
            <FooterItem Icon={IoPlaySkipBack} />
            <div className="footer-gradient-circle" onClick={togglePlay}>
                {isPlaying ? <FooterItem Icon={TbPlayerPauseFilled} /> : <FooterItem Icon={RiPlayLargeFill} />}
            </div>
            <FooterItem Icon={IoPlaySkipForward} />
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
                </div>
                <span className="time-label">{formatTime(duration)}</span>
            </div>
            <audio ref={audioRef} src={audio} />

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

            <FooterItem Icon={CiHeart} />
            <FooterItem Icon={CiHeart} />
            <FooterItem Icon={CiHeart} />
            <FooterItem Icon={IoShareSocialOutline} />

        </div>
    );
}

export default Footer;
