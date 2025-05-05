
import React from 'react';
import InfoCard from './InfoCard';

const SubstanceInfo = () => {
  const substances = [
    {
      title: "Alcohol",
      description: "Alcohol affects the central nervous system and can lead to dependency. Learn about responsible drinking and the risks of alcohol abuse.",
      action: "Learn more"
    },
    {
      title: "Opioids",
      description: "Opioids are powerful pain relievers that can be highly addictive. Understand the dangers of misuse and safe alternatives.",
      action: "Learn more"
    },
    {
      title: "Stimulants",
      description: "Stimulants increase activity in the body and can lead to dangerous side effects. Know the signs of stimulant abuse and its risks.",
      action: "Learn more"
    },
    {
      title: "Cannabis",
      description: "Despite changing laws, cannabis carries risks, especially for young users. Get facts about cannabis use and its effects.",
      action: "Learn more"
    }
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white" id="substances">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-prevention-darkPurple sm:text-4xl md:text-5xl">Understanding Substance Abuse</h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg">
            Knowledge is power. Learn about different substances and their effects on the body and mind.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {substances.map((substance, index) => (
            <InfoCard
              key={index}
              title={substance.title}
              description={substance.description}
              action={substance.action}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubstanceInfo;
