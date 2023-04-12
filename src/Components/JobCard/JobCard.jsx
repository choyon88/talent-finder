import React from 'react';
import dollar from '../../assets/Icons/Frame.png'
import locations from '../../assets/Icons/Location Icon.png'
import { Link, useNavigate } from 'react-router-dom';
const JobCard = ({ job }) => {
    
    const { _id, company_name, company_logo, job_title, sellary_range, location, job_time } = job;
    const navigate = useNavigate();
    const handleViewBtn = (_id) => {
        navigate(`/data/${_id}`);
        
    }
    return (
        <>
            <div className="card w-[800px] bg-base-100 border  my-10">
                <div className="card-body ">
                    <div className='flex justify-between items-center'>
                    <div className='flex'>
                        <div className='bg-header_bg p-4 w-[130px] h-[130px] flex justify-center items-center'>
                            <img className='w-48 h-20' src={company_logo} alt="" />
                        </div>
                        <div className='mx-4'>
                            <p className='bold text-2xl font-manrope'>{job_title}</p>
                                <p>{company_name}</p>
                                <div className='my-2'>
                                    <span className='me-10 border p-1 text-card_bg rounded'>{job_time[0].remote}</span>
                                    <span className='border p-1 text-card_bg rounded'>{job_time[0].full_time}</span></div>
                            <div className='my-4 flex'>
                                <span className='flex mr-8'><img src={locations} alt="" />
                                    {location}</span> <span className='flex'> <img src={dollar} alt="" />
                                    Salary: {sellary_range}</span>
                            </div>
                        </div>
                    </div>
                        <div>
            
                            <button onClick={() => handleViewBtn(_id)} className='btn bg-btn_bg border-0'>View Details</button>
                           
                    </div>
                 </div>
                    
                </div>
            </div>
        </>
    );
};

export default JobCard;