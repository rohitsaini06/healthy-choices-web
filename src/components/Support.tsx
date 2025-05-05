
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Support = () => {
  const resources = [
    {
      title: "National Helpline",
      description: "24/7 treatment referral and information service for individuals and families facing mental health or substance use disorders.",
      phone: "1-800-662-HELP (4357)",
      website: "https://www.samhsa.gov/find-help/national-helpline"
    },
    {
      title: "Crisis Text Line",
      description: "Free, 24/7 support for those in crisis. Text HOME to 741741 to connect with a Crisis Counselor.",
      phone: "TEXT: HOME to 741741",
      website: "https://www.crisistextline.org/"
    },
    {
      title: "Al-Anon Family Groups",
      description: "Support for friends and families of problem drinkers, even if the person with the drinking problem is unwilling to seek help.",
      phone: "1-888-4AL-ANON (425-2666)",
      website: "https://al-anon.org/"
    }
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-prevention-softBlue" id="support">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-prevention-darkPurple sm:text-4xl md:text-5xl">Support & Resources</h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg">
            Help is available. Reach out to these resources for support and guidance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <CardTitle className="text-prevention-primary">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-700">{resource.description}</CardDescription>
                <div className="space-y-2">
                  <p className="font-semibold text-prevention-darkPurple">{resource.phone}</p>
                  <Button 
                    className="w-full bg-prevention-primary hover:bg-prevention-secondary text-white"
                    onClick={() => window.open(resource.website, '_blank')}
                  >
                    Visit Website
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg font-semibold text-prevention-darkPurple">
            If you or someone you know is in immediate danger, please call 911 or go to your nearest emergency room.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Support;
