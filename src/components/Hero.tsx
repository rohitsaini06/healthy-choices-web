
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 gradient-bg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-prevention-darkPurple">
              Take Control of Your Life<br />
              <span className="text-prevention-primary">Choose Prevention</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Join us in building a healthier future through education, awareness, and support.
              Together, we can prevent substance abuse and create positive change.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-prevention-primary hover:bg-prevention-secondary text-white"
              size="lg"
            >
              Learn More
            </Button>
            <Button 
              variant="outline" 
              className="border-prevention-primary text-prevention-primary hover:bg-prevention-softBlue hover:text-prevention-primary"
              size="lg"
            >
              Find Help Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
