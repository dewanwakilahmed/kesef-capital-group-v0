import { FC } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface ShowCaseCardProps {
  title: string;
  description: string;
}

const ShowCaseCard: FC<ShowCaseCardProps> = ({ title, description }) => {
  return (
    <Card className='bg-transparent backdrop-blur-md hover:scale-105 transition'>
      <CardHeader className='flex flex-col gap-3'>
        <CardTitle className='text-center text-white'>{title}</CardTitle>
        <CardDescription className='text-justify text-gray-300'>
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ShowCaseCard;
