import React from 'react';
import Footer from './Footer';

const PricingPlans: React.FC = () => {
  return (
    <>
    
    <div className="text-center p-8">
      <h1 className="text-5xl font-bold mb-2 bg-gradient-to-b from-black to-purple-950 dark:from-gray-300 dark:to-purple-300 bg-clip-text text-transparent">Make the wise decision for your business</h1>
      <p className="text-gray-500 mb-8">Choose from our affordable packages</p>
      <div className="flex justify-center space-x-4">
        <div className="border rounded-lg p-6 w-64">
          <h2 className="text-lg font-semibold mb-2">Basic</h2>
          <p className="text-4xl font-bold mb-4">Free</p>
          <p className="text-gray-500 mb-4">Best for small business owners, startups who need a landing page for their business.</p>
          <a href="#" className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold  transition-all duration-200 bg-muted border-2 border-transparent sm:w-auto rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary" role="button">Active</a>    
        </div>
        <div className="border rounded-lg p-6 w-64 bg-black text-white">
          <h2 className="text-lg font-semibold mb-2 text-primary">Premium</h2>
          <p className="text-4xl font-bold mb-4 bg-gradient-to-b from-lime-400 to-green-400 bg-clip-text text-transparent">$59</p>
          <p className="text-gray-400 mb-4">Best for medium business owners, startups who need a landing page for their business.</p>
          <a href="#" className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold hover:text-white dark:text-white text-black transition-all duration-200 bg-secondary border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary" role="button">Buy</a>
          
        </div>
        <div className="border rounded-lg p-6 w-64">
          <h2 className="text-lg font-semibold mb-2 bg-gradient-to-b from-black dark:from-gray-300 to-gray-400 bg-clip-text text-transparent">Enterprise</h2>
          <p className="text-4xl font-bold mb-4 bg-gradient-to-b from-black dark:from-slate-300 to-gray-600 bg-clip-text text-transparent">$129</p>
          <p className="text-gray-500 mb-4">Best for large companies, business owners who need a landing page for their business.</p>
          <a href="#" className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold hover:text-white transition-all duration-200 bg-secondary border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary" role="button">Buy</a>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default PricingPlans;
