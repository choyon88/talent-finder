import React, { createContext, useEffect, useState } from 'react';
import { Link, json, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import title from '../../assets/Icons/Frame-1.png'
import dollar from '../../assets/Icons/Frame.png'
import locations from '../../assets/Icons/Location Icon.png'
import mobile from '../../assets/Icons/Frame-2.png'
import emails from '../../assets/Icons/Frame-3.png'


const SingleJobDetails = () => {
    const { _id } = useParams();
    const [selectJob, setSelectJob] = useState({});
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(`/data.json`)
            const data = await res.json()
            const selectedJob = data.find((job) => job._id === _id);
            setSelectJob(selectedJob);
            localStorage.setItem("selectedJobId", _id);
        }
        loadData();
    }, [_id]);
  
    const { job_description, job_responsibility, educational_requirement, experiences
        , job_title, location, sellary_range, phone, email } = selectJob;

    const handleAppliedJobBtn = () => {
        const selectedJobId = selectJob._id;
        localStorage.setItem(`selectedJob_${selectedJobId}`, JSON.stringify(selectJob));
}

    return (
        <>
            <div className='bg-header_bg py-14 '><h1 className=' text-4xl text-center font-bold '>Job Details</h1></div>
            <div className='flex w-full max-w-6xl mx-auto justify-between gap-10 '>
                <div className=''>

                    <p className='my-5'><span className='font-bold text-xl'>Job Description:</span> {job_description}</p>
                    <p><span className='font-bold text-xl'>Job Responsibility: </span>{job_responsibility}</p>

                    <p className='my-5'><span className='font-bold text-xl'>Educational Requirements:</span> {educational_requirement}</p>
                    <p><span className='font-bold text-xl'>Experiences: </span> <br /> <br />
                        {experiences} years in this Field.
                    </p>
                </div>
                <div>
                    <div className="card w-96 bg-header_bg shadow-md rounded-none my-8">
                        <div className="card-body relative">
                            <h2 className="card-title">Job Details</h2>
                            <hr />
                            <p className='font-bold flex '><span className='me-2'> <img src={dollar} alt="" />
                            </span> Salary: <span className='font-normal mx-2'>{sellary_range} (per year)</span></p>
                            <div className='flex'>
                                <span className='me-2'>
                                    <img src={title} alt="" />
                                </span>
                                <p><span className='font-bold me-2'>Job Tittle: </span>  {job_title}</p>
                            </div>
                            <p className='card-title my-4'>Contact Information</p>
                            <hr />

                            <div className='flex '>
                                <img className='me-2' src={mobile} alt="" />
                                <p><span className='font-bold me-2'>Mobile:</span>{phone}</p>
                            </div>
                            <div className='flex '>
                                <img className='me-2' src={emails} alt="" />
                                <p><span className='font-bold me-2'>Email:</span>{email}</p>
                            </div>
                            <div className='flex mb-10'>
                                <img className='me-2' src={locations} alt="" />
                                <p><span className='font-bold me-2'>Address:</span>{location}</p>
                            </div>
                            <div className='absolute bottom-0 w-full left-0'>
                                <Link to='/appliedJob'>
                                <button onClick={()=>handleAppliedJobBtn()} className='btn bg-btn_bg border-0 w-full'>Apply Now</button>
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default SingleJobDetails;