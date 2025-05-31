import React from 'react';
import AdminLayout from '../components/layout/AdminLayout';
import PageHeader from '../components/Dashboard/PageHeader';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import TrafficSourcesChart from '../components/Dashboard/TrafficSourcesChart';
import IncomeWidget from '../components/Dashboard/IncomeWidget';
import TargetSection from '../components/Dashboard/TargetSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

// Interface for the small summary stat cards that appear below the main charts
interface SummaryStatDisplayProps {
  title: string;
  value: string;
  valuePrefixIcon?: React.ReactElement; // Optional icon appearing before the main value
  percentageText: string; // Text for the percentage change, e.g., "+14%" or "8%"
  percentageColorClass: string; // Tailwind CSS class for the color of the percentage text and icon
  percentageIcon?: React.ReactElement; // Optional icon appearing next to the percentage text
}

// Data for the small summary stat cards, based on the provided image's row:
// "Income", "Expenses", "Spendings", "Totals"
const summaryStatsForDisplay: SummaryStatDisplayProps[] = [
  {
    title: 'Income',
    value: '$5,456',
    percentageText: '+14%',
    percentageColorClass: 'text-ds-accent-green',
    // No specific icon for percentage change, the '+' sign implies positive trend.
  },
  {
    title: 'Expenses',
    value: '$4,764',
    percentageText: '8%', // Image shows an upward trend icon for this.
    percentageColorClass: 'text-destructive', // Expenses are typically 'negative' or a cost, hence destructive color.
    percentageIcon: <TrendingUp className="h-3.5 w-3.5" />, // Upward trend icon.
  },
  {
    title: 'Spendings',
    value: '$1.5M',
    valuePrefixIcon: <Check className="h-5 w-5 text-ds-accent-green" />, // Checkmark icon before the value.
    percentageText: '15%', // Image shows a downward trend icon for this.
    percentageColorClass: 'text-ds-accent-green', // This specific metric is styled green in the image.
    percentageIcon: <TrendingDown className="h-3.5 w-3.5" />, // Downward trend icon.
  },
  {
    title: 'Totals',
    value: '$31,564',
    percentageText: '+76%',
    percentageColorClass: 'text-ds-accent-green',
    // No specific icon for percentage change, the '+' sign implies positive trend.
  },
];

const DashboardOverviewPage: React.FC = () => {
  return (
    <AdminLayout>
      {/* 
        The main content container. As per Layout Requirements, this should be a grid with gaps.
        Each direct child represents a major section or row on the dashboard.
      */}
      <div className="grid gap-6">
        <PageHeader />
        <StatsCardGrid />
        
        {/* Row for Traffic Sources Chart and Income Widget */}
        {/* This row uses a responsive grid: 1 column on small screens, 3 columns on large screens. */}
        {/* TrafficSourcesChart takes 2/3 of the space, IncomeWidget takes 1/3 on large screens. */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <TrafficSourcesChart className="lg:col-span-2" />
          <IncomeWidget className="lg:col-span-1" />
        </div>

        {/* Row for Summary Stats Cards (Income, Expenses, Spendings, Totals) */}
        {/* This row also uses a responsive grid. Up to 4 columns on extra-large screens. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {summaryStatsForDisplay.map((stat) => (
            <Card key={stat.title} className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                {/* No icons are shown in the header part of these specific cards in the image */}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold flex items-center">
                  {stat.valuePrefixIcon && (
                    <span className="mr-1.5 flex-shrink-0">{stat.valuePrefixIcon}</span>
                  )}
                  {stat.value}
                </div>
                <p className={cn("text-xs flex items-center mt-1", stat.percentageColorClass)}>
                  {stat.percentageIcon && (
                    <span className="mr-1 flex-shrink-0">{stat.percentageIcon}</span>
                  )}
                  {stat.percentageText}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <TargetSection />
      </div>
    </AdminLayout>
  );
};

export default DashboardOverviewPage;
