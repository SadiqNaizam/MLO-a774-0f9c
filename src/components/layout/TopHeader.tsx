import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
  Menu,
  Search,
  LayoutGrid,
  Settings,
  Briefcase,
  ChevronDown,
  Bell,
  Globe,
  User as UserIcon,
  LogOut,
  Settings2
} from 'lucide-react';

interface TopHeaderProps {
  className?: string;
  onToggleSidebar?: () => void; // Optional: For toggling sidebar on mobile
}

const TopHeader: React.FC<TopHeaderProps> = ({ className, onToggleSidebar }) => {
  return (
    <header
      className={cn(
        'h-[70px] bg-card text-foreground flex items-center justify-between px-6 fixed top-0 left-0 md:left-64 right-0 z-10 border-b border-border',
        className
      )}
    >
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onToggleSidebar}>
          <Menu className="h-5 w-5" />
        </Button>
        {/* SearchBar - Part of HeaderActions conceptually */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="pl-9 w-64 h-9" />
        </div>
        {/* HeaderActions: Mega Menu, Settings, Projects - hidden on smaller screens example */}
        <nav className="hidden lg:flex items-center gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium">
                <LayoutGrid className="mr-2 h-4 w-4" />
                Mega Menu
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>Applications</DropdownMenuLabel>
              <DropdownMenuItem>Dashboard</DropdownMenuItem>
              <DropdownMenuItem>Analytics</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium">
                <Settings className="mr-2 h-4 w-4" />
                Settings
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Account</DropdownMenuItem>
              <DropdownMenuItem>Preferences</DropdownMenuItem>
              <DropdownMenuItem>Notifications</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium">
                <Briefcase className="mr-2 h-4 w-4" />
                Projects
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Project A</DropdownMenuItem>
              <DropdownMenuItem>Project B</DropdownMenuItem>
              <DropdownMenuItem>New Project</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>

      {/* Right Section - UserAvatar and other HeaderActions */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
          <LayoutGrid className="h-5 w-5" /> {/* Grid Icon */} 
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
          {/* Optional: Notification badge */}
          {/* <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-primary ring-2 ring-card" /> */}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Globe className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>Español</DropdownMenuItem>
            <DropdownMenuItem>Français</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* UserAvatar */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 px-2 h-auto py-1.5">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://i.pravatar.cc/40?u=alina" alt="Alina Mclourd" />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <div className="hidden md:flex flex-col items-start">
                <span className="text-sm font-medium">Alina Mclourd</span>
                <span className="text-xs text-muted-foreground">VP People Manager</span>
              </div>
              <ChevronDown className="ml-1 h-4 w-4 hidden md:block" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings2 className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" size="icon" className="lg:hidden"> {/* Right side hamburger for mobile or other panel */} 
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default TopHeader;
