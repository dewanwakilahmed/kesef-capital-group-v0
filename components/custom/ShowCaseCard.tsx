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
    <Card>
      <CardHeader className='flex flex-col gap-3'>
        <CardTitle className='text-center'>{title}</CardTitle>
        <CardDescription className='text-justify'>
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ShowCaseCard;
