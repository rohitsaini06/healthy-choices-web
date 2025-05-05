
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface InfoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  action?: string;
  onClick?: () => void;
  className?: string;
}

const InfoCard = ({ title, description, icon, action, onClick, className }: InfoCardProps) => {
  return (
    <Card className={`card-hover overflow-hidden ${className}`}>
      <CardHeader className="bg-prevention-softGray pb-2">
        {icon && <div className="mb-2 text-prevention-primary text-4xl">{icon}</div>}
        <CardTitle className="text-xl text-prevention-darkPurple">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <CardDescription className="text-gray-700 text-base">{description}</CardDescription>
      </CardContent>
      {action && (
        <CardFooter>
          <Button 
            variant="ghost" 
            className="text-prevention-primary hover:text-prevention-secondary hover:bg-prevention-softGray" 
            onClick={onClick}
          >
            {action}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default InfoCard;
