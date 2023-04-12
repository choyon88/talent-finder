import React from 'react';

const SingleJobCard = ({ singleData }) => {
    const { icon, job_title, job_amount } = singleData;
    // console.log(singleData);
    return (
        <>
            <div className='bg-header_bg rounded-md'>
                <div className='p-6 text-left'>
                    <img src={icon} alt="" />
                    <p className='my-3 font-bold text-md'>{job_title}</p>
                    <p className='text-dark3'>{job_amount} Jobs Available</p>
                </div>

            </div>
        </>
    );
};

export default SingleJobCard;