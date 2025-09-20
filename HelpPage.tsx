import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { 
  Search, 
  HelpCircle, 
  FileText, 
  User, 
  Settings, 
  Phone, 
  Mail, 
  MessageCircle,
  ChevronDown,
  ChevronRight,
  Book,
  Video,
  Download
} from "lucide-react";

interface HelpPageProps {
  onNavigate: (page: string) => void;
}

export function HelpPage({ onNavigate }: HelpPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const categories = [
    {
      icon: User,
      title: "Getting Started",
      description: "Learn the basics of using InternPath AI",
      color: "bg-blue-500"
    },
    {
      icon: Search,
      title: "Finding Internships",
      description: "How to search and apply for opportunities",
      color: "bg-green-500"
    },
    {
      icon: FileText,
      title: "Applications",
      description: "Managing your internship applications",
      color: "bg-purple-500"
    },
    {
      icon: Settings,
      title: "Account Settings",
      description: "Profile management and preferences",
      color: "bg-orange-500"
    }
  ];

  const faqs = [
    {
      question: "How does InternPath AI's recommendation system work?",
      answer: "Our AI analyzes your profile, skills, education, and preferences to match you with the most relevant internship opportunities. The system considers factors like your field of study, experience level, location preferences, and career goals to provide personalized recommendations."
    },
    {
      question: "Is InternPath AI connected to the PM Internship Portal?",
      answer: "Yes! InternPath AI is fully integrated with the official PM Internship Portal. All internships on our platform are government-verified, and applications are processed through the official portal for maximum security and authenticity."
    },
    {
      question: "How do I create an effective profile?",
      answer: "Complete all sections of your profile including personal details, education, skills, and upload your resume. The more information you provide, the better our AI can match you with relevant opportunities. Aim for at least 85% profile completion."
    },
    {
      question: "Can I apply for multiple internships?",
      answer: "Absolutely! You can apply for as many internships as you want. We recommend applying to 3-5 positions that closely match your interests and qualifications to increase your chances of success."
    },
    {
      question: "What file formats are supported for resume upload?",
      answer: "We accept PDF, DOC, and DOCX files up to 5MB in size. PDF format is recommended for best compatibility and formatting preservation."
    },
    {
      question: "How long does it take to get recommendations?",
      answer: "Our AI system provides instant recommendations as soon as you complete your profile. You'll see 3-5 matched internships within seconds of submitting your information."
    },
    {
      question: "Are all internships on InternPath AI paid?",
      answer: "InternPath AI features both paid and unpaid internships. Each listing clearly shows the stipend amount or indicates if it's an unpaid opportunity. You can filter results based on your preferences."
    },
    {
      question: "How do I track my application status?",
      answer: "Use your Dashboard to monitor all your applications. You'll see real-time updates on application status, interview schedules, and responses from employers."
    }
  ];

  const quickActions = [
    {
      icon: Book,
      title: "User Guide",
      description: "Step-by-step instructions for using InternPath AI"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Watch how-to videos for common tasks"
    },
    {
      icon: Download,
      title: "Download Resources",
      description: "Get templates and guides for better applications"
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge className="bg-[#1A73E8] text-white px-4 py-2">SIH 2025</Badge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get help with InternPath AI and make the most of your internship search
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search for help topics, tutorials, or FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>

        {/* Help Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{category.title}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#1A73E8] rounded-lg flex items-center justify-center">
                      <action.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{action.title}</h3>
                      <p className="text-sm text-gray-600">{action.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <CardTitle className="flex items-center justify-between text-lg">
                    <span>{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-500" />
                    )}
                  </CardTitle>
                </CardHeader>
                {expandedFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {filteredFaqs.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">Try searching with different keywords or browse our categories above.</p>
            </div>
          )}
        </section>

        {/* Contact Support */}
        <section>
          <Card className="bg-gradient-to-r from-[#1A73E8] to-[#28A745] text-white">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-white">
                Still Need Help?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-center text-blue-100">
                Can't find what you're looking for? Our SIH 2025 support team is here to help!
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Button 
                  variant="secondary"
                  className="bg-white text-[#1A73E8] hover:bg-gray-100 h-auto p-4 flex flex-col items-center gap-2"
                  onClick={() => onNavigate('contact')}
                >
                  <Mail className="h-6 w-6" />
                  <span>Email Support</span>
                  <span className="text-xs opacity-75">Get help via email</span>
                </Button>
                
                <Button 
                  variant="secondary"
                  className="bg-white text-[#1A73E8] hover:bg-gray-100 h-auto p-4 flex flex-col items-center gap-2"
                >
                  <Phone className="h-6 w-6" />
                  <span>Call Support</span>
                  <span className="text-xs opacity-75">Speak with our team</span>
                </Button>
                
                <Button 
                  variant="secondary"
                  className="bg-white text-[#1A73E8] hover:bg-gray-100 h-auto p-4 flex flex-col items-center gap-2"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>Live Chat</span>
                  <span className="text-xs opacity-75">Instant help available</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}