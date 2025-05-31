import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  BarChart2,
  ShoppingCart,
  TrendingUp,
  AppWindow,
  Users,
  FileText,
  LayoutGrid,
  Box,
  Blocks,
  Table2,
  PieChart,
  UserCircle2,
  ClipboardList,
  Settings2,
  ToyBrick,
  BarChartHorizontal,
  Activity,
  BarChart,
  ChevronDown,
  Power // For Architect text, using a generic icon or just text is also fine
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ElementType;
  active?: boolean;
  children?: NavItem[];
  isTitle?: boolean;
}

const navigationData: NavItem[] = [
  { id: 'menu_title', label: 'MENU', isTitle: true },
  {
    id: 'dashboards',
    label: 'Dashboards',
    icon: LayoutDashboard,
    children: [
      { id: 'analytics', label: 'Analytics', href: '#/analytics', icon: BarChart2 },
      { id: 'commerce', label: 'Commerce', href: '#/commerce', icon: ShoppingCart },
      { id: 'sales', label: 'Sales', href: '#/sales', icon: TrendingUp },
      {
        id: 'minimal',
        label: 'Minimal',
        icon: AppWindow,
        children: [
          { id: 'variation1', label: 'Variation 1', href: '#/minimal/variation1', active: true },
          { id: 'variation2', label: 'Variation 2', href: '#/minimal/variation2' },
        ],
      },
    ],
  },
  { id: 'crm', label: 'CRM', href: '#/crm', icon: Users },
  {
    id: 'pages',
    label: 'Pages',
    icon: FileText,
    children: [{ id: 'applications', label: 'Applications', href: '#/pages/applications', icon: LayoutGrid }],
  },
  { id: 'ui_components_title', label: 'UI COMPONENTS', isTitle: true },
  {
    id: 'elements_ui', 
    label: 'Elements', 
    icon: Box,
    children: [{ id: 'el_sub', label: 'Sub Element', href: '#/ui/elements/sub'}]
  },
  {
    id: 'components_ui',
    label: 'Components',
    icon: Blocks,
    children: [{ id: 'co_sub', label: 'Sub Component', href: '#/ui/components/sub'}]
  },
  {
    id: 'tables_ui',
    label: 'Tables',
    icon: Table2,
    children: [{ id: 'ta_sub', label: 'Sub Table', href: '#/ui/tables/sub'}]
  },
  { id: 'dashboard_widgets_title', label: 'DASHBOARD WIDGETS', isTitle: true },
  { id: 'chart_boxes1', label: 'Chart Boxes 1', href: '#/widgets/chartbox1', icon: PieChart },
  { id: 'chart_boxes2', label: 'Chart Boxes 2', href: '#/widgets/chartbox2', icon: UserCircle2 }, // Changed icon for variety
  { id: 'chart_boxes3', label: 'Chart Boxes 3', href: '#/widgets/chartbox3', icon: LayoutGrid }, // Changed icon for variety
  { id: 'profile_boxes', label: 'Profile Boxes', href: '#/widgets/profileboxes', icon: UserCircle2 }, 
  { id: 'forms_title', label: 'FORMS', isTitle: true },
  {
    id: 'elements_forms',
    label: 'Elements',
    icon: Settings2,
    children: [{ id: 'ef_sub', label: 'Form Element Sub', href: '#/forms/elements/sub'}]
  },
  { id: 'widgets_forms', label: 'Widgets', href: '#/forms/widgets', icon: ToyBrick },
  { id: 'charts_title', label: 'CHARTS', isTitle: true },
  { id: 'chartjs', label: 'ChartJS', href: '#/charts/chartjs', icon: BarChartHorizontal },
  { id: 'apex_charts', label: 'Apex Charts', href: '#/charts/apex', icon: Activity },
  { id: 'chart_sparklines', label: 'Chart Sparklines', href: '#/charts/sparklines', icon: BarChart },
];

