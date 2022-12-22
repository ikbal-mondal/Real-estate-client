import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BannerSlider from './BannerSlider/BannerSlider';
import CategoryProduct from './category/CategoryProduct';
import ContactUs from './ContactUs/ContactUs';

const Home = () => {

    const [data ,setData] = useState()
   
    useEffect(()=>{
         fetch('https://real-estate-server-phi.vercel.app/properties')
         .then(res => res.json())
         .then(data => setData(data))
    },[])


    return (
       <div className="">
        <BannerSlider></BannerSlider>
         <div className="mx-6">
          
         <div className='grid lg:grid-cols-3 gap-8 mb-16 mt-8  container mx-auto'>
        

        {
         data?.map(property => <CategoryProduct
          key={property._id}
          property={property}
          ></CategoryProduct>)  
        }
    </div>
         </div>
     <ContactUs></ContactUs>
       </div>
    );
};

export default Home;