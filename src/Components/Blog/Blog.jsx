import React from 'react';
import vector1 from '../../assets/All Images/Vector-1.png'
import vector2 from '../../assets/All Images/Vector.png'
import Footer from '../Footer/Footer';
const Blog = () => {
    return (
        <>
            <div className='bg-header_bg '>
                <div className='text-4xl font-bold absolute left-[600px] top-36 '>
                    <h1 className=''>Blog is here</h1>
                </div>
                <div>
                    <img src={vector2} alt="" />
                </div>
                <div className=' absolute top-0 right-0'>
                    <img className='' src={vector1} alt="" />
                </div>
            </div>
            <div className='my-5 w-full max-w-6xl mx-auto '>
                <div className=''>
                    <h1 className='text-center font-bold text-4xl font-manrope my-4'>When should i use Context api ?</h1>
                    <p className='font-semibold'>Context api is a React tool for managing state component level and passing data between component without having to pass props down the component tree. </p> <br />
                    <div className=' w-full max-w-5xl mx-auto my-2'>
                        <li >Sharing data between components: If you have data that needs to be accessed by multiple components at different levels of your component tree, you can use Context to pass that data down without having to pass it through every intermediate component.</li> <br />
                        <li>Authentication: If you need to share the user's authentication state across multiple components, you can use Context to pass that state down to child components.</li> <br />
                        <li>
                            Performance optimization: If you have a large component tree with many levels, passing props down the tree can become unwieldy and affect performance. Context can be used to avoid passing props down the tree unnecessarily.
                        </li>
                    </div>
                </div>
                <div>
                    <h1 className='text-center font-bold text-4xl font-manrope my-10'>When should i use Context api ?</h1>
                    <p className='font-semibold'>In React, a custom hook is a JavaScript function that allows you to reuse logic between different components. It's a way to extract reusable code from components and share it across your application. </p> <br />
                    <p>A custom hook is just like a regular function, but with two conventions:</p>
                    <div className=' w-full max-w-5xl mx-auto my-2'>
                        <li >Its name should start with "use" to indicate that it's a hook.</li>
                        <li>It can use other hooks inside of it.</li> <br />

                    </div>
                </div>

                <div>
                    <h1 className='text-center font-bold text-4xl font-manrope my-10'>What is useRef and what is work ?</h1>
                    <p>In React, useRef is a built-in hook that provides a way to store a mutable value that persists across re-renders of a component. Unlike useState, updating the value stored in a ref doesn't trigger a re-render of the component.</p>
                    <br />
                    <p>useRef is commonly used for accessing and manipulating DOM elements or for keeping track of other values that need to persist across renders, such as a previous state or a cached value.</p>
                </div>
                <div>
                    <h1 className='text-center font-bold text-4xl font-manrope my-10'>What is useMemo and what is work ?</h1>
                    <p>In React, useMemo is a built-in hook that allows you to memoize expensive computations so that they are only recomputed when their dependencies change. It's a performance optimization that can help improve the speed of your application by reducing unnecessary re-renders.</p>
                    <p>useMemo accepts a function and an array of dependencies. The function will only be recomputed when one or more of the dependencies change. If none of the dependencies change, the memoized value from the previous render will be returned instead.</p>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Blog;