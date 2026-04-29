import React from 'react';
import bannerImg from '../assets/banner.png';
const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 max-w-7xl mx-auto px-6">
            <div>
                <div>New: AI-Powered Tools Available</div>
            <h1 className="text-4xl font-bold">Supercharge YourDigital Workflow</h1>
            <h1 className="py-6 ">Access premium AI tools, design assets, templates, and <br /> productivity
              software—all in one place. Start creating faster today.

              Explore Products
            </h1>
            <button className="btn btn-primary rounded-btn m-2">Explore Products</button>
             <button className="btn btn-primary rounded-btn">Watch Demo</button>
             </div>
             <div>
                <img src={bannerImg} alt="Banner Image" className="w-full h-auto" />
             </div>
        </div>
        
    );
};

export default Banner;