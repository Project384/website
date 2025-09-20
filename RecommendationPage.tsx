import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { InternshipCard } from "./InternshipCard";
import { Sparkles, ArrowRight, Upload, FileText, X } from "lucide-react";

interface RecommendationPageProps {
  onNavigate: (page: string) => void;
}

export function RecommendationPage({ onNavigate }: RecommendationPageProps) {
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState<string>("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setUploadError("");
    
    if (file) {
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setUploadError("Please upload a PDF or DOC/DOCX file only");
        return;
      }
      
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setUploadError("File size must be less than 5MB");
        return;
      }
      
      setUploadedFile(file);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setUploadError("");
  };

  const handleGetRecommendations = () => {
    setIsLoading(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsLoading(false);
      setShowRecommendations(true);
    }, 2000);
  };

  const mockInternships = [
    {
      title: "Software Development Intern",
      company: "TechCorp India",
      duration: "3 months",
      stipend: "₹15,000/month",
      location: "Bangalore, Karnataka",
      type: "On-site",
      skills: ["JavaScript", "React", "Node.js"]
    },
    {
      title: "Data Science Intern",
      company: "Analytics Solutions",
      duration: "6 months",
      stipend: "₹20,000/month",
      location: "Mumbai, Maharashtra",
      type: "Hybrid",
      skills: ["Python", "Machine Learning", "SQL"]
    },
    {
      title: "Digital Marketing Intern",
      company: "Creative Agency",
      duration: "4 months",
      stipend: "₹12,000/month",
      location: "Delhi",
      type: "Remote",
      skills: ["Social Media", "Content Writing", "Analytics"]
    },
    {
      title: "UI/UX Design Intern",
      company: "Design Studio",
      duration: "3 months",
      stipend: "₹18,000/month",
      location: "Pune, Maharashtra",
      type: "On-site",
      skills: ["Figma", "Adobe XD", "User Research"]
    }
  ];

  if (showRecommendations) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-[#1A73E8]" />
              <h1 className="text-3xl font-bold text-gray-900">AI Recommendations</h1>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Based on your profile, we found {mockInternships.length} perfect internship matches for you
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mb-8">
            {mockInternships.map((internship, index) => (
              <InternshipCard key={index} {...internship} />
            ))}
          </div>

          <Card className="bg-gradient-to-r from-[#1A73E8] to-[#28A745] text-white">
            <CardHeader>
              <CardTitle className="text-center text-white">
                Ready to Apply?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-blue-100">
                SIH 2025 Innovation: All applications are processed through the official PM Internship Portal for your security and verification.
              </p>
              <Button 
                variant="secondary"
                size="lg"
                className="bg-white text-[#1A73E8] hover:bg-gray-100"
              >
                Go to PM Internship Portal
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="px-3 py-1 bg-[#1A73E8] text-white text-sm font-medium rounded-full">
              SIH 2025
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Find Your Perfect Internship
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tell us about yourself and let our Smart India Hackathon 2025 AI system recommend the best internship opportunities for you
          </p>
        </div>

        <div className="space-y-6">
          {/* Personal Information Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#1A73E8]" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input
                    id="mobile"
                    placeholder="Enter your mobile number"
                    type="tel"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Address Details Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#28A745]" />
                Address Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Full Address</Label>
                <Textarea
                  id="address"
                  placeholder="Enter your complete address"
                  className="min-h-20"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    placeholder="Enter your city"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="andaman-nicobar">Andaman and Nicobar Islands</SelectItem>
                      <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                      <SelectItem value="arunachal-pradesh">Arunachal Pradesh</SelectItem>
                      <SelectItem value="assam">Assam</SelectItem>
                      <SelectItem value="bihar">Bihar</SelectItem>
                      <SelectItem value="chandigarh">Chandigarh</SelectItem>
                      <SelectItem value="chhattisgarh">Chhattisgarh</SelectItem>
                      <SelectItem value="dadra-nagar-haveli-daman-diu">Dadra and Nagar Haveli and Daman and Diu</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="goa">Goa</SelectItem>
                      <SelectItem value="gujarat">Gujarat</SelectItem>
                      <SelectItem value="haryana">Haryana</SelectItem>
                      <SelectItem value="himachal-pradesh">Himachal Pradesh</SelectItem>
                      <SelectItem value="jammu-kashmir">Jammu and Kashmir</SelectItem>
                      <SelectItem value="jharkhand">Jharkhand</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="kerala">Kerala</SelectItem>
                      <SelectItem value="ladakh">Ladakh</SelectItem>
                      <SelectItem value="lakshadweep">Lakshadweep</SelectItem>
                      <SelectItem value="madhya-pradesh">Madhya Pradesh</SelectItem>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="manipur">Manipur</SelectItem>
                      <SelectItem value="meghalaya">Meghalaya</SelectItem>
                      <SelectItem value="mizoram">Mizoram</SelectItem>
                      <SelectItem value="nagaland">Nagaland</SelectItem>
                      <SelectItem value="odisha">Odisha</SelectItem>
                      <SelectItem value="puducherry">Puducherry</SelectItem>
                      <SelectItem value="punjab">Punjab</SelectItem>
                      <SelectItem value="rajasthan">Rajasthan</SelectItem>
                      <SelectItem value="sikkim">Sikkim</SelectItem>
                      <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                      <SelectItem value="telangana">Telangana</SelectItem>
                      <SelectItem value="tripura">Tripura</SelectItem>
                      <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                      <SelectItem value="uttarakhand">Uttarakhand</SelectItem>
                      <SelectItem value="west-bengal">West Bengal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input
                    id="pincode"
                    placeholder="Enter pincode"
                    maxLength={6}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Internship Preferences Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#1A73E8]" />
                Internship Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="preferred-location">Preferred Location</Label>
                  <Input
                    id="preferred-location"
                    placeholder="e.g., Bangalore, Mumbai, Remote"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duration Preference</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1-3 months</SelectItem>
                      <SelectItem value="3-6">3-6 months</SelectItem>
                      <SelectItem value="6+">6+ months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Resume/CV Upload Section */}
              <div className="space-y-2">
                <Label htmlFor="resume">Upload CV/Resume</Label>
                <div className="space-y-3">
                  {!uploadedFile ? (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#1A73E8] transition-colors">
                      <input
                        type="file"
                        id="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <label
                        htmlFor="resume"
                        className="cursor-pointer flex flex-col items-center gap-2"
                      >
                        <Upload className="h-8 w-8 text-gray-400" />
                        <div className="text-sm text-gray-600">
                          <span className="text-[#1A73E8] font-medium">Click to upload</span> or drag and drop
                        </div>
                        <div className="text-xs text-gray-500">
                          PDF, DOC, DOCX (Max. 5MB)
                        </div>
                      </label>
                    </div>
                  ) : (
                    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-[#1A73E8]" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{uploadedFile.name}</p>
                            <p className="text-xs text-gray-500">
                              {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={removeFile}
                          className="text-gray-500 hover:text-red-500"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                  {uploadError && (
                    <p className="text-sm text-red-600">{uploadError}</p>
                  )}
                  <p className="text-xs text-gray-500">
                    Upload your resume or CV to help our AI provide more accurate recommendations based on your experience and qualifications.
                  </p>
                </div>
              </div>

              <Button 
                className="w-full bg-[#1A73E8] hover:bg-[#1557c7] text-white py-3"
                onClick={handleGetRecommendations}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                    AI is finding your perfect matches...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get AI Recommendations
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}