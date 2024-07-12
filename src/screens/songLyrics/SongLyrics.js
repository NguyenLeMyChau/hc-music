// import React, { useEffect, useRef, useState } from 'react';
// import './SongLyrics.css';
// import { CiUser, CiHeart, CiSettings } from "react-icons/ci";
// import { IoPlayBack, IoPlaySkipBack, IoPlayForward, IoPlaySkipForward, IoShareSocialOutline } from "react-icons/io5";
// import { TbPlayerPauseFilled } from "react-icons/tb";
// import { RiPlayLargeFill } from "react-icons/ri";
// import { FaVolumeHigh } from "react-icons/fa6";
// import { AiOutlineInteraction } from "react-icons/ai";
// import { IoIosAlbums } from "react-icons/io";
// import { IoShuffle } from "react-icons/io5";
// import { AiOutlineRetweet } from 'react-icons/ai';


// function SongLyrics() {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [volume, setVolume] = useState(0.5); // State cho âm lượng của bài hát
//     const audioRef = useRef(null); // Ref cho phần tử audio
//     const [progress, setProgress] = useState(0); // State cho thanh tiến trình nhạc
//     const [currentTime, setCurrentTime] = useState(0); // State cho thời gian hiện tại của bài hát
//     const [duration, setDuration] = useState(0); // State cho thời lượng của bài hát
//     const progressBarRef = useRef(null);


//     const handlePlayMusic = () => {
//         setIsPlaying(!isPlaying);
//     };
//     const handleVolumeChange = (event) => {
//         const newVolume = event.target.value;
//         setVolume(newVolume);
//         audioRef.current.volume = newVolume;
//     };
//     useEffect(() => {
//         const audio = audioRef.current;

//         const updateProgress = () => {
//             const current = audio.currentTime;
//             const dur = audio.duration;
//             setCurrentTime(current);
//             setDuration(dur);
//             setProgress((current / dur) * 100);
//         };

//         if (audio) {
//             audio.addEventListener('timeupdate', updateProgress);
//         }

//         return () => {
//             if (audio) {
//                 audio.removeEventListener('timeupdate', updateProgress);
//             }
//         };
//     }, []);
//     return (
//         <div className='song-lyrics-background'>
//             <div className="half-half-square">
//                 <div className="inner-rectangle">
//                     <div className="image-column">
//                         <img src="https://res.cloudinary.com/dxvrdtaky/image/upload/v1720200076/your_folder_name/y7lnffpxaf4m60hrm0b7.jpg" alt="music" />
//                         <p className='name-music'>Tên bài hát</p>
//                         <p className='author-music'>Tác giả</p>

//                     </div>
//                     <div className="text-column">
//                         {/* Văn bản */}
//                         <p className='lyrics'>Your text here</p>
//                     </div>
//                 </div>
//                 <div className="icons-container">
//                     <IoIosAlbums size={20} color='000000' />

//                     <div className="center-icons">
//                         <IoShuffle size={30} color='000000' />
//                         <IoPlayBack size={30} color='000000' />
//                         <IoPlaySkipBack size={30} color='000000' />
//                         <div onClick={handlePlayMusic} style={{ cursor: 'pointer' }}>
//                             {isPlaying ? (
//                                 <TbPlayerPauseFilled size={30} color='000000' />
//                             ) : (
//                                 <RiPlayLargeFill size={30} color='000000' />
//                             )}
//                         </div>
//                         <IoPlaySkipForward size={30} color='000000' />
//                         <IoPlayForward size={30} color='000000' />
//                         <AiOutlineRetweet size={30} color='000000' />
//                     </div>

//                     <FaVolumeHigh size={20} color='000000' />
//                     <div className="footer-volume-control">
//                         <input
//                             className={`volume-slider`}
//                             type="range"
//                             min="0"
//                             max="1"
//                             step="0.01"
//                             value={volume}
//                             onChange={handleVolumeChange}
//                         />
//                     </div>
//                 </div>

//             </div>
//         </div>

//     );
// }

// export default SongLyrics;
// import React, { useEffect, useRef, useState } from 'react';
// import './SongLyrics.css';
// import { IoPlayBack, IoPlaySkipBack, IoPlayForward, IoPlaySkipForward } from "react-icons/io5";
// import { TbPlayerPauseFilled } from "react-icons/tb";
// import { RiPlayLargeFill } from "react-icons/ri";
// import { FaVolumeHigh } from "react-icons/fa6";
// import { IoIosAlbums } from "react-icons/io";
// import { IoShuffle } from "react-icons/io5";
// import { AiOutlineRetweet } from 'react-icons/ai';


// function SongLyrics() {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [volume, setVolume] = useState(0.5); // State cho âm lượng của bài hát
//     const audioRef = useRef(null); // Ref cho phần tử audio
//     const [progress, setProgress] = useState(0); // State cho thanh tiến trình nhạc
//     const [currentTime, setCurrentTime] = useState(0); // State cho thời gian hiện tại của bài hát
//     const [duration, setDuration] = useState(0); // State cho thời lượng của bài hát
//     const progressBarRef = useRef(null);

//     // Xử lý phát và dừng nhạc
//     const handlePlayMusic = () => {
//         if (audioRef.current) {
//             if (isPlaying) {
//                 audioRef.current.pause();
//             } else {
//                 audioRef.current.play();
//             }
//             setIsPlaying(!isPlaying);
//         }
//     };

//     // Xử lý thay đổi âm lượng
//     const handleVolumeChange = (event) => {
//         const newVolume = event.target.value;
//         setVolume(newVolume);
//         if (audioRef.current) {
//             audioRef.current.volume = newVolume;
//         }
//     };
//     const formatTime = (time) => {
//         const minutes = Math.floor(time / 60);
//         const seconds = Math.floor(time % 60);
//         return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//     };

//     const handleProgressClick = (e) => {
//         const progressBar = progressBarRef.current;
//         const audio = audioRef.current;
//         const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
//         audio.currentTime = clickPosition * audio.duration;
//         setProgress((currentTime / duration) * 100);
//     };
//     // Cập nhật tiến trình và thời gian của bài hát
//     useEffect(() => {
//         const audio = audioRef.current;

//         const updateProgress = () => {
//             const current = audio.currentTime;
//             const dur = audio.duration;
//             setCurrentTime(current);
//             setDuration(dur);
//             setProgress((current / dur) * 100);
//         };

//         if (audio) {
//             audio.addEventListener('timeupdate', updateProgress);
//         }

//         return () => {
//             if (audio) {
//                 audio.removeEventListener('timeupdate', updateProgress);
//             }
//         };
//     }, []);

//     return (
//         <div className='song-lyrics-background'>
//             <div className="half-half-square">
//                 <div className="inner-rectangle">
//                     <div className="image-column">
//                         <img src="https://res.cloudinary.com/dxvrdtaky/image/upload/v1720200076/your_folder_name/y7lnffpxaf4m60hrm0b7.jpg" alt="music" />
//                         <p className='name-music'>Tên bài hát</p>
//                         <p className='author-music'>Tác giả</p>
//                     </div>
//                     <div className="text-column">
//                         <p className='lyrics'>Your text here</p>
//                     </div>
//                 </div>
//                 <div className="footer-music-progress-container" >
//                     <span className="time-label">{formatTime(currentTime)}</span>
//                     <div className="footer-music-progress" ref={progressBarRef} onClick={handleProgressClick}>
//                         <div
//                             className="progress-bar"
//                             style={{
//                                 width: `${progress}%`,
//                                 background: `linear-gradient(to right, #B5179E, #7209B7)`
//                             }}
//                         ></div>

//                         {/* Thêm nút tại vị trí currentTime */}
//                         <div
//                             className="progress-button"
//                             style={{
//                                 left: `${progress}%`
//                             }}
//                         ></div>

//                     </div>
//                     <span className="time-label">{formatTime(duration)}</span>
//                 </div>
//                 <div className="icons-container">
//                     <IoIosAlbums size={20} color='#000000' />
//                     <div className="center-icons">
//                         <IoShuffle size={30} color='#000000' />
//                         <IoPlayBack size={30} color='#000000' />
//                         <IoPlaySkipBack size={30} color='#000000' />
//                         <div onClick={handlePlayMusic} style={{ cursor: 'pointer' }}>
//                             {isPlaying ? (
//                                 <TbPlayerPauseFilled size={30} color='#000000' />
//                             ) : (
//                                 <RiPlayLargeFill size={30} color='#000000' />
//                             )}
//                         </div>
//                         <IoPlaySkipForward size={30} color='#000000' />
//                         <IoPlayForward size={30} color='#000000' />
//                         <AiOutlineRetweet size={30} color='#000000' />
//                     </div>
//                     <FaVolumeHigh size={20} color='#000000' />
//                     <div className="footer-volume-control">
//                         <input
//                             className={`volume-slider`}
//                             type="range"
//                             min="0"
//                             max="1"
//                             step="0.01"
//                             value={volume}
//                             onChange={handleVolumeChange}
//                         />
//                     </div>
//                 </div>
//                 <audio ref={audioRef} src="../../audios/NeuLucDo-tlinh2pillz-8783613.mp3" />
//             </div>
//         </div>
//     );
// }

// export default SongLyrics;

import React, { useEffect, useRef, useState } from 'react';
import './SongLyrics.css';
import { IoPlayBack, IoPlaySkipBack, IoPlayForward, IoPlaySkipForward } from "react-icons/io5";
import { TbPlayerPauseFilled } from "react-icons/tb";
import { RiPlayLargeFill } from "react-icons/ri";
import { FaVolumeHigh } from "react-icons/fa6";
import { IoIosAlbums } from "react-icons/io";
import { IoShuffle } from "react-icons/io5";
import { AiOutlineRetweet } from 'react-icons/ai';

function SongLyrics() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5); // State cho âm lượng của bài hát
    const audioRef = useRef(null); // Ref cho phần tử audio
    const [progress, setProgress] = useState(0); // State cho thanh tiến trình nhạc
    const [currentTime, setCurrentTime] = useState(0); // State cho thời gian hiện tại của bài hát
    const [duration, setDuration] = useState(0); // State cho thời lượng của bài hát
    const progressBarRef = useRef(null);

    // Xử lý phát và dừng nhạc
    const handlePlayMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Xử lý thay đổi âm lượng
    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    // Format thời gian thành dạng mm:ss
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    // Xử lý khi click vào thanh tiến trình
    const handleProgressClick = (e) => {
        const progressBar = progressBarRef.current;
        const audio = audioRef.current;

        if (!progressBar || !audio) return;

        const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
        const newTime = clickPosition * duration;

        if (Number.isFinite(newTime)) {
            audio.currentTime = newTime;
            setProgress((newTime / duration) * 100);
        }
    };
    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleAudioError = (error) => {
        console.error('Audio playback error:', error);
        // Handle error state or retry loading audio
    };


    // Cập nhật tiến trình và thời gian của bài hát
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

    return (
        <div className='song-lyrics-background'>
            <div className="half-half-square">
                <div className="inner-rectangle">
                    <div className="image-column">
                        <img src="https://res.cloudinary.com/dxvrdtaky/image/upload/v1720200076/your_folder_name/y7lnffpxaf4m60hrm0b7.jpg" alt="music" />
                        <p className='name-music'>Tên bài hát</p>
                        <p className='author-music'>Tác giả</p>
                    </div>
                    <div className="text-column">
                        <p className='lyrics'>Your text here</p>
                    </div>
                </div>
                <div className="footer-music-progress-container">
                    <span className="time-label">{formatTime(currentTime)}</span>
                    <div className="footer-music-progress" ref={progressBarRef} onClick={handleProgressClick}>
                        <div
                            className="progress-bar"
                            style={{
                                width: `${progress}%`,
                                background: `linear-gradient(to right, #B5179E, #7209B7)`
                            }}
                        ></div>
                        <div
                            className="progress-button"
                            style={{
                                left: `${progress}%`
                            }}
                        ></div>
                    </div>
                    <span className="time-label">{formatTime(duration)}</span>
                </div>
                <audio ref={audioRef} src="https://res.cloudinary.com/dxvrdtaky/video/upload/v1720805301/NeuLucDo-tlinh2pillz-8783613_am9fry.mp3" onLoadedMetadata={handleLoadedMetadata} onError={handleAudioError} />
                <div className="icons-container">
                    <IoIosAlbums size={20} color='#000000' />
                    <div className="center-icons">
                        <IoShuffle size={30} color='#000000' />
                        <IoPlayBack size={30} color='#000000' />
                        <IoPlaySkipBack size={30} color='#000000' />
                        <div onClick={handlePlayMusic} style={{ cursor: 'pointer' }}>
                            {isPlaying ? (
                                <TbPlayerPauseFilled size={30} color='#000000' />
                            ) : (
                                <RiPlayLargeFill size={30} color='#000000' />
                            )}
                        </div>
                        <IoPlaySkipForward size={30} color='#000000' />
                        <IoPlayForward size={30} color='#000000' />
                        <AiOutlineRetweet size={30} color='#000000' />
                    </div>
                    <FaVolumeHigh size={20} color='#000000' />
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
                </div>

            </div>
        </div>
    );
}

export default SongLyrics;
