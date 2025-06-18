import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import logoAutomas from '../assets/automaslogo.jpeg';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const testUser = {
    name: 'César Valdés',
    email: 'cesar@valdes.cl',
    password: 'password123'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
    setSuccess('');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.email === testUser.email && formData.password === testUser.password) {
      localStorage.setItem('automotrizUser', JSON.stringify(testUser));
      navigate('/dashboard');
    } else {
      setError('Correo electrónico o contraseña incorrectos');
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.password) {
      setError('Por favor completa todos los campos');
      return;
    }

    setSuccess('Cuenta creada exitosamente. Ahora puedes iniciar sesión.');
    setFormData({ name: '', email: '', password: '' });
    setIsLogin(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light to-primary flex items-center justify-center px-4">
      <div className="bg-surface rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src={logoAutomas}
              alt="Automás Lubricentro" 
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="text-2xl font-bold text-text-primary">Automás</span>
          </div>
          <h2 className="text-2xl font-bold text-text-primary">
            {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </h2>
          <p className="text-text-secondary mt-2">
            {isLogin ? 'Accede a tu cuenta para reservar' : 'Regístrate para comenzar'}
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex bg-background rounded-lg p-1 mb-6">
          <button
            onClick={() => {
              setIsLogin(true);
              setError('');
              setSuccess('');
            }}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
              isLogin 
                ? 'bg-primary text-white' 
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Iniciar Sesión
          </button>
          <button
            onClick={() => {
              setIsLogin(false);
              setError('');
              setSuccess('');
            }}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
              !isLogin 
                ? 'bg-primary text-white' 
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Registrarse
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}

        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-text-primary font-medium mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Tu nombre completo"
                required={!isLogin}
              />
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block text-text-primary font-medium mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-text-primary font-medium mb-2">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Tu contraseña"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-text-primary"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            {isLogin ? 'Ingresar' : 'Crear Cuenta'}
          </button>
        </form>

        {isLogin && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800 mb-2">
              <strong>Usuario de prueba:</strong>
            </p>
            <p className="text-sm text-blue-700">
              Email: cesar@valdes.cl<br />
              Contraseña: password123
            </p>
          </div>
        )}

        <div className="mt-6 text-center">
          <button 
            onClick={() => navigate('/')}
            className="text-text-secondary hover:text-primary transition-colors"
          >
            ← Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;