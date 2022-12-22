import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryProduct.css'
const CategoryProduct = ({property}) => {
   const {url,name,price,sqft,locality_name,Bedrooms,bathrooms,Description,_id} = property;
    return (
        <div>
        <Link to={`/propertiesDetails/${_id}`}>
        <div className="card card-style bg-base-100 shadow-xl">
          
          <figure><img style={{height:'318px'}} className='w-full custom-style ' src={url} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title text-3xl ">{name}</h2>
            <b className='text-2xl font-bold'>$: {price}</b>
           <div className="grid lg:grid-cols-2 md:grid-cols-2 align-middle gap-1 items-center sm:grid-cols-1">
            <p className='text-slate-500'><i class="fa-solid bg-slate-300 rounded text-slate-500  fa-vector-square"></i> {sqft} sqft</p>
            <p className='text-slate-500'><i class="fa-solid bg-slate-300 rounded text-slate-500 fa-location-dot"></i> {locality_name}</p>
            <p className='text-slate-500'><i class="fa-solid bg-slate-300 rounded text-slate-500  fa-bed"></i> {Bedrooms}</p>
            <p className='text-slate-500'><i class="fa-solid bg-slate-300 rounded text-slate-500  fa-bath"></i> {bathrooms}</p>
           </div>
            <p className='text-lg text-slate-700'>{Description.slice(0,100) + '. . .'}</p>
          </div>
        </div>
        </Link>
        </div>
    );
};

export default CategoryProduct;