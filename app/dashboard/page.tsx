import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity,
  ArrowUp,
  ArrowDown,
  Clock,
  CheckCircle2
} from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$2.4M',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-emerald-600'
    },
    {
      title: 'Active Projects',
      value: '24',
      change: '+3',
      trend: 'up',
      icon: Activity,
      color: 'text-blue-600'
    },
    {
      title: 'Team Members',
      value: '25',
      change: '+2',
      trend: 'up',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'Client Satisfaction',
      value: '98.5%',
      change: '+0.5%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-orange-600'
    }
  ];

  const projects = [
    {
      name: 'E-commerce Platform',
      client: 'TechCorp Inc.',
      progress: 85,
      status: 'In Progress',
      deadline: '2024-02-15'
    },
    {
      name: 'Mobile Banking App',
      client: 'FinanceFirst',
      progress: 60,
      status: 'In Progress',
      deadline: '2024-03-20'
    },
    {
      name: 'Healthcare Portal',
      client: 'MedCenter',
      progress: 100,
      status: 'Completed',
      deadline: '2024-01-30'
    },
    {
      name: 'SaaS Dashboard',
      client: 'DataFlow Solutions',
      progress: 35,
      status: 'In Progress',
      deadline: '2024-04-10'
    }
  ];

  const recentActivities = [
    { action: 'Project milestone reached', project: 'E-commerce Platform', time: '2 hours ago' },
    { action: 'New client onboarded', project: 'SaaS Dashboard', time: '5 hours ago' },
    { action: 'Code review completed', project: 'Mobile Banking App', time: '1 day ago' },
    { action: 'Project delivered', project: 'Healthcare Portal', time: '2 days ago' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Header */}
      <section className="pt-32 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's what's happening with your projects.</p>
            </div>
            <Badge className="mt-4 md:mt-0 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
              All systems operational
            </Badge>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="flex items-center text-sm">
                    {stat.trend === 'up' ? (
                      <ArrowUp className="h-4 w-4 text-emerald-500 mr-1" />
                    ) : (
                      <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span className={stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}>
                      {stat.change}
                    </span>
                    <span className="text-gray-500 ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Projects Overview */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Active Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <div key={index} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">{project.name}</h3>
                          <p className="text-sm text-gray-600">{project.client}</p>
                        </div>
                        <div className="flex items-center">
                          {project.status === 'Completed' ? (
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                          ) : (
                            <Clock className="h-4 w-4 text-blue-500 mr-2" />
                          )}
                          <Badge 
                            variant={project.status === 'Completed' ? 'default' : 'secondary'}
                            className={project.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : ''}
                          >
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                        <div className="text-sm text-gray-500">
                          Deadline: {new Date(project.deadline).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-b-0">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.project}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg mt-6">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
                    <div className="font-medium text-gray-900">Create New Project</div>
                    <div className="text-sm text-gray-600">Start a new client project</div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
                    <div className="font-medium text-gray-900">Generate Report</div>
                    <div className="text-sm text-gray-600">Monthly performance report</div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
                    <div className="font-medium text-gray-900">Team Meeting</div>
                    <div className="text-sm text-gray-600">Schedule team sync</div>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}