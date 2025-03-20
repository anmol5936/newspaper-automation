import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Users,
  Newspaper,
  Truck,
  Receipt,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';

const stats = [
  {
    title: 'Total Customers',
    value: '2,350',
    icon: Users,
    trend: 'up',
    change: '+12.5%',
  },
  {
    title: 'Active Subscriptions',
    value: '1,890',
    icon: Newspaper,
    trend: 'up',
    change: '+8.2%',
  },
  {
    title: 'Daily Deliveries',
    value: '1,650',
    icon: Truck,
    trend: 'down',
    change: '-2.1%',
  },
  {
    title: 'Monthly Revenue',
    value: '$48,250',
    icon: Receipt,
    trend: 'up',
    change: '+15.3%',
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Overview of your newspaper agency's performance
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <TrendIcon
                    className={`inline h-4 w-4 ${
                      stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`}
                  />{' '}
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}