const findActivePathDetails = (items: NavItem[], activeId: string): string[] => {
  for (const item of items) {
    if (item.id === activeId) return [item.id];
    if (item.children) {
      const childPath = findActivePathDetails(item.children, activeId);
      if (childPath.length > 0) return [item.id, ...childPath];
    }
  }
  return [];
};

const initiallyActiveItem = navigationData.flatMap(i => i.children || [i]).find(item => item.active || (item.children && item.children.some(child => child.active)));
const activeVariation1 = navigationData.flatMap(i => i.children ?? []).flatMap(i => i.children ?? []).find(i => i.id === 'variation1');

const defaultActiveId = activeVariation1?.id || '';
const defaultOpenAccordions = findActivePathDetails(navigationData, defaultActiveId).slice(0, -1); // All parent IDs of the active item

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const [activePath, setActivePath] = useState<string>(defaultActiveId);

  const renderNavItems = (items: NavItem[], level = 0): JSX.Element[] => {
    return items.map((item) => {
      const IconComponent = item.icon;
      const isActive = item.id === activePath;

      if (item.isTitle) {
        return (
          <li key={item.id} className="px-4 pt-4 pb-2">
            <h2 className="text-xs font-semibold uppercase text-sidebar-foreground/70 tracking-wider">{item.label}</h2>
          </li>
        );
      }

      if (item.children && item.children.length > 0) {
        return (
          <li key={item.id} className="px-2">
            <AccordionItem value={item.id} className="border-b-0">
              <AccordionTrigger
                className={cn(
                  "w-full flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar-background",
                  isActive && !item.children?.some(c => c.id === activePath) ? 'bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90' : 'text-sidebar-foreground',
                  `pl-${3 + level * 2}`
                )}
                onClick={() => item.href && setActivePath(item.id)} // Allow selecting parent if it has an href
              >
                <div className="flex items-center">
                  {IconComponent && <IconComponent className="mr-3 h-5 w-5 flex-shrink-0" />}
                  <span>{item.label}</span>
                </div>
                {/* ChevronDown is automatically rendered by AccordionTrigger using its own icon slot */}
              </AccordionTrigger>
              <AccordionContent className="pb-0 pl-3">
                <ul className="space-y-1">
                  {renderNavItems(item.children, level + 1)}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </li>
        );
      }

      return (
        <li key={item.id} className="px-2">
          <Button
            variant="ghost"
            asChild={!item.href} // asChild if no href for custom onClick, else it's an <a>
            className={cn(
              "w-full justify-start items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              isActive ? 'bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90' : 'text-sidebar-foreground',
              `pl-${3 + level * 2}`
            )}
            onClick={() => setActivePath(item.id)}
          >
            {item.href ? (
              <a href={item.href} className="flex items-center w-full">
                {IconComponent && <IconComponent className="mr-3 h-5 w-5 flex-shrink-0" />}
                {item.label}
              </a>
            ) : (
              <>
                {IconComponent && <IconComponent className="mr-3 h-5 w-5 flex-shrink-0" />}
                {item.label}
              </>
            )}
          </Button>
        </li>
      );
    });
  };

  return (
    <aside className={cn("w-64 bg-sidebar text-sidebar-foreground flex flex-col h-screen fixed top-0 left-0 border-r border-sidebar-border z-20", className)}>
      <div className="flex items-center h-[70px] px-6 border-b border-sidebar-border">
        <Power className="h-8 w-8 text-sidebar-primary mr-2" /> {/* Placeholder for logo */} 
        <h1 className="text-xl font-bold text-sidebar-foreground">Architect</h1>
      </div>
      <ScrollArea className="flex-1">
        <Accordion type="multiple" defaultValue={defaultOpenAccordions} className="w-full">
          <ul className="py-4 space-y-1">
            {renderNavItems(navigationData)}
          </ul>
        </Accordion>
      </ScrollArea>
      {/* Optional Footer Section */}
      {/* <div className="p-4 border-t border-sidebar-border">
        <p className="text-xs text-sidebar-foreground/70">© 2024 Architect Corp.</p>
      </div> */}
    </aside>
  );
};

export default SidebarNav;
