import React from 'react';
import { Link } from 'react-router';

function CategoryItem({name,href, backgroundColor,color})  {
    const style ={
        backgroundColor:backgroundColor,
        color:color,
        borderColor:color

    }
    return(
        <div>
            <Link to={href} className='rounded-full'>
            <div className='uppercase px-6 py-2 rounded-full text-center' style={style}>{name}</div>
            </Link>
        </div>
    )
}
function CategoryList()  {
    return(
        <div className='flex flex-wrap items-center justify-center gap-8'>
            <CategoryItem name="entress" href='/categories/entress' backgroundColor='#f0f5c4' color='#59871f'></CategoryItem>
            <CategoryItem name="breakfast" href='/categories/breakfast' backgroundColor='#efedfa' color='#59871f'></CategoryItem>
            <CategoryItem name="lunch" href='/categories/lunch' backgroundColor='#e5f7f3' color='#59871f'></CategoryItem>
            <CategoryItem name="salads" href='/categories/salads' backgroundColor='#e8f7fa' color='#59871f'></CategoryItem>
            <CategoryItem name="desserts" href='/categories/deserts' backgroundColor='#feefc9' color='#59871f'></CategoryItem>
            <CategoryItem name="drinks" href='/categories/drinks' backgroundColor='#ffeae3' color='#59871f'></CategoryItem>
        </div>
    )
}

const Category = () => {
    return (
        <div>
            <CategoryList></CategoryList>
        </div>
    );
};

export default Category;