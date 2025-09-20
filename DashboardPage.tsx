import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { User, FileText, Clock, MapPin, Star, Plus, ArrowRight } from "lucide-react";

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const mockApplications = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "TechCorp India",
      status: "Under Review",
      appliedDate: "2025-01-15",
      location: "Bangalore",
      statusColor: "yellow"
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Analytics Solutions",
      status: "Interview Scheduled",
      appliedDate: "2025-01-12",
      location: "Mumbai",
      statusColor: "blue"
    },
    {
      id: 3,
      title: "Digital Marketing Intern",
      company: "Creative Agency",
      status: "Accepted",
      appliedDate: "2025-01-08",
      location: "Remote",
      statusColor: "green"
    }
  ];

  const getStatusColor = (color: string) => {
    switch (color) {
      case 'green': return 'bg-green-100 text-green-800';
      case 'blue': return 'bg-blue-100 text-blue-800';
      case 'yellow': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="px-3 py-1 bg-[#1A73E8] text-white text-sm font-medium rounded-full">
                SIH 2025
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's your internship journey overview.</p>
          </div>
          <Button 
            onClick={() => onNavigate('recommendations')}
            className="bg-[#1A73E8] hover:bg-[#1557c7] text-white"
          >
            <Plus className="mr-2 h-4 w-4" />
            Find New Internships
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-[#1A73E8] rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">3</h3>
              <p className="text-sm text-gray-600">Applications Sent</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-[#28A745] rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">1</h3>
              <p className="text-sm text-gray-600">Interviews Scheduled</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">1</h3>
              <p className="text-sm text-gray-600">Offers Received</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">85%</h3>
              <p className="text-sm text-gray-600">Profile Completion</p>
            </CardContent>
          </Card>
        </div>

        {/* Profile Completion */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-[#1A73E8]" />
              Complete Your Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Profile Completion</span>
                <span className="text-sm font-medium text-gray-900">85%</span>
              </div>
              <Progress value={85} className="h-2" />
              <p className="text-sm text-gray-600">
                Add your project portfolio and skills assessment to increase your chances of getting noticed by employers.
              </p>
              <Button variant="outline" size="sm">
                Complete Profile
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Applications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#1A73E8]" />
              Recent Applications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockApplications.map((application) => (
                <div key={application.id} className="border border-gray-200 rounded-lg p-4 hover:border-[#1A73E8] transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">{application.title}</h4>
                      <p className="text-sm text-gray-600">{application.company}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {application.location}
                        </span>
                        <span>Applied: {application.appliedDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={getStatusColor(application.statusColor)}>
                        {application.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {mockApplications.length === 0 && (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Applications Yet</h3>
                <p className="text-gray-600 mb-4">Start your internship journey by exploring opportunities</p>
                <Button 
                  onClick={() => onNavigate('recommendations')}
                  className="bg-[#1A73E8] hover:bg-[#1557c7] text-white"
                >
                  Find Internships
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}