import React, { useRef } from 'react';
import './DisocverGenre.css';
import img1 from '../../images/tlinh-ai-album.jpg';
import img2 from '../../images/album2.jpg';
import img3 from '../../images/neulucdo.jfif';

function DisocverGenre() {
    const genreListRef = useRef(null);

    const genres = [
        { id: 1, name: 'Romantic', image: img1, songCount: 120 },
        { id: 2, name: 'Jazz', image: img2 , songCount: 90 },
        { id: 3, name: 'Pop', image: img3 , songCount: 150 },
        { id: 4, name: 'Jazz', image: img2 , songCount: 90 },
        { id: 5, name: 'Pop', image: img3 , songCount: 150 },
        { id: 6, name: 'Jazz', image: img2 , songCount: 90 },
        { id: 7, name: 'Pop', image: img3 , songCount: 150 },
        { id: 8, name: 'Romantic', image: img1, songCount: 120 }
    ];

    const scroll = (scrollOffset) => {
        genreListRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    };

    return (
        <div className="genre-container">
            <button className="scroll-button left" onClick={() => scroll(-250)}>❮</button>
            <div className="genre-list-wrapper" ref={genreListRef}>
                <div className="genre-list">
                    {genres.map((genre) => (
                        <div key={genre.id} className="genre-item">
                            <img src={genre.image} alt={genre.name} />
                            <div className="genre-info">
                                <h3>{genre.name}</h3>
                                <p>{genre.songCount} Tracks</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="scroll-button right" onClick={() => scroll(250)}>❯</button>
        </div>
    );
}

export default DisocverGenre;
