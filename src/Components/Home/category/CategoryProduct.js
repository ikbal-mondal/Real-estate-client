import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryProduct.css'
const CategoryProduct = ({property}) => {
   const {url,name,price,sqft,locality_name,Bedrooms,bathrooms,Description,_id} = property;
    return (
        <div>
        <Link to={`/propertiesDetails/${_id}`}>
        <div className="card bg-base-100 shadow-xl">
          
          <figure><img style={{height:'318px'}} className='w-full custom-style ' src={url} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-3xl ">{name}</h2>
            <b className='text-2xl font-semibold'>$: {price}</b>
           <div className="grid lg:grid-cols-2 md:grid-cols-2 align-middle gap-1 items-center sm:grid-cols-1">
            <p className=''><i class="fa-solid fa-vector-square"></i> {sqft} sqft</p>
            <p className=''><i class="fa-solid fa-location-dot"></i> {locality_name}</p>
            <p className=''><i class="fa-solid fa-bed"></i> {Bedrooms}</p>
            <p className=''><i class="fa-solid fa-bath"></i> {bathrooms}</p>
           </div>
            <p className='text-lg'>{Description.slice(0,100) + '...'}</p>
          </div>
        </div>
        </Link>
        </div>
    );
};

export default CategoryProduct;