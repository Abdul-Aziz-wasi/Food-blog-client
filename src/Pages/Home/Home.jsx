import React from 'react';
import Hero from '../../Components/Hero';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div className='container mx-auto'>
           <div className='flex flex-col justify-center items-center py-20 w-full'>
            <Hero></Hero>
            <Category></Category>
           </div>
        </div>
    );
};

export default Home;