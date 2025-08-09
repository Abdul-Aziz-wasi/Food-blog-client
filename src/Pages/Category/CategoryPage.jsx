import React from 'react';
import { useParams } from 'react-router';

const CategoryPage = () => {
    const {category}=useParams()
    return (
        <div className='px-6 lg:px-12 py-20'>
        <h1 className='text-center text-3xl py-10 font-semibold sm:text-6xl sm:leading-relaxed capitalize'>{category}</h1>
        </div>
    );
};

export default CategoryPage;