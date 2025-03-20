import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Newspaper,
  Truck,
  Receipt,
  BarChart,
  User,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Customers', href: '/customers', icon: Users },
  { name: 'Subscriptions', href: '/subscriptions', icon: Newspaper },
  { name: 'Deliveries', href: '/deliveries', icon: Truck },
  { name: 'Billing', href: '/billing', icon: Receipt },
  { name: 'Reports', href: '/reports', icon: BarChart },
  { name: 'Profile', href: '/profile', icon: User },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="hidden border-r bg-muted/40 md:block md:w-64">
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="grid items-start px-4 text-sm">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground',
                    location.pathname === item.href &&
                      'bg-muted text-foreground font-medium'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}