import React from 'react';
import StatsCard, { StatsCardProps } from './StatsCard';
import { cn } from '@/lib/utils';

interface StatsCardGridProps {
  className?: string;
}

const statsData: StatsCardProps[] = [
  {
    title: 'NEW ACCOUNTS',
    value: '234 %',
    change: 234,
    valueInCircle: '58',
    circleColorClass: 'bg-primary',
  },
  {
    title: 'TOTAL EXPENSES',
    value: '71 %',
    change: -71,
    valueInCircle: '62',
    circleColorClass: 'bg-destructive',
  },
  {
    title: 'COMPANY VALUE',
    value: '$ 1,45M',
    valueInCircle: '72',
    circleColorClass: 'bg-ds-accent-orange',
  },
  {
    title: 'NEW EMPLOYEES',
    value: '+ 34 hires',
    valueInCircle: '81',
    circleColorClass: 'bg-ds-accent-green',
  },
];

const StatsCardGrid: React.FC<StatsCardGridProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6', className)}>
      {statsData.map((stat) => (
        <StatsCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          valueInCircle={stat.valueInCircle}
          circleColorClass={stat.circleColorClass}
        />
      ))}
    </div>
  );
};

export default StatsCardGrid;
