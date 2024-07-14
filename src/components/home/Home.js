import React from 'react';
import './Home.css';
import HomeItem from './HomeItem';
import { SlMusicTone, SlEarphones } from "react-icons/sl";
import GenreList from './DisocverGenre';
import TopMusic from './TopMusic';
import Header from '../../screens/header/header';

function Home() {

    return (
        <div className='home-body'>
            <Header />

            <HomeItem Icon={SlMusicTone} label={"Discover Genre"} />
            <GenreList />
            <HomeItem Icon={SlEarphones} label={"Top Music"} />
            <TopMusic />
        </div>

    );
}

export default Home;