import React from 'react';
import Hero from '../../Components/Hero';

const Home = () => {
    return (
        <div className='container mx-auto'>
           <div className='flex flex-col justify-center items-center py-20 w-full'>
            <Hero></Hero>
           </div>
        </div>
    );
};

export default Home;