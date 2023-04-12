import React, { useContext, useState } from 'react';
import person from '../../assets/All Images/P3OLGJ1 copy 1.png'
import { DataContext } from '../Layout/Home';
import SingleJobCard from '../SingleJobCard/SingleJobCard';
import SingleFeaturedJob from '../SingleFeaturedJob/SingleFeaturedJob';
import Footer from '../Footer/Footer';
const JobCatagory = () => {
    const receiveData = useContext(DataContext);
    const [showAllJobs, setShowAllJobs] = useState(false);

    const newData = showAllJobs ? receiveData : receiveData.slice(0, 4);
    const handleShowAllJobsClick = () => {
        setShowAllJobs(true);
    }

    
    return (
        <>
            <section className='w-full max-w-6xl mx-auto md:flex  px-8 md:items-center'>
                <div className='pt-10'> 
                    <h1 className='font-manrope font-extrabold text-5xl md:text-7xl text-black'>One Step <br /> Closer To Your <span className='text-btn_bg'>Dream Job</span></h1>
                    <p className='text-dark3 my-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

                    <a className="btn bg-btn_bg border-0">Get Started</a>
                </div>
                <div className='mt-20'>
                    <img src={person} alt="" />
                </div>
            </section>
            <section className='w-full max-w-6xl mx-auto mt-48'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold font-manrope'>Job Category List</h1>
                    <p className='text-dark3 my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                    <div className="grid md:grid-cols-4 gap-4 px-5">
                        {
                            newData.map(singleData => <SingleJobCard
                                key={singleData._id}
                                singleData={singleData}
                            ></SingleJobCard>)
                        }

                    </div>
                </div>
            </section>
            <section className='w-full max-w-6xl mx-auto my-32'>
                <div className='text-center'>
                <h1 className='text-3xl font-bold font-manrope'>Featured Jobs</h1>
                <p className='text-dark3 my-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 px-5">
                        
                {
                            newData.map(singleData => <SingleFeaturedJob
                                key={singleData._id}
                                singleData={singleData}
                            ></SingleFeaturedJob>)
                        }    
                    

                </div>
                {!showAllJobs && <div className='text-center my-5'>
                    <button className='btn bg-btn_bg border-0' onClick={handleShowAllJobsClick}>See All Jobs</button>
                </div>}
            </section>
            <Footer></Footer>
        </>
    );
};

export default JobCatagory;