import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dollar from '../../assets/Icons/Frame.png'
import locations from '../../assets/Icons/Location Icon.png'
const SingleFeaturedJob = ({ singleData }) => {
    const navigate = useNavigate();
    const handleViewBtn = (_id) => {
        navigate(`/data/${_id}`);
        localStorage.setItem("selectedJobId", JSON.stringify(_id));
    }
    const { _id, company_logo, job_title, company_name, location, sellary_range, job_time } = singleData


    return (
        <div className='bg-header_bg rounded-md border p-6 border-dark3'>
            <img className='w-[180px] h-[100px]' src={company_logo} alt="" />
            <p className='mt-3 font-bold'>{job_title}</p>
            <small className=''>{company_name}</small> <br /> <br />
            <div className=''>
                <span className='me-10 border p-1 text-card_bg rounded'>{job_time[0].remote}</span>
                <span className='border p-1 text-card_bg rounded'>{job_time[0].full_time}</span></div>
            <div className='my-4 md:flex '>
                <span className='flex md:mr-8'><img src={locations} alt="" />{location}</span>
                <span className='flex'> <img src={dollar} alt="" />Salary: {sellary_range}</span>
            </div>
            <div>
                <button onClick={() => handleViewBtn(_id)} className='btn bg-btn_bg border-0'>View Details</button>
            </div>
        </div>
    );
};

export default SingleFeaturedJob;