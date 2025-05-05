
import React from 'react';
import { Card } from '@/components/ui/card';

const Prevention = () => {
  const strategies = [
    {
      title: "Education",
      description: "Knowledge about substances and their effects can help individuals make informed decisions.",
      icon: "📚"
    },
    {
      title: "Healthy Coping Skills",
      description: "Developing healthy ways to manage stress and emotional challenges reduces the risk of substance abuse.",
      icon: "🧘"
    },
    {
      title: "Strong Support Systems",
      description: "Having supportive relationships with family and friends provides a protective barrier against substance abuse.",
      icon: "👪"
    },
    {
      title: "Early Intervention",
      description: "Addressing risk factors early can prevent the development of substance use disorders.",
      icon: "⏱️"
    },
    {
      title: "Setting Boundaries",
      description: "Learning to set and respect personal boundaries helps build resilience against peer pressure.",
      icon: "🛑"
    },
    {
      title: "Seeking Professional Help",
      description: "Professional guidance can provide specialized strategies for prevention and recovery.",
      icon: "🩺"
    }
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 gradient-bg" id="prevention">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-prevention-darkPurple sm:text-4xl md:text-5xl">Prevention Strategies</h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg">
            Prevention is always better than treatment. Explore effective strategies to prevent substance abuse.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategies.map((strategy, index) => (
            <Card key={index} className="p-6 card-hover">
              <div className="text-4xl mb-4">{strategy.icon}</div>
              <h3 className="text-xl font-semibold text-prevention-primary mb-2">{strategy.title}</h3>
              <p className="text-gray-600">{strategy.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prevention;
