import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import CoffeeCard from '../components/CoffeeCard';
import Follow from '../components/Follow';
import App from '../App';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Header></Header>
            <App></App>
            <Follow></Follow>
           

        </div>
    );
};

export default Home;