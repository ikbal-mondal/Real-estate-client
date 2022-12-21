import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BannerSlider from './BannerSlider/BannerSlider';
import CategoryProduct from './category/CategoryProduct';
import ContactUs from './ContactUs/ContactUs';

const Home = () => {

    const [data ,setData] = useState()
   
    useEffect(()=>{
         fetch('http://localhost:5000/properties')
         .then(res => res.json())
         .then(data => setData(data))
    },[])


    return (
       <div className="">
        <BannerSlider></BannerSlider>
         <div className='grid lg:grid-cols-3 gap-8 my-16 container mx-auto'>
        

        {
         data?.map(property => <CategoryProduct
          key={property._id}
          property={property}
          ></CategoryProduct>)  
        }
    </div>
     <ContactUs></ContactUs>
       </div>
    );
};

export default Home;