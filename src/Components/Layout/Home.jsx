import React, { createContext } from 'react';
import Header from '../Header.jsx/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import JobCatagory from '../JobCatagory/JobCatagory';
import Footer from '../Footer/Footer';

export const DataContext = createContext();
const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <DataContext.Provider value={data}>
                
                        <Navbar></Navbar>
                        <Outlet></Outlet>
                    
            </DataContext.Provider>


        </div>
    );
};

export default Home;