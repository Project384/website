import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, Search, Target, CheckCircle } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 bg-[#1A73E8] text-white text-sm font-medium rounded-full">
                SIH 2025
              </div>
              <div className="px-3 py-1 bg-[#28A745] text-white text-sm font-medium rounded-full">
                Government Initiative
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Find Your Perfect Internship with AI
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Smart India Hackathon 2025 presents an AI-powered internship recommendation system that connects talented students with government and private sector opportunities across India.
            </p>
            <Button 
              size="lg"
              onClick={() => onNavigate('signup')}
              className="bg-[#1A73E8] hover:bg-[#1557c7] text-white px-8 py-3 text-lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1675664535114-99fcb3c80c82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxhcHRvcCUyMGludGVybnNoaXAlMjBtb2Rlcm58ZW58MXx8fHwxNzU3NTIzOTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Students working on laptops"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Smart India Hackathon 2025 solution: Three simple steps to find your ideal internship opportunity
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6 border-2 hover:border-[#1A73E8] transition-colors">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-[#1A73E8] rounded-full flex items-center justify-center mx-auto">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                1. Enter Details
              </h3>
              <p className="text-gray-600">
                Share your skills, education, and preferences with our intelligent system
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-2 hover:border-[#28A745] transition-colors">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-[#28A745] rounded-full flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                2. AI Recommends
              </h3>
              <p className="text-gray-600">
                Our AI analyzes thousands of opportunities to find your perfect matches
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-2 hover:border-[#1A73E8] transition-colors">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-[#1A73E8] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                3. Apply
              </h3>
              <p className="text-gray-600">
                Apply directly through the PM Internship Portal with one click
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Integration Banner */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#1A73E8] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">AI</span>
            </div>
            <span className="text-2xl text-gray-400">×</span>
            <div className="w-12 h-12 bg-[#28A745] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">PM</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            SIH 2025 Innovation – Integrated with PM Internship Portal
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A Smart India Hackathon 2025 solution providing secure access to thousands of verified internship opportunities from government ministries, PSUs, and private organizations nationwide.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#1A73E8] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900">InternPath AI</span>
                <span className="text-xs text-[#1A73E8] font-medium">SIH 2025</span>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-gray-600">
              <button 
                onClick={() => onNavigate('about')}
                className="hover:text-gray-900 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="hover:text-gray-900 transition-colors"
              >
                Contact
              </button>
              <button 
                onClick={() => onNavigate('help')}
                className="hover:text-gray-900 transition-colors"
              >
                Help
              </button>
              <button className="hover:text-gray-900 transition-colors">Privacy Policy</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}