import React from 'react';
import { ShieldCheckIcon, ListBulletIcon, GlobeAltIcon, SparklesIcon } from '../constants/icons';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-lg hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-2">
    <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-white">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: 'Verified Listings',
      description: 'Every listing is reviewed by our team, so you can browse with confidence. Find quality bikes from trusted sellers.',
    },
    {
      icon: <ListBulletIcon className="w-8 h-8" />,
      title: 'Detailed Specs',
      description: 'Make an informed decision with comprehensive details, high-quality photos, and genuine reviews from other riders.',
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: 'Massive Selection',
      description: 'From cruisers to sport bikes, find your perfect match in the largest collection of new and pre-owned motorcycles.',
    },
    {
      icon: <SparklesIcon className="w-8 h-8" />,
      title: 'Sell With Ease',
      description: 'Ready to upgrade? Our streamlined process makes it simple to list your bike and connect with thousands of buyers.',
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Why Choose MotoHub?</h2>
          <p className="mt-4 text-lg text-slate-400">
            We offer a trusted, feature-rich platform designed to connect motorcycle buyers and sellers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;