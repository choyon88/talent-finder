import React from 'react';
import Navbar from '../Navbar/Navbar';

import JobCatagory from '../JobCatagory/JobCatagory';
import Footer from '../Footer/Footer';


const Header = () => {
    
    return (
        <div className='bg-header_bg h-screen'>
         
            <JobCatagory></JobCatagory>
            
       </div>
    );
};

export default Header;