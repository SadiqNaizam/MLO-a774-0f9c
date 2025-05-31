import React from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export interface TargetCardProps {
  title: string;
  percentage: number;
  progressBarColorClass: string; // Tailwind background color class for Progress indicator e.g. bg-primary
  className?: string;
}

const TargetCard: React.FC<TargetCardProps> = ({
  title,
  percentage,
  progressBarColorClass,
  className,
}) => {
  return (
    <div className={cn('p-4 rounded-md', className)}>
      {/* The image doesn't show TargetCard as a distinct Card component, more like content blocks. */}
      {/* If these need to be actual Cards, wrap with <Card><CardContent>...</CardContent></Card> */}
      <div className="text-lg font-semibold text-foreground">{percentage}%</div>
      <Progress 
        value={percentage} 
        className={cn('h-1.5 my-2', `[&>div]:${progressBarColorClass}`)} 
      />
      <div className="text-sm text-muted-foreground">{title}</div>
    </div>
  );
};

export default TargetCard;
