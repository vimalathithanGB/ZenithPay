
import React from 'react';
import { LogoIcon } from '../constants/icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <LogoIcon className="w-8 h-8 text-indigo-400" />
              <span className="text-2xl font-bold text-white">ZenithPay</span>
            </div>
            <p className="text-slate-400">Your money, simplified. Instant, secure transactions for the modern world.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Security</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Download</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Press</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} ZenithPay Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
