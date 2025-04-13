import { Check } from 'lucide-react';
import React from 'react';

const PricingCard = ({price}) => {

    const {name ,description,features,duration,mostPopular} = price;
   
    return (
        <div className='border flex flex-col bg-amber-200 rounded-2xl p-4'>
            {/* header */}
            <div className='mb-6'>
               { mostPopular && <p className='bg-amber-400 p-2 w-max font-bold text-green-500 rounded-2xl mb-2'>Most popular</p>}
                <h1 className='text-4xl font-bold py-2'>{name}</h1>
               <div className='flex items-center text-gray-500'>
               <h3 className='text-2xl'>{price.price}</h3>
               <p className='text-2xl'>/{duration}</p>
               </div>
            </div>
            <div className='mb-6'>
                <p className='bg-amber-400 rounded-2xl p-2 font-semibold'>{description}</p>
            </div>
            <div className='flex-1'>
            {
              features.map((feature,index)=><p className='flex gap-1' key={index}><Check></Check>{feature}</p>)
            }
            </div>
            <button className='btn w-full mt-4 font-bold text-xl'>Subcribe</button>
        </div>
    );
};

export default PricingCard;