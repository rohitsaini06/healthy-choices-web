
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="w-full py-8 md:py-12 bg-prevention-darkPurple text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Prevention First</h3>
            <p className="text-sm text-gray-300">
              Dedicated to substance abuse prevention through education, awareness, and support.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-prevention-primary">Home</a></li>
              <li><a href="#substances" className="text-gray-300 hover:text-prevention-primary">Substances</a></li>
              <li><a href="#prevention" className="text-gray-300 hover:text-prevention-primary">Prevention</a></li>
              <li><a href="#support" className="text-gray-300 hover:text-prevention-primary">Support</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-prevention-primary">FAQs</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-prevention-primary">Articles</a></li>
              <li><a href="#" className="text-gray-300 hover:text-prevention-primary">Research</a></li>
              <li><a href="#" className="text-gray-300 hover:text-prevention-primary">Videos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-prevention-primary">Testimonials</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Emergency</h3>
            <p className="text-sm text-gray-300">
              If you or someone you know is in crisis, call:
            </p>
            <p className="font-semibold">1-800-662-HELP (4357)</p>
            <p className="text-sm text-gray-300">Available 24/7, 365 days a year</p>
          </div>
        </div>
        <Separator className="my-8 bg-gray-700" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Prevention First. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-prevention-primary">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-prevention-primary">Terms</a>
            <a href="#" className="text-gray-400 hover:text-prevention-primary">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
