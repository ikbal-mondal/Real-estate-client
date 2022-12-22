import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const DetailsShow = () => {
    const data = useLoaderData()
    const 
    {  name,
        url,
        price,
        sqft,
        locality_name,
        Bedrooms,
        bathrooms,
        Garage,
        Built,
        Kitchen,
        Description
    } = data
    return (
        <div>
           <div className=" mx-auto  text-gray-900">
	<div className="flex flex-col max-w-8xl  mx-auto overflow-hidden rounded">
		<img style={{height:'500px'}} src={url} alt="" className="w-full  bg-gray-100" />
		<div className="mx-auto">
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-5xl   sm:px-10 sm:mx-12 lg:rounded-md bg-gray-100">
        <div className="flex justify-between items-center">
        <span className='bg-green-300 px-2 rounded  text-green-600'>sale</span>
        <Link to='/' className='bg-red-300 rounded text-red-600 px-3 py-1 font-bold'><i class="fa-solid fa-left-long"></i> Back</Link>
        </div>
			<div className="">
            
				<h2 className="inline-block space-y-2 text-2xl font-semibold sm:text-4xl">{name}</h2>
				<p className='my-2 text-xl text-slate-600'><i class="fa-solid fa-location-dot"></i> {locality_name}</p>
                <h2 className='text-4xl my-2 font-bold text-sky-600'>$: {price}</h2>
                <div className="grid lg:grid-cols-3 my-4 xs:grid-cols-2 md:grid-cols-3 align-middle gap-4 items-center sm:grid-cols-2">
            <p className='text-slate-600'><i class="fa-solid bg-slate-300 px-2 py-1 rounded text-slate-500 fa-vector-square"></i> {sqft} sqft</p>
            <p className='text-slate-600'><i class="fa-solid bg-slate-300 px-2 py-1 rounded text-slate-500 fa-location-dot"></i> {locality_name}</p>
            <p className='text-slate-600'><i class="fa-solid bg-slate-300 px-2 py-1 rounded text-slate-500 fa-bed"></i> {Bedrooms}</p>
            <p className='text-slate-600'><i class="fa-solid bg-slate-300 px-2 py-1 rounded text-slate-500 fa-bath"></i> {bathrooms}</p>
            <p className='text-slate-600'><i class="fa-solid bg-slate-300 px-2 py-1 rounded text-slate-500 fa-car"></i> {Garage}</p>
            <p className='text-slate-600'><i class="fa-solid bg-slate-300 px-2 py-1 rounded text-slate-500 fa-kitchen-set"> </i> {Kitchen} Kitchen </p>
            <p className='text-slate-600'><i class="fa-solid bg-slate-300 px-2 py-1 rounded text-slate-500  fa-building-circle-check"> </i> {Built} Built </p>
           </div>
           <div className="my-4 mt-8">
            <span className='text-lg font-semibold my-1'>Description:</span>
            <p>
                {Description}
            </p>
           </div>
			</div>
			
		</div>
        </div>
	</div>
</div>
        </div>
    );
};

export default DetailsShow;