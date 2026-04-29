import React from "react";

const Workflow = () => {
  return (
    <div className="w-full py-24 px-6 flex justify-center items-center bg-[#4F39F6] text-white">

      <div className="text-center max-w-2xl">

   
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h1>

       
        <p className="text-sm md:text-base text-white/80 mb-8">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br />
          Start your free trial today.
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <button className="btn bg-white text-purple-600 border-none hover:bg-gray-100 rounded-full px-6">
            Explore Products
          </button>

          <button className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-600 rounded-full px-6">
            View Pricing
          </button>
        </div>


        <p className="text-xs text-white/70">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </div>
  );
};

export default Workflow;