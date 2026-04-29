import React from "react";

const Stats = () => {
  return (
    <div className="w-full py-16 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-center">


        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold">50K+</h2>
          <p className="mt-2 text-white/80">Active Users</p>
        </div>

      
        <div className="hidden md:block w-px h-16 bg-white/30 mx-6"></div>


        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold">200+</h2>
          <p className="mt-2 text-white/80">Premium Tools</p>
        </div>

      
        <div className="hidden md:block w-px h-16 bg-white/30 mx-6"></div>

       
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold">4.9</h2>
          <p className="mt-2 text-white/80">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default Stats;