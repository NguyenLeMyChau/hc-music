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
    const [isPlaying, setIsPlaying] = useState(false); // Trạng thái phát/ dừng nhạc
    const [progress, setProgress] = useState(0); // Tiến trình phát nhạc (phần trăm)
    const [currentTime, setCurrentTime] = useState(0); // Thời gian hiện tại của nhạc
    const [duration, setDuration] = useState(0); // Tổng thời gian của nhạc
    const [volume, setVolume] = useState(0.5); // Âm lượng của nhạc
    const [userInteracted, setUserInteracted] = useState(false); // Theo dõi sự tương tác của người dùng

    const audioRef = useRef(null); // Ref cho phần tử audio
    const progressBarRef = useRef(null); // Ref cho thanh tiến trình
    const { currentMusic, nextMusic, prevMusic } = useMusic(); // Lấy thông tin bài hát từ context

    // Xử lý sự tương tác của người dùng để cho phép phát âm thanh
    const handleUserInteraction = () => setUserInteracted(true);

    useEffect(() => {
        // Thêm sự kiện theo dõi nhấp chuột và nhấn phím để cho phép phát âm thanh khi người dùng tương tác với trang web 
        window.addEventListener('click', handleUserInteraction); // Khi nhấp chuột vào trang web 
        return () => {
            window.removeEventListener('click', handleUserInteraction); // Xóa sự kiện theo dõi khi không cần thiết
        };
    }, []);

    useEffect(() => {
        // Phát nhạc khi có bài hát mới và người dùng đã tương tác
        if (currentMusic && audioRef.current && userInteracted) {
            audioRef.current.play().catch(error => console.error('Error playing audio:', error));
            setIsPlaying(true);
        }
    }, [currentMusic, userInteracted]);

    useEffect(() => {
        const audio = audioRef.current;

        // Cập nhật tiến trình và thời gian khi nhạc phát
        const updateProgress = () => {
            if (audio) {
                setCurrentTime(audio.currentTime);
                setDuration(audio.duration);
                setProgress((audio.currentTime / audio.duration) * 100);
            }
        };

        audio.addEventListener('timeupdate', updateProgress);
        return () => audio.removeEventListener('timeupdate', updateProgress);
    }, []);

    // Chuyển đổi trạng thái phát/ dừng nhạc
    const togglePlay = () => {
        if (audioRef.current) {
            isPlaying ? audioRef.current.pause() : audioRef.current.play().catch(error => console.error('Error playing audio:', error));
            setIsPlaying(!isPlaying);
        }
    };

    // Xử lý nhấp chuột trên thanh tiến trình để thay đổi thời gian phát nhạc
    const handleProgressClick = (e) => {
        const clickPosition = (e.clientX - progressBarRef.current.getBoundingClientRect().left) / progressBarRef.current.offsetWidth;
        audioRef.current.currentTime = clickPosition * audioRef.current.duration;
    };

    // Thay đổi âm lượng của nhạc
    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
        audioRef.current.volume = event.target.value;
    };

    // Xử lý bỏ qua nhạc (về trước hoặc về sau)
    const handleSkip = (amount) => {
        if (audioRef.current) {
            const newTime = Math.max(0, Math.min(audioRef.current.currentTime + amount, audioRef.current.duration));
            audioRef.current.currentTime = newTime;
        }
    };

    // Định dạng thời gian (phút:giây)
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className='footer-body'>
            <img src={currentMusic ? currentMusic.image : image} alt="imageFooter" className='footer-avatar' />
            <div className='footer-name'>
                <p>{currentMusic ? currentMusic.name : 'H&C Music'}</p>
                <p>{currentMusic ? currentMusic.singer : 'MyChow'}</p>
            </div>

            <FooterItem Icon={IoPlayBack} onClick={prevMusic} />
            <FooterItem Icon={IoPlaySkipBack} onClick={() => handleSkip(-10)} />
            <div className="footer-gradient-circle" onClick={togglePlay}>
                {isPlaying ? <FooterItem Icon={TbPlayerPauseFilled} /> : <FooterItem Icon={RiPlayLargeFill} />}
            </div>
            <FooterItem Icon={IoPlaySkipForward} onClick={() => handleSkip(10)} />
            <FooterItem Icon={IoPlayForward} onClick={nextMusic} />

            <div className="footer-music-progress-container">
                <span className="time-label">{formatTime(currentTime)}</span>
                <div className="footer-music-progress" ref={progressBarRef} onClick={handleProgressClick}>
                    <div
                        className="progress-bar"
                        style={{ width: `${progress}%`, background: `linear-gradient(to right, #B5179E, #7209B7)` }}
                    ></div>
                    <div className="progress-button" style={{ left: `${progress}%` }}></div>
                </div>
                <span className="time-label">{formatTime(duration)}</span>
            </div>
            <audio ref={audioRef} src={currentMusic ? currentMusic.audio : NeuLucDo} />

            <FooterItem Icon={FaVolumeHigh} />
            <div className="footer-volume-control">
                <input
                    className='volume-slider'
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </div>

            <FooterItem Icon={IoIosAlbums} className='icon-special' tooltip="Thêm vào album" />
            <FooterItem Icon={AiOutlineInteraction} className='icon-special' tooltip="Phát lại" />
            <FooterItem Icon={CiHeart} className='icon-special' tooltip="Lưu vào yêu thích" />
            <FooterItem Icon={TbMicrophone2} className='icon-special' tooltip="Xem lời bài hát" />
        </div>
    );
}

export default Footer;
