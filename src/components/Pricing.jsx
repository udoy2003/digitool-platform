import React from 'react';

const Pricing = () => {
    return (
        <div>
             <div className=" py-4 px-4 text-center">
          

            <h2 className="text-3xl md:text-4xl font-bold text-base-content">
              Simple, Transparent Pricing
            </h2>
              <h1 className='text-sm text-gray-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</h1>

            </div>
            <div className=" py-4 px-4 gap-4 flex flex-col md:flex-row items-center justify-center ">  
                
                 <div className="card w-72 bg-base-100 shadow-sm ">
                   <div className="card-body">
                    <h3 className="text-lg font-semibold">Starter</h3>
                   <p className="text-sm text-gray-500">Perfect for getting started</p>

                   <h2 className="text-3xl font-bold mt-2">
                    $0<span className="text-sm font-normal text-gray-500">/Month</span>
                     </h2>

                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>✔ Access to 10 free tools</li>
                <li>✔ Basic templates</li>
                <li>✔ Community support</li>
                  <li>✔ 1 project per month</li>
               </ul>

                    <div className="mt-6">
              <button className="btn w-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-0">
                Get Started Free
              </button>
                </div>
                   </div>
                 
                   
                 </div>

                  <div className="card w-72 bg-[#4F39F6] shadow-sm  ">
                   <div className="card-body text-white">
                    <h3 className="text-lg font-semibold">Pro</h3>
                   <p className="text-sm ">Best for professionals</p>

                   <h2 className="text-3xl font-bold mt-2">
                    $29<span className="text-sm font-normal text-white">/Month</span>
                     </h2>

                <ul className="mt-4 space-y-2 text-sm text-white">
                <li>✔ Access to all premium tools</li>
                <li>✔ Unlimited templates</li>
                <li>✔ Cloud sync</li>
                  <li>✔Advanced analytics</li>
               </ul>

                    <div className="mt-6">
              <button className="btn w-full rounded-full  text-blue-500 border-0">
                Start Pro Trial
              </button>
                </div>
                   </div>
                 
                   
                 </div>

                  <div className="card w-72 bg-base-100 shadow-sm ">
                   <div className="card-body">
                    <h3 className="text-lg font-semibold">Enterprise</h3>
                   <p className="text-sm text-gray-500">For teams and businesses</p>

                   <h2 className="text-3xl font-bold mt-2">
                    $99<span className="text-sm font-normal text-gray-500">/Month</span>
                     </h2>

                <div >
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>✔ Everything in Pro</li>
                <li>✔Team collaboration</li>
                <li>✔Custom integrations</li>
                <li>✔ Dedicated support</li>
                <li>✔ SLA guarantee</li>
                  <li>✔ Custom branding</li>
               </ul>
               </div>

                    <div className="mt-6">
              <button className="btn w-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-0">
               Contact Sales
              </button>
                </div>
                   </div>
                 
                   
                 </div>
            </div>
        

            
        </div>
    );
};

export default Pricing;