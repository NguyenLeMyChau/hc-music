import React, { useRef, useState, useEffect } from 'react';
import './audio.css';

const AudioPlayer = ({ src }) => {
    const audioRef = useRef(null);
    const progressBarRef = useRef(null);
    const [progress, setProgress] = useState(0); // Thêm state để theo dõi tiến độ

    const handleProgressClick = (e) => {
        const progressBar = progressBarRef.current;
        const audio = audioRef.current;
        const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
        audio.currentTime = clickPosition * audio.duration;
    };

    useEffect(() => {
        const audio = audioRef.current;
        const updateProgress = () => {
            const { currentTime, duration } = audio;
            setProgress((currentTime / duration) * 100);
        };

        audio.addEventListener('timeupdate', updateProgress);

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
        };
    }, []);

    return (
        <div>
            <div ref={progressBarRef} onClick={handleProgressClick} style={{
                width: '100%',
                height: '20px',
                backgroundColor: '#ddd',
                cursor: 'pointer',
                position: 'relative',
                borderRadius: '10px'
            }}>
                <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: `${progress}%`, // Cập nhật chiều rộng dựa trên tiến độ
                    background: 'linear-gradient(to right, #B5179E, #7209B7)', // Áp dụng màu gradient
                    zIndex: 2,
                    borderRadius: '10px'
                }}>
                    

                </div>
                <audio ref={audioRef} src={src} controls />
            </div>
        </div>

    );
};

export default AudioPlayer;