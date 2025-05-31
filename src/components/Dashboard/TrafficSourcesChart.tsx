import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TrafficSourcesChartProps {
  className?: string;
}

const chartData = [
  { name: 'Jan 00', websiteBlog: 400, socialMedia: 24 },
  { name: 'Jan 02', websiteBlog: 520, socialMedia: 28 },
  { name: 'Jan 03', websiteBlog: 410, socialMedia: 18 },
  { name: 'Jan 04', websiteBlog: 680, socialMedia: 35 },
  { name: 'Jan 05', websiteBlog: 220, socialMedia: 45 },
  { name: 'Jan 06', websiteBlog: 450, socialMedia: 22 },
  { name: 'Jan 07', websiteBlog: 180, socialMedia: 15 },
  { name: 'Jan 08', websiteBlog: 380, socialMedia: 30 },
  { name: 'Jan 09', websiteBlog: 780, socialMedia: 25 },
  { name: 'Jan 10', websiteBlog: 320, socialMedia: 20 },
  { name: 'Jan 11', websiteBlog: 250, socialMedia: 12 },
  { name: 'Jan 12', websiteBlog: 150, socialMedia: 18 },
];

const TrafficSourcesChart: React.FC<TrafficSourcesChartProps> = ({ className }) => {
  return (
    <Card className={cn('shadow-sm', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-lg font-semibold">Traffic Sources</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Website Blog vs Social Media Traffic
          </CardDescription>
        </div>
        <Button variant="default" className="bg-ds-accent-orange hover:bg-ds-accent-orange/90 text-white px-3 h-8">
          Actions
        </Button>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={chartData} margin={{ top: 5, right: 0, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                tickLine={false} 
                axisLine={false} 
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              />
              <YAxis 
                yAxisId="left" 
                orientation="left" 
                stroke="hsl(var(--primary))" 
                tickLine={false} 
                axisLine={false}
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                label={{ value: 'Website Blog', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))', fontSize: 12, dx: -10 }}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                stroke="var(--ds-accent-green)" 
                tickLine={false} 
                axisLine={false}
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                label={{ value: 'Social Media', angle: 90, position: 'insideRight', fill: 'hsl(var(--muted-foreground))', fontSize: 12, dx: 10 }}
              />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--background))',
                  borderColor: 'hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                }}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36} 
                iconType="circle"
                wrapperStyle={{ color: 'hsl(var(--muted-foreground))', fontSize: 14 }}
              />
              <Bar yAxisId="left" dataKey="websiteBlog" fill="hsl(var(--primary))" barSize={20} radius={[4, 4, 0, 0]} name="Website Blog" />
              <Line yAxisId="right" type="monotone" dataKey="socialMedia" stroke="#198754" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: '#198754' }} activeDot={{ r: 6 }} name="Social Media" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrafficSourcesChart;
