
import React from 'react';
import { BoltIcon, ShieldCheckIcon, GlobeAltIcon, SparklesIcon } from '../constants/icons';

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
      icon: <BoltIcon className="w-8 h-8" />,
      title: 'Instant Transactions',
      description: 'Lightning-fast payments that settle in seconds, not days. Send and receive money without the wait.',
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: 'Top-Tier Security',
      description: 'Your financial data is protected by multi-layer security, including biometric access and end-to-end encryption.',
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: 'Pay Anyone, Anywhere',
      description: 'Seamlessly send money across borders or to the person next to you. All you need is their ZenithPay tag.',
    },
    {
      icon: <SparklesIcon className="w-8 h-8" />,
      title: 'Simplified Spending',
      description: 'Track your spending, set budgets, and gain insights into your financial habits, all from one beautifully designed app.',
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">The Future of Finance, Today</h2>
          <p className="mt-4 text-lg text-slate-400">
            ZenithPay is more than just an app. It's a smarter way to manage your money with powerful features designed for your life.
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
