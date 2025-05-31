import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface StatsCardProps {
  title: string;
  value: string;
  change?: number; // Positive for increase, negative for decrease. Undefined for neutral.
  valueInCircle: string;
  circleColorClass: string; // Tailwind background color class e.g. bg-primary
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  valueInCircle,
  circleColorClass,
  className,
}) => {
  const TrendIcon = change && change > 0 ? ArrowUp : change && change < 0 ? ArrowDown : null;
  const valueColor = change && change > 0 ? 'text-ds-accent-green' : change && change < 0 ? 'text-destructive' : 'text-foreground';

  return (
    <Card className={cn('shadow-sm', className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <div className="flex items-center">
          {TrendIcon && <TrendIcon className={cn('h-6 w-6 mr-1', valueColor)} />}
          <span className={cn('text-2xl font-bold', valueColor)}>{value}</span>
        </div>
        <div
          className={cn(
            'flex items-center justify-center h-12 w-12 rounded-full text-white font-semibold text-lg',
            circleColorClass
          )}
        >
          {valueInCircle}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
