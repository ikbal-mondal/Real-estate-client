import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BannerSlider from './BannerSlider/BannerSlider';
import CategoryProduct from './category/CategoryProduct';

const Home = () => {

    const [data ,setData] = useState()
   
    useEffect(()=>{
         fetch('Data/realestate-category.json')
         .then(res => res.json())
         .then(data => setData(data))
    },[])


    return (
       <div className="">
        <BannerSlider></BannerSlider>
         <div className='grid lg:grid-cols-3 gap-8 my-16 container mx-auto'>
        

        {
         data?.map(property => <CategoryProduct
          key={property.category}
          property={property}
          ></CategoryProduct>)  
        }
    </div>
       </div>
    );
};

export default Home;