import React from 'react';
import { MagnifyingGlassIcon, ChatBubbleLeftRightIcon, CheckBadgeIcon } from '../constants/icons';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: <MagnifyingGlassIcon className="w-10 h-10 text-indigo-400" />,
      title: 'Search & Discover',
      description: 'Use our powerful search to browse thousands of listings and find the bike that\'s right for you.',
    },
    {
      number: '02',
      icon: <ChatBubbleLeftRightIcon className="w-10 h-10 text-cyan-400" />,
      title: 'Connect with Sellers',
      description: 'Ask questions, schedule a test ride, and negotiate directly with verified sellers on our platform.',
    },
    {
      number: '03',
      icon: <CheckBadgeIcon className="w-10 h-10 text-emerald-400" />,
      title: 'Ride Away Happy',
      description: 'Finalize your purchase with confidence. Welcome to the community and enjoy your new ride!',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-900/70">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Find Your Ride in 3 Easy Steps</h2>
          <p className="mt-4 text-lg text-slate-400">
            We've designed a seamless experience for you to discover, connect, and purchase your next motorcycle.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center max-w-sm">
                <div className="relative mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full blur-md opacity-30"></div>
                  <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-slate-800 border border-slate-700">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 bg-slate-700 text-white font-bold text-sm px-3 py-1 rounded-full">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block w-24 h-1 bg-slate-700 rounded-full mx-8"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;