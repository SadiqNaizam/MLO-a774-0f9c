import React from 'react';
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Tooltip
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Settings, ListFilter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IncomeWidgetProps {
  className?: string;
}

const incomePercentage = 75;
const radialChartData = [{ name: 'Income', value: incomePercentage, fill: 'url(#incomeGradient)' }];

const IncomeWidget: React.FC<IncomeWidgetProps> = ({ className }) => {
  return (
    <Card className={cn('shadow-sm', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold">Income</CardTitle>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings className="h-4 w-4 text-muted-foreground" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ListFilter className="h-4 w-4 text-muted-foreground" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="h-[200px] w-[200px] relative mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius="70%"
              outerRadius="100%"
              data={radialChartData}
              startAngle={90}
              endAngle={-270}
              barSize={15}
            >
              <defs>
                <linearGradient id="incomeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#198754" /> {/* ds-accent-green */}
                  <stop offset="100%" stopColor="hsl(var(--primary))" />
                </linearGradient>
              </defs>
              <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
              <RadialBar
                background={{ fill: 'hsl(var(--muted))' }}
                dataKey="value"
                cornerRadius={10}
                angleAxisId={0}
              />
              <Tooltip contentStyle={{ display: 'none' }} />
            </RadialBarChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs text-muted-foreground">Percent</span>
            <span className="text-4xl font-bold text-foreground">{incomePercentage}</span>
          </div>
        </div>
        <div className="w-full text-center">
          <p className="text-sm text-muted-foreground mb-1">32%</p>
          <Progress value={32} className="h-2 w-full [&>div]:bg-ds-accent-orange" />
          <p className="text-xs text-muted-foreground mt-1">Spendings Target</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default IncomeWidget;
