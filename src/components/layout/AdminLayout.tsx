import React from 'react';
import SidebarNav from './SidebarNav';
import TopHeader from './TopHeader';
import { cn } from '@/lib/utils';

interface AdminLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, className }) => {
  // State for mobile sidebar toggle, if needed
  // const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  // const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={cn("min-h-screen bg-background text-foreground", className)}>
      {/* 
        SidebarNav is fixed position and has its own width (w-64).
        TopHeader is fixed position and its `left` style is set to `md:left-64`,
        meaning on md+ screens it starts after the sidebar width.
        On smaller screens (mobile), TopHeader starts at `left-0`.
        A mechanism to toggle SidebarNav visibility on mobile would be needed for a full responsive experience.
      */}
      <SidebarNav /> {/* Add className={isSidebarOpen ? 'block' : 'hidden md:block'} for mobile toggle */}
      
      {/* This div will contain the header and main content, offset by the sidebar width on larger screens */}
      <div className="md:ml-64 flex flex-col flex-1">
        <TopHeader /> {/* Pass onToggleSidebar={toggleSidebar} if mobile toggle is implemented */}
        
        {/* Main content area */}
        {/* mt-[70px] to account for fixed TopHeader height */}
        {/* p-6 for padding around content */}
        {/* flex-1 and overflow-y-auto to allow content to scroll independently */}
        <main className="mt-[70px] p-6 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
