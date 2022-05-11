import React from 'react';

const Service = ({ data }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={data.img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{data.name}</h2>
                <p>{data.description}</p>
            </div>
        </div>
    );
};

export default Service;