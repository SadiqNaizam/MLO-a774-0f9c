import React from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Home, ChevronRight, Info, CalendarDays, Printer } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ className }) => {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Minimal Dashboard</h1>
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            <Home className="h-4 w-4 mr-1.5" />
            <span>Dashboards</span>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground">Minimal Dashboard Example</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <CalendarDays className="mr-2 h-4 w-4" />
            Select period...
          </Button>
          <Button variant="outline" size="icon">
            <Printer className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Alert className="bg-card border-primary/50 text-primary [&>svg]:text-primary">
        <Info className="h-4 w-4" />
        <AlertTitle className="font-semibold">Heads up!</AlertTitle>
        <AlertDescription>
          This dashboard example was created using only the available elements and components, no additional SCSS was written!
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default PageHeader;
