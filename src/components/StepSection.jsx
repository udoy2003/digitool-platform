import React from 'react';
import userimg from '../assets/user.png';
import packageimg from '../assets/package.png';
import rocketimg from '../assets/rocket.png';

const StepSection = () => {
    return (
       <div >
         <div className=" py-16 px-4 text-center">
            <h1>Get Started In 3 Steps</h1>
              {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-base-content">
                Get Started In 3 Steps
            </h2>

            {/* Subtitle */}
            <p className="mt-3 text-sm text-gray-500">
                Start using premium digital tools in minutes, not hours.
            </p>
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8">
                 <div className="card w-72 bg-base-100 shadow-sm relative">
                    <div className="absolute top-4 right-4 badge badge-primary badge-sm">
                        01
                    </div>

                    <div className="card-body items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                            {/* icon here */}
                            <img src={userimg} alt="" className="w-7 h-7" />
                        </div>

                        <h3 className="font-semibold text-lg">
                            Create Account
                        </h3>

                        <p className="text-sm text-gray-500">
                            Sign up for free in seconds. No credit card required to get started.
                        </p>
                    </div>
                </div>
                  <div className="card w-72 bg-base-100 shadow-sm relative">
                    <div className="absolute top-4 right-4 badge badge-primary badge-sm">
                        02
                    </div>

                    <div className="card-body items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                            {/* icon here */}
                            <img src={packageimg} alt="" className="w-7 h-7" />
                        </div>

                        <h3 className="font-semibold text-lg">
                           Choose Products
                        </h3>

                        <p className="text-sm text-gray-500">
                           Browse our catalog and select the tools that fit your needs.
                        </p>
                    </div>
                </div>
                 <div className="card w-72 bg-base-100 shadow-sm relative">
                    <div className="absolute top-4 right-4 badge badge-primary badge-sm">
                        03
                    </div>

                    <div className="card-body items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                            {/* icon here */}
                            <img src={rocketimg} alt="" className="w-7 h-7" />
                        </div>

                        <h3 className="font-semibold text-lg">
                            Start Creating
                        </h3>

                        <p className="text-sm text-gray-500">
                            Download and start using your premium tools immediately.
                        </p>
                    </div>
                </div>
               
          </div>
        </div>
        
       </div>
       
    );
};

export default StepSection;