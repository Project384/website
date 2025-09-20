import { Button } from "./ui/button";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onNavigate('landing')}
        >
          <div className="w-8 h-8 bg-[#1A73E8] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">AI</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900">InternPath AI</span>
            <span className="text-xs text-[#1A73E8] font-medium">SIH 2025</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => onNavigate('landing')}
            className={`text-sm transition-colors ${
              currentPage === 'landing' ? 'text-[#1A73E8]' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate('dashboard')}
            className={`text-sm transition-colors ${
              currentPage === 'dashboard' ? 'text-[#1A73E8]' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => onNavigate('recommendations')}
            className={`text-sm transition-colors ${
              currentPage === 'recommendations' ? 'text-[#1A73E8]' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Find Internships
          </button>
          <button 
            onClick={() => onNavigate('about')}
            className={`text-sm transition-colors ${
              currentPage === 'about' ? 'text-[#1A73E8]' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => onNavigate('help')}
            className={`text-sm transition-colors ${
              currentPage === 'help' ? 'text-[#1A73E8]' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Help
          </button>
          <button 
            onClick={() => onNavigate('contact')}
            className={`text-sm transition-colors ${
              currentPage === 'contact' ? 'text-[#1A73E8]' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-3">
          {currentPage !== 'login' && currentPage !== 'signup' && (
            <>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onNavigate('login')}
                className="text-gray-600 hover:text-gray-900"
              >
                Login
              </Button>
              <Button 
                size="sm"
                onClick={() => onNavigate('signup')}
                className="bg-[#1A73E8] hover:bg-[#1557c7] text-white"
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}