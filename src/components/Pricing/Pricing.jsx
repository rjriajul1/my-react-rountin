import React, { use } from 'react';
import PricingCard from './PricingCard';

const Pricing = ({promiseData}) => {
    const pricies = use(promiseData)

    return (
        <div>
            <h1 className='text-5xl py-6 font-bold'>Pricing MemberShip</h1>
            <div className='grid md:grid-cols-2 p-4 gap-6'>
                {
                    pricies.map(price=><PricingCard key={price.id} price={price}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default Pricing;