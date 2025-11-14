
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            Tap. Pay. Done.
            <br />
            Your Money, Simplified.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Ditch the wallet, embrace digital. Experience instant, secure transactions with ZenithPay. The future of finance is in your pocket.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-indigo-500/40 transition-all duration-300 transform hover:scale-105">
              Download the App
            </button>
            <button className="bg-slate-700/50 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-16 md:mt-24 relative flex justify-center">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur-xl opacity-25"></div>
          <img
            src="https://picsum.photos/seed/financeapp/800/450"
            alt="ZenithPay App Interface"
            className="rounded-2xl shadow-2xl shadow-slate-900/50 relative transform hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
