import React from 'react';
import TargetCard, { TargetCardProps } from './TargetCard';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TargetSectionProps {
  className?: string;
}

const targetData: TargetCardProps[] = [
  {
    title: 'Income Target',
    percentage: 71,
    progressBarColorClass: 'bg-destructive',
  },
  {
    title: 'Expenses Target',
    percentage: 54,
    progressBarColorClass: 'bg-ds-accent-green',
  },
  {
    title: 'Spendings Target',
    percentage: 32,
    progressBarColorClass: 'bg-ds-accent-orange',
  },
  {
    title: 'Totals Target',
    percentage: 89,
    progressBarColorClass: 'bg-primary',
  },
];

const TargetSection: React.FC<TargetSectionProps> = ({ className }) => {
  // Simplified data for the small stat cards above the target cards
  // These are not TargetCard components but simple displays.
  // Based on the prompt, this section does not include these, but they are in the image.
  // For clarity, I will only implement the TargetCard section below.

  return (
    <div className={cn('bg-card p-6 rounded-lg shadow-sm', className)}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-foreground">Target Section</h3>
        <div className="flex items-center gap-2">
          <Button variant="link" className="text-primary px-0 h-auto py-0 text-sm">
            View Details
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings className="h-4 w-4 text-muted-foreground" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {targetData.map((target) => (
          <TargetCard
            key={target.title}
            title={target.title}
            percentage={target.percentage}
            progressBarColorClass={target.progressBarColorClass}
          />
        ))}
      </div>
    </div>
  );
};

export default TargetSection;
