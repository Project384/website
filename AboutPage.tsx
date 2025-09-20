import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Users, Target, Award, Zap, Brain, Shield, Globe, Heart } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Advanced machine learning algorithms analyze your profile and match you with the most relevant internship opportunities."
    },
    {
      icon: Shield,
      title: "Government Verified",
      description: "All internships are verified through the official PM Internship Portal, ensuring authenticity and security."
    },
    {
      icon: Globe,
      title: "Pan-India Reach",
      description: "Access opportunities from government ministries, PSUs, and private organizations across all states of India."
    },
    {
      icon: Zap,
      title: "Instant Recommendations",
      description: "Get personalized internship recommendations in seconds, not days or weeks of manual searching."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Verified Internships" },
    { number: "500+", label: "Partner Organizations" },
    { number: "50,000+", label: "Students Placed" },
    { number: "28", label: "States Covered" }
  ];

  const team = [
    {
      name: "SIH 2025 Development Team",
      role: "Smart India Hackathon Participants",
      description: "A dedicated team of developers, designers, and researchers working to solve India's internship placement challenges."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Badge className="bg-[#1A73E8] text-white px-4 py-2">SIH 2025</Badge>
              <Badge className="bg-[#28A745] text-white px-4 py-2">Government Initiative</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About InternPath AI
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A Smart India Hackathon 2025 solution revolutionizing how students discover and apply for internships across India through AI-powered recommendations and seamless government portal integration.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                InternPath AI was born from the Smart India Hackathon 2025 with a clear mission: to bridge the gap between talented students and meaningful internship opportunities across India. We believe every student deserves access to quality internships that align with their skills, interests, and career aspirations.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                By leveraging artificial intelligence and integrating with the government's PM Internship Portal, we're making the internship discovery process more efficient, transparent, and accessible to students from all backgrounds and regions.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-[#1A73E8]" />
                  <span className="text-sm font-medium text-gray-900">Precision Matching</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-[#28A745]" />
                  <span className="text-sm font-medium text-gray-900">Student-First Approach</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU3NTI0MTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose InternPath AI?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our SIH 2025 solution combines cutting-edge technology with government backing to provide the most comprehensive internship platform in India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1A73E8] to-[#28A745] rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#1A73E8] to-[#28A745] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Impact in Numbers</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Since our launch as part of SIH 2025, we've been making a significant impact on India's internship ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built by Students, for Students</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              InternPath AI is proudly developed as part of Smart India Hackathon 2025, representing the innovation and dedication of India's brightest minds.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="text-center p-8">
              <CardContent className="space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1A73E8] to-[#28A745] rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">SIH 2025 Development Team</h3>
                <p className="text-gray-600">Smart India Hackathon Participants</p>
                <p className="text-gray-600 leading-relaxed">
                  A dedicated team of developers, designers, and researchers working to solve India's internship placement challenges through innovative technology and user-centric design.
                </p>
                <div className="flex items-center justify-center gap-4 pt-4">
                  <Badge className="bg-[#1A73E8] text-white">Innovation</Badge>
                  <Badge className="bg-[#28A745] text-white">Impact</Badge>
                  <Badge className="bg-purple-600 text-white">Excellence</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Government Integration */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#1A73E8] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="text-3xl text-gray-400">×</span>
              <div className="w-16 h-16 bg-[#28A745] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">PM</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powered by Government Partnership
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              InternPath AI operates in full integration with the PM Internship Portal, ensuring that all opportunities are government-verified, secure, and aligned with national skill development initiatives. This partnership guarantees authenticity and provides students with access to the most prestigious internship programs across India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}