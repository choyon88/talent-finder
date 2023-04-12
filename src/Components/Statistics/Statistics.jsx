import React from 'react';
import Footer from '../Footer/Footer';
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
const data = [
    {
        name: "Assignment 1",
        ObtainMarks: 60,
        TotalMarks: 60,
    },
    {
        name: "Assignment 2",
        ObtainMarks: 60,
        TotalMarks: 60,
    },
    {
        name: "Assignment 3",
        ObtainMarks: 60,
        TotalMarks: 60,
    },
    {
        name: "Assignment 4",
        ObtainMarks: 60,
        TotalMarks: 60,
    },
    {
        name: "Assignment 5",
        ObtainMarks: 52,
        TotalMarks: 60,
    },
    {
        name: "Assignment 6",
        ObtainMarks: 52,
        TotalMarks: 60,
    },
    {
        name: "Assignment 7",
        ObtainMarks: 60,
        TotalMarks: 60,
    },
    {
        name: "Assignment 8",
        ObtainMarks: 60,
        TotalMarks: 60,
    }
];

const Statistics = () => {

    return (
        <>
            <h1 className='text-4xl text-center mt-5 font-bold'>Marks Analytics</h1>
            <p className='text-center'> Using ComposedChart</p>
            <div className='flex justify-center items-center h-screen'>
                <div className=''>
                <ComposedChart
                width={1000}
                height={400}
                data={data}
                margin={{
                    top: 0,
                    right: 20,
                    bottom: 20,
                    left: 20
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis ticks={[0, 10, 20, 30, 40, 50, 60]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="ObtainMarks" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="ObtainMarks" stroke="#ff7300" />
            </ComposedChart>
            </div>
            </div>
            <Footer></Footer>
        </>
    );

}

export default Statistics;