import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="relative bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-2xl p-10 md:p-16 text-center shadow-2xl shadow-indigo-500/30 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ready To Hit The Road?
            </h2>
            <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
              Your dream bike is just a few clicks away. Join thousands of riders and find your perfect match on the most trusted motorcycle marketplace.
            </p>
            <button className="bg-white text-indigo-600 hover:bg-slate-100 font-bold py-4 px-10 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
              Browse All Bikes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;