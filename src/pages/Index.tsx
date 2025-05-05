
import React from 'react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import SubstanceInfo from '@/components/SubstanceInfo';
import Prevention from '@/components/Prevention';
import Support from '@/components/Support';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="w-full py-4 bg-white border-b">
        <div className="container px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-2xl text-prevention-primary">Prevention First</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium hover:text-prevention-primary transition-colors">Home</a>
            <a href="#substances" className="text-sm font-medium hover:text-prevention-primary transition-colors">Substances</a>
            <a href="#prevention" className="text-sm font-medium hover:text-prevention-primary transition-colors">Prevention</a>
            <a href="#support" className="text-sm font-medium hover:text-prevention-primary transition-colors">Support</a>
            <a href="#faq" className="text-sm font-medium hover:text-prevention-primary transition-colors">FAQs</a>
          </nav>
          <div className="flex items-center space-x-2">
            <Button 
              className="bg-prevention-primary hover:bg-prevention-secondary text-white"
            >
              Get Help
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />
        
        {/* Information about different substances */}
        <SubstanceInfo />
        
        {/* Prevention strategies */}
        <Prevention />
        
        {/* Support resources */}
        <Support />
        
        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-prevention-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">Take the First Step Today</h2>
                <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                  Prevention starts with awareness. Share this information with someone who might need it.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-white text-prevention-primary hover:bg-prevention-softBlue"
                  size="lg"
                >
                  Find Resources
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-prevention-primary"
                  size="lg"
                >
                  Spread Awareness
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <FAQ />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
