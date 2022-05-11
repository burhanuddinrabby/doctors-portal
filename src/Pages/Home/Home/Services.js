import React from 'react';
import Service from './Service';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            img: fluoride,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus minus hic dolore expedita."
        }
        ,
        {
            _id: 2,
            name: "Cavity Filling",
            img: cavity,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus minus hic dolore expedita."
        }
        ,
        {
            _id: 3,
            name: "Teeth Whitening",
            img: whitening,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus minus hic dolore expedita."
        }

    ]
    return (
        <div className='my-20'>
            <div className='text-center'>
                <h3 className='text-primary font-bold uppercase text-xl'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto'>
                {

                    services.map(service => <Service key={service._id} data={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;