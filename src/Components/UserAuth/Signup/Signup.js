import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='grid lg:grid-cols-2 p-4 m-6'>
        
        <form  className=
        'w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md border-2 '>
           <h2 className='text-center text-2xl font-medium'> Please Sign Up </h2>
                 <div className="form-control w-full max-w-xs">
                     <label className="label"> <span className="label-text">Name</span></label>
                     <input type="text"
                    
                         className="input input-bordered w-full max-w-xs" />
                   
                 </div>

                 <div className="form-control w-full max-w-xs">
                     <label className="label"> <span className="label-text">Email</span></label>
                     <input type="email"
                     
                         className="input input-bordered w-full max-w-xs" />
                   
                 </div>
                 <div className="form-control w-full max-w-xs">
                     <label className="label"> <span className="label-text">Password</span></label>
                     <input type="password"
                          
                         className="input input-bordered w-full max-w-xs" />
                      
                     <label className="label"> 
                     <span className="label-text">Forget Password?</span></label>
                   

                 </div>
               
                 <input className='btn bg-gradient-to-r from-lime-500 to-teal-300 border-0 w-full ' value="Sign Up" type="submit" />
                 <p className=" text-base mt-1 font-light text-start text-gray-600">Already have an account <Link to='/login' className="font-medium text-primary dark:text-gray-200 hover:underline"> Please Login Now </Link></p>
                 <div className="flex items-center justify-between mt-2">
                

 </div>

             </form>
             <div className="">
             <img src="https://cdni.iconscout.com/illustration/premium/thumb/user-login-4268415-3551762.png" alt="" />
         </div>
     </div>
    );
};

export default Signup;