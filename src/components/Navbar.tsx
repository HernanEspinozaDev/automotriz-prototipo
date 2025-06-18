import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, LogOut } from 'lucide-react';

interface NavbarProps {
  isAuthenticated?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated = false }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('automotrizUser');
    navigate('/');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-surface shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/automaslogo.jpeg" 
              alt="Lubricentro Automas Quillota" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-text-primary">Automas Quillota</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('noticias')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Noticias
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('contactanos')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Contáctanos
            </button>
            <button 
              onClick={() => scrollToSection('opiniones')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Opiniones
            </button>
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/dashboard"
                  className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors"
                >
                  <User className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Salir</span>
                </button>
              </div>
            ) : (
              <Link 
                to="/login"
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors font-medium"
              >
                Iniciar Sesión
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;