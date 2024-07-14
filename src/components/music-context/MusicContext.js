import React, { createContext, useContext, useState } from 'react';

const MusicContext = createContext();

export const useMusic = () => useContext(MusicContext);

export const MusicProvider = ({ children }) => {

    const [currentMusic, setCurrentMusic] = useState(null);

    return (
        <MusicContext.Provider value={{ currentMusic, setCurrentMusic }}>
            {children}
        </MusicContext.Provider>
    );
};
