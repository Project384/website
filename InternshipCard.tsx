import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Calendar, DollarSign, Building } from "lucide-react";

interface InternshipCardProps {
  title: string;
  company: string;
  duration: string;
  stipend: string;
  location: string;
  type: string;
  skills: string[];
}

export function InternshipCard({ 
  title, 
  company, 
  duration, 
  stipend, 
  location, 
  type, 
  skills 
}: InternshipCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow border-2 hover:border-[#1A73E8]">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <CardTitle className="text-lg leading-snug">{title}</CardTitle>
            <div className="flex items-center gap-2 mt-2">
              <Building className="h-4 w-4 text-gray-500" />
              <span className="text-gray-600">{company}</span>
            </div>
          </div>
          <Badge 
            variant={type === 'Remote' ? 'secondary' : 'outline'}
            className="shrink-0"
          >
            {type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">{location}</span>
          </div>
          <div className="flex items-center gap-2 sm:col-span-2">
            <DollarSign className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">{stipend}</span>
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-sm font-medium text-gray-700">Required Skills:</span>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <Button 
          className="w-full bg-[#28A745] hover:bg-[#228B3C] text-white"
        >
          Apply Now
        </Button>
      </CardContent>
    </Card>
  );
}