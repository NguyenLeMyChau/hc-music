import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const MusicContext = createContext();

export const useMusic = () => useContext(MusicContext);

export const MusicProvider = ({ children }) => {

    const [currentMusic, setCurrentMusic] = useState(null);
    const [musicList, setMusicList] = useState([]);
    const [selectedItemId, setSelectedItemId] = useState(null);

    const fetchMusicList = async () => {
        try {
            const response = await axios.get('http://localhost:4000/music/getListMusic');
            const musicData = response.data;
            setMusicList(response.data);

            // Đặt currentMusic và selectedItemId là bài hát đầu tiên trong danh sách
            setCurrentMusic(musicData[0]);
            setSelectedItemId(musicData[0]._id);
            console.log('musicData[0]', musicData[0]);


        } catch (error) {
            console.error('Error fetching music list:', error);
        }
    };

    const nextMusic = () => {
        if (musicList.length > 0 && currentMusic) {
            const currentIndex = musicList.findIndex(music => music._id === currentMusic._id);
            const nextIndex = (currentIndex + 1) % musicList.length;
            setCurrentMusic(musicList[nextIndex]);
            setSelectedItemId(musicList[nextIndex]._id);
        }
    };

    const prevMusic = () => {
        if (musicList.length > 0 && currentMusic) {
            const currentIndex = musicList.findIndex(music => music._id === currentMusic._id);
            const prevIndex = (currentIndex - 1 + musicList.length) % musicList.length;
            setCurrentMusic(musicList[prevIndex]);
            setSelectedItemId(musicList[prevIndex]._id);
        }
    };

    useEffect(() => {
        fetchMusicList();
    }, []);

    return (
        <MusicContext.Provider value={{ currentMusic, setCurrentMusic, musicList, setMusicList, prevMusic, nextMusic, selectedItemId, setSelectedItemId }}>
            {children}
        </MusicContext.Provider>
    );
};
