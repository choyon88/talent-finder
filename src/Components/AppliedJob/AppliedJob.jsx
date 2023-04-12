import React, { useContext } from 'react';
import vector1 from '../../assets/All Images/Vector-1.png'
import vector2 from '../../assets/All Images/Vector.png'

import JobCard from '../JobCard/JobCard';
import Footer from '../Footer/Footer';

const AppliedJob = () => {
    const jobId = localStorage.getItem("selectedJobId");

    const selectedJob = JSON.parse(localStorage.getItem(`selectedJob_${jobId}`));
    const jobKeys = Object.keys(localStorage).filter(key => key.startsWith("selectedJob_"));
    const jobs = jobKeys.map(key => JSON.parse(localStorage.getItem(key)));



    return (
        <>

            <div className='bg-header_bg '>
                <div className='text-4xl font-bold absolute left-[600px] top-36 '>
                    <h1 className=''>Applied Job</h1>
                </div>
                <div>
                    <img src={vector2} alt="" />
                </div>
                <div className=' absolute top-0 right-0'>
                    <img className='' src={vector1} alt="" />
                </div>
            </div>
            <div className=' w-full max-w-6xl mx-auto flex justify-center'>
                <div className=''>
                    {
                        jobs.map((job, index) => <JobCard
                            key={index}
                            job={job}
                        >

                        </JobCard>)
                    }
                </div>


            </div>

            <Footer></Footer>
        </>
    );
};

export default AppliedJob;