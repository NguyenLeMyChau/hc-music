// import React, { useEffect, useRef, useState } from 'react';
// import './SongLyrics.css';
// import { IoPlayBack, IoPlaySkipBack, IoPlayForward, IoPlaySkipForward, IoShareSocialOutline } from "react-icons/io5";
// import { TbPlayerPauseFilled } from "react-icons/tb";
// import { RiPlayLargeFill } from "react-icons/ri";
// import { FaVolumeHigh } from "react-icons/fa6";
// import { IoIosAlbums } from "react-icons/io";
// import { IoShuffle } from "react-icons/io5";
// import { AiOutlineRetweet } from 'react-icons/ai';
// import { FaRegHeart } from "react-icons/fa";

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

//     // Format thời gian thành dạng mm:ss
//     const formatTime = (time) => {
//         const minutes = Math.floor(time / 60);
//         const seconds = Math.floor(time % 60);
//         return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//     };

//     // Xử lý khi click vào thanh tiến trình
//     const handleProgressClick = (e) => {
//         const progressBar = progressBarRef.current;
//         const audio = audioRef.current;

//         if (!progressBar || !audio) return;

//         const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
//         const newTime = clickPosition * duration;

//         if (Number.isFinite(newTime)) {
//             audio.currentTime = newTime;
//             setProgress((newTime / duration) * 100);
//         }
//     };
//     const handleLoadedMetadata = () => {
//         if (audioRef.current) {
//             setDuration(audioRef.current.duration);
//         }
//     };

//     const handleAudioError = (error) => {
//         console.error('Audio playback error:', error);
//         // Handle error state or retry loading audio
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
//                 <div className="music-lyrics-progress-container">
//                     <span className="time-label">{formatTime(currentTime)}</span>
//                     <div className="footer-music-progress" ref={progressBarRef} onClick={handleProgressClick}>
//                         <div
//                             className="progress-bar"
//                             style={{
//                                 width: `${progress}%`,
//                                 background: `linear-gradient(to right, #B5179E, #7209B7)`
//                             }}
//                         ></div>
//                         <div
//                             className="progress-button"
//                             style={{
//                                 left: `${progress}%`
//                             }}
//                         ></div>
//                     </div>
//                     <span className="time-label">{formatTime(duration)}</span>
//                 </div>
//                 <audio ref={audioRef} src="https://res.cloudinary.com/dxvrdtaky/video/upload/v1720805301/NeuLucDo-tlinh2pillz-8783613_am9fry.mp3" onLoadedMetadata={handleLoadedMetadata} onError={handleAudioError} />
//                 <div className="icons-container">
//                     <IoIosAlbums size={20} color='#000000' />
//                     <FaRegHeart size={20} color='#000000' />
//                     <IoShareSocialOutline size={20} color='#000000' />
//                     <div className="center-icons">
//                         <IoShuffle size={30} color='#000000' />
//                         <IoPlayBack size={30} color='#000000' />
//                         <IoPlaySkipBack size={30} color='#000000' />
//                         <div onClick={handlePlayMusic} >
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

//             </div>
//         </div>
//     );
// }

// export default SongLyrics;
// import React, { useEffect, useRef, useState } from 'react';
// import './SongLyrics.css';
// import { IoPlayBack, IoPlaySkipBack, IoPlayForward, IoPlaySkipForward, IoShareSocialOutline } from "react-icons/io5";
// import { TbPlayerPauseFilled } from "react-icons/tb";
// import { RiPlayLargeFill } from "react-icons/ri";
// import { FaVolumeHigh } from "react-icons/fa6";
// import { IoIosAlbums } from "react-icons/io";
// import { IoShuffle } from "react-icons/io5";
// import { AiOutlineRetweet } from 'react-icons/ai';
// import { FaRegHeart } from "react-icons/fa";

// function SongLyrics() {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [volume, setVolume] = useState(0.5);
//     const [progress, setProgress] = useState(0);
//     const [currentTime, setCurrentTime] = useState(0);
//     const [duration, setDuration] = useState(0);
//     const audioRef = useRef(null);
//     const progressBarRef = useRef(null);
//     const imgRef = useRef(null);

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

//         if (!progressBar || !audio) return;

//         const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
//         const newTime = clickPosition * duration;

//         if (Number.isFinite(newTime)) {
//             audio.currentTime = newTime;
//             setProgress((newTime / duration) * 100);
//         }
//     };

//     const handleLoadedMetadata = () => {
//         if (audioRef.current) {
//             setDuration(audioRef.current.duration);
//         }
//     };

//     const handleAudioError = (error) => {
//         console.error('Audio playback error:', error);
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

//     useEffect(() => {
//         if (imgRef.current) {
//             if (isPlaying) {
//                 imgRef.current.classList.add('spin');
//             } else {
//                 imgRef.current.classList.remove('spin');
//             }
//         }
//     }, [isPlaying]);

//     return (
//         <div className='song-lyrics-background'>
//             <div className="half-half-square">
//                 <div className="inner-rectangle">
//                     <div className="image-column">
//                         <img
//                             src="https://res.cloudinary.com/dxvrdtaky/image/upload/v1720200076/your_folder_name/y7lnffpxaf4m60hrm0b7.jpg"
//                             alt="music"
//                             ref={imgRef}
//                         />
//                         <p className='name-music'>Tên bài hát</p>
//                         <p className='author-music'>Tác giả</p>
//                     </div>
//                     <div className="text-column">
//                         <p className='lyrics'>Your text here</p>
//                     </div>
//                 </div>
//                 <div className="music-lyrics-progress-container">
//                     <span className="time-label">{formatTime(currentTime)}</span>
//                     <div className="footer-music-progress" ref={progressBarRef} onClick={handleProgressClick}>
//                         <div
//                             className="progress-bar"
//                             style={{
//                                 width: `${progress}%`,
//                                 background: `linear-gradient(to right, #B5179E, #7209B7)`
//                             }}
//                         ></div>
//                         <div
//                             className="progress-button"
//                             style={{
//                                 left: `${progress}%`
//                             }}
//                         ></div>
//                     </div>
//                     <span className="time-label">{formatTime(duration)}</span>
//                 </div>
//                 <audio
//                     ref={audioRef}
//                     src="https://res.cloudinary.com/dxvrdtaky/video/upload/v1720805301/NeuLucDo-tlinh2pillz-8783613_am9fry.mp3"
//                     onLoadedMetadata={handleLoadedMetadata}
//                     onError={handleAudioError}
//                 />
//                 <div className="icons-container">
//                     <IoIosAlbums size={20} color='#000000' />
//                     <FaRegHeart size={20} color='#000000' />
//                     <IoShareSocialOutline size={20} color='#000000' />
//                     <div className="center-icons">
//                         <IoShuffle size={30} color='#000000' />
//                         <IoPlayBack size={30} color='#000000' />
//                         <IoPlaySkipBack size={30} color='#000000' />
//                         <div onClick={handlePlayMusic}>
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
//                             className="volume-slider"
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
// import {
//     IoPlayBack,
//     IoPlaySkipBack,
//     IoPlayForward,
//     IoPlaySkipForward,
//     IoShareSocialOutline
// } from "react-icons/io5";
// import { TbPlayerPauseFilled } from "react-icons/tb";
// import { RiPlayLargeFill } from "react-icons/ri";
// import { FaVolumeHigh } from "react-icons/fa6";
// import { IoIosAlbums } from "react-icons/io";
// import { IoShuffle } from "react-icons/io5";
// import { AiOutlineRetweet } from 'react-icons/ai';
// import { FaRegHeart } from "react-icons/fa";

// function SongLyrics() {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [volume, setVolume] = useState(0.5);
//     const [progress, setProgress] = useState(0);
//     const [currentTime, setCurrentTime] = useState(0);
//     const [duration, setDuration] = useState(0);
//     const audioRef = useRef(null);
//     const progressBarRef = useRef(null);
//     const imgRef = useRef(null);
//     const imgRotationRef = useRef(0); // Ref để lưu góc quay hiện tại của ảnh
//     const lyricsContainerRef = useRef(null);

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

//     const handleVolumeChange = (event) => {
//         const newVolume = parseFloat(event.target.value);
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

//     // const handleProgressClick = (e) => {
//     //     const progressBar = progressBarRef.current;
//     //     const audio = audioRef.current;

//     //     if (!progressBar || !audio) return;

//     //     const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
//     //     const newTime = clickPosition * duration;

//     //     if (Number.isFinite(newTime)) {
//     //         audio.currentTime = newTime;
//     //         setProgress((newTime / duration) * 100);
//     //     }
//     // };
//     const handleProgressClick = (e) => {
//         const progressBar = progressBarRef.current;
//         const audio = audioRef.current;

//         if (!progressBar || !audio) return;

//         const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
//         const newTime = clickPosition * duration;

//         if (Number.isFinite(newTime)) {
//             audio.currentTime = newTime;
//             setProgress((newTime / duration) * 100);
//             // Scroll lyrics container based on current time
//             scrollToLyrics(newTime);
//         }
//     };

//     const scrollToLyrics = (currentTime) => {
//         const lyricsContainer = lyricsContainerRef.current;
//         if (lyricsContainer) {
//             const lineHeight = 20; // Adjust based on your CSS line-height
//             const scrollOffset = 50; // Offset for better centering
//             const lineIndex = Math.floor(currentTime / 10); // Example calculation, adjust as needed

//             lyricsContainer.scrollTo({
//                 top: lineHeight * lineIndex - scrollOffset,
//                 behavior: 'smooth',
//             });
//         }
//     };

//     const handleLoadedMetadata = () => {
//         if (audioRef.current) {
//             setDuration(audioRef.current.duration);
//         }
//     };

//     const handleAudioError = (error) => {
//         console.error('Audio playback error:', error);
//     };

//     const handleAudioEnded = () => {
//         setIsPlaying(false); // Dừng trạng thái phát nhạc khi kết thúc
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
//             audio.addEventListener('ended', handleAudioEnded); // Bắt sự kiện khi nhạc kết thúc
//         }

//         return () => {
//             if (audio) {
//                 audio.removeEventListener('timeupdate', updateProgress);
//                 audio.removeEventListener('ended', handleAudioEnded);
//             }
//         };
//     }, []);

//     useEffect(() => {
//         if (imgRef.current) {
//             if (isPlaying) {
//                 imgRef.current.classList.add('spin');
//                 // Lưu góc quay hiện tại của ảnh
//                 const imgRotation = imgRef.current.style.transform;
//                 imgRotationRef.current = imgRotation ? parseInt(imgRotation.replace(/[^\d.-]/g, '')) : 0;
//             } else {
//                 imgRef.current.classList.remove('spin');
//             }
//         }
//     }, [isPlaying]);

//     return (
//         <div className='song-lyrics-background'>
//             <div className="half-half-square">
//                 <div className="inner-rectangle">
//                     <div className="image-column">
//                         <img
//                             src="https://res.cloudinary.com/dxvrdtaky/image/upload/v1720200076/your_folder_name/y7lnffpxaf4m60hrm0b7.jpg"
//                             alt="music"
//                             ref={imgRef}
//                             style={{ transform: `rotate(${imgRotationRef.current}deg)` }}
//                         />
//                         <p className='name-music'>Tên bài hát</p>
//                         <p className='author-music'>Tác giả</p>
//                     </div>
//                     <div className="text-column">
//                         {/* <p className='lyrics'>Lời bài hát</p> */}
//                         <div className='lyrics-container' ref={lyricsContainerRef}>
//                             <p className='lyrics'>
//                                 Verse 1
//                                 Nếu lúc đó em không buông tay<br />
//                                 Nếu lúc đó anh không lung lay<br />
//                                 Nếu lúc đó ta không trốn chạy<br />
//                                 Không giấu những thứ không muốn nhau thấy<br />
//                                 {/* ... */}
//                                 Chorus
//                                 Liệu mình sẽ còn ở bên nhau<br />
//                                 Liệu mình sẽ còn ở bên nhau<br />
//                                 Cười mỗi khi nghe thấy tên nhau<br />
//                                 Liệu mình đang còn đắm say đắm say<br />
//                                 {/* ... */}
//                                 Verse 2
//                                 Nhưng có lẽ mọi thứ đã phải diễn ra như vậy để em thấy<br />
//                                 Em phải yêu mình<br />
//                                 Đã đến lúc em phải nhận ra em đã luôn tự lừa dối con tim<br />
//                                 {/* ... */}
//                                 Chorus
//                                 Để 1 ngày mình sẽ lại đến bên nhau<br />
//                                 1 ngày mình sẽ lại đến bên nhau<br />
//                                 Cười khi bắt gặp ánh mắt nhau<br />
//                                 Dù mình sẽ không còn đắm say đắm say<br />
//                             </p>
//                         </div>

//                     </div>
//                 </div>
//                 <div className="music-lyrics-progress-container">
//                     <span className="time-label">{formatTime(currentTime)}</span>
//                     <div className="footer-music-progress" ref={progressBarRef} onClick={handleProgressClick}>
//                         <div
//                             className="progress-bar"
//                             style={{
//                                 width: `${progress}%`,
//                                 background: `linear-gradient(to right, #B5179E, #7209B7)`
//                             }}
//                         ></div>
//                         <div
//                             className="progress-button"
//                             style={{
//                                 left: `${progress}%`
//                             }}
//                         ></div>
//                     </div>
//                     <span className="time-label">{formatTime(duration)}</span>
//                 </div>
//                 <audio
//                     ref={audioRef}
//                     src="https://res.cloudinary.com/dxvrdtaky/video/upload/v1720805301/NeuLucDo-tlinh2pillz-8783613_am9fry.mp3"
//                     onLoadedMetadata={handleLoadedMetadata}
//                     onError={handleAudioError}
//                 />
//                 <div className="icons-container">
//                     <IoIosAlbums size={20} color='#000000' />
//                     <FaRegHeart size={20} color='#000000' />
//                     <IoShareSocialOutline size={20} color='#000000' />
//                     <div className="center-icons">
//                         <IoShuffle size={30} color='#000000' />
//                         <IoPlayBack size={30} color='#000000' />
//                         <IoPlaySkipBack size={30} color='#000000' />
//                         <div onClick={handlePlayMusic}>
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
//                             className="volume-slider"
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

import React, { useEffect, useRef, useState } from 'react';
import './SongLyrics.css';
import {
    IoPlayBack,
    IoPlaySkipBack,
    IoPlayForward,
    IoPlaySkipForward,
    IoShareSocialOutline
} from "react-icons/io5";
import { TbPlayerPauseFilled } from "react-icons/tb";
import { RiPlayLargeFill } from "react-icons/ri";
import { FaVolumeHigh } from "react-icons/fa6";
import { IoIosAlbums } from "react-icons/io";
import { IoShuffle } from "react-icons/io5";
import { AiOutlineRetweet } from 'react-icons/ai';
import { FaRegHeart } from "react-icons/fa";

function SongLyrics() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);
    const progressBarRef = useRef(null);
    const imgRef = useRef(null);
    const imgRotationRef = useRef(0); // Ref để lưu góc quay hiện tại của ảnh
    const lyricsContainerRef = useRef(null);

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

    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleProgressClick = (e) => {
        const progressBar = progressBarRef.current;
        const audio = audioRef.current;

        if (!progressBar || !audio) return;

        const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
        const newTime = clickPosition * duration;

        if (Number.isFinite(newTime)) {
            audio.currentTime = newTime;
            setProgress((newTime / duration) * 100);
            scrollToLyrics(newTime);
        }
    };

    const scrollToLyrics = (currentTime) => {
        const lyricsContainer = lyricsContainerRef.current;
        if (lyricsContainer) {
            const lineHeight = 24; // Adjust based on your CSS line-height
            const scrollOffset = 50; // Offset for better centering
            const lineIndex = Math.floor(currentTime / 7); // Example calculation, adjust as needed

            lyricsContainer.scrollTo({
                top: lineHeight * lineIndex - scrollOffset,
                behavior: 'smooth',
            });
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleAudioError = (error) => {
        console.error('Audio playback error:', error);
    };

    const handleAudioEnded = () => {
        setIsPlaying(false);
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
            audio.addEventListener('ended', handleAudioEnded);
        }

        return () => {
            if (audio) {
                audio.removeEventListener('timeupdate', updateProgress);
                audio.removeEventListener('ended', handleAudioEnded);
            }
        };
    }, []);

    useEffect(() => {
        if (imgRef.current) {
            if (isPlaying) {
                imgRef.current.classList.add('spin');
                const imgRotation = imgRef.current.style.transform;
                imgRotationRef.current = imgRotation ? parseInt(imgRotation.replace(/[^\d.-]/g, '')) : 0;
            } else {
                imgRef.current.classList.remove('spin');
            }
        }
    }, [isPlaying]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener('timeupdate', () => {
                const current = audioRef.current.currentTime;
                scrollToLyrics(current);
            });
        }
    }, []);

    return (
        <div className='song-lyrics-background'>
            <div className="half-half-square">
                <div className="inner-rectangle">
                    <div className="image-column">
                        <img
                            src="https://res.cloudinary.com/dxvrdtaky/image/upload/v1720200076/your_folder_name/y7lnffpxaf4m60hrm0b7.jpg"
                            alt="music"
                            ref={imgRef}
                            style={{ transform: `rotate(${imgRotationRef.current}deg)` }}
                        />
                        <p className='name-music'>Tên bài hát</p>
                        <p className='author-music'>Tác giả</p>
                    </div>
                    <div className="text-column">
                        <div className='lyrics-container' ref={lyricsContainerRef}>
                            <p className='lyrics'>
                                Nếu lúc đó em không buông tay<br />
                                Nếu lúc đó anh không lung lay<br />
                                Nếu lúc đó ta không trốn chạy<br />
                                Không giấu những thứ không muốn nhau thấy<br />
                                Nếu lúc đó mình đặt lên nhau<br />
                                Nụ hôn đắm đuối như thể lần đầu<br />
                                Nếu lúc đó mình đừng giả vờ<br />
                                Nếu lúc đó mình đừng giả vờ<br />
                                Vờ như mọi thứ không làm mình đau<br />
                                Nếu lúc đó thế giới<br />
                                Đừng quá ác độc với hai đứa nhóc<br />
                                Không thể cho phép mình yếu lòng<br />
                                Vì quá quen việc phải gai góc<br />
                                Những vết cắt chưa lành được<br />
                                Rồi lại gồng mình, chẳng còn biết khóc<br />
                                Và nếu em không, và nếu em không<br />
                                Và nếu lúc đó em không ám ảnh<br />
                                Một ngày anh sẽ biến mất<br />
                                Và nếu lúc đó anh cho em thấy<br />
                                Em luôn là người duy nhất<br />
                                Và nếu lúc đó mà em tin anh<br />
                                Mà anh tin em<br />
                                Mà ta tin nhau<br />
                                Thì liệu mình sẽ còn ở bên nhau<br />
                                Liệu mình sẽ còn ở bên nhau<br />
                                Cười mỗi khi nghe thấy tên nhau<br />
                                Liệu mình đang còn đắm say đắm say<br />
                                Như ngày đầu tiên mình đến bên nhau<br />
                                Ngày em đã thức hàng đêm<br />
                                Để nguyện cầu<br />
                                Ngày em tự hứa dù có thế nào<br />
                                Em sẽ vẫn yêu anh<br />
                                Liệu mình còn yêu<br />
                                Nếu lúc đó ta không buông tay<br />
                                Yeah yeah<br />
                                Nếu lúc đó ta không trốn chạy oh<br />
                                Và nếu lúc đó mình đừng như thế yeah<br />
                                Có lẽ, có lẽ<br />
                                Nhưng có lẽ<br />
                                Mọi thứ đã phải diễn ra như vậy<br />
                                Để em thấy em phải yêu mình<br />
                                Đã đến lúc em phải nhận ra<br />
                                Em đã luôn tự lừa dối con tim<br />
                                Vì nếu anh muốn anh đã tìm cách<br />
                                Nhưng anh chẳng hề gì<br />
                                Em ghét cái cách em luôn bào chữa<br />
                                Cho mọi lần anh vô tâm<br />
                                Em ghét cái cách<br />
                                Em nói em vẫn ok<br />
                                Khi em tủi hờn<br />
                                Ghét dư luận tàn nhẫn<br />
                                Ghét nghĩ đến anh nhiều quá mức<br />
                                Ghét việc phải giữ im lặng<br />
                                Tỏ ra mình không vướng bận<br />
                                Nhưng em cũng không ít lần<br />
                                Gây ra những lỗi lầm<br />
                                Thứ lỗi cho em<br />
                                Hứa với anh những điều<br />
                                Giờ chỉ là ảo mộng<br />
                                Thứ lỗi cho em<br />
                                Bước đi<br />
                                Vì em phải cần tự chữa lành mình<br />
                                Thứ lỗi cho em<br />
                                Cho phép mình<br />
                                Nhận tình yêu mới đến rồi<br />
                                Thứ lỗi cho em<br />
                                Tập chịu trách nhiệm<br />
                                Cho cảm xúc của mình<br />
                                Thứ lỗi cho em<br />
                                Trân trọng những gì em đang có<br />
                                Thứ lỗi cho em<br />
                                Em mong anh cũng vậy<br />
                                Để một ngày<br />
                                Mình sẽ lại đến bên nhau<br />
                                Một ngày mình sẽ lại đến bên nhau<br />
                                Cười khi bắt gặp ánh mắt nhau<br />
                                Dù mình sẽ không còn đắm say đắm say<br />
                                Như ngày đầu tiên mình đến bên nhau<br />
                                Nhưng mình có thể<br />
                                Làm quen lại từ đầu<br />
                                Chẳng còn một nỗi sợ hãi<br />
                                Hay nghi ngờ nào nữa đâu<br />
                                Anh thấy sao<br />
                                Anh thấy sao<br />
                                Anh nghĩ sao<br />
                                Anh nghĩ sao
                            </p>

                        </div>
                    </div>
                </div>
                <div className="music-lyrics-progress-container">
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
                <audio
                    ref={audioRef}
                    src="https://res.cloudinary.com/dxvrdtaky/video/upload/v1720805301/NeuLucDo-tlinh2pillz-8783613_am9fry.mp3"
                    onLoadedMetadata={handleLoadedMetadata}
                    onError={handleAudioError}
                />
                <div className="icons-container">
                    <IoIosAlbums size={20} color='#000000' />
                    <FaRegHeart size={20} color='#000000' />
                    <IoShareSocialOutline size={20} color='#000000' />
                    <div className="center-icons">
                        <IoShuffle size={30} color='#000000' />
                        <IoPlayBack size={30} color='#000000' />
                        <IoPlaySkipBack size={30} color='#000000' />
                        <div onClick={handlePlayMusic}>
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
                            className="volume-slider"
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
