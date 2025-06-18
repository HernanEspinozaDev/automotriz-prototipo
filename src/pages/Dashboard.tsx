import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, User, Clock, Settings, LogOut, Wrench } from 'lucide-react';
import Navbar from '../components/Navbar';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const userStr = localStorage.getItem('automotrizUser');
  const user = userStr ? JSON.parse(userStr) : null;

  const handleLogout = () => {
    localStorage.removeItem('automotrizUser');
    navigate('/');
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated={true} />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl text-white p-8 mb-8">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-3 rounded-full">
              <User className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">
                Bienvenido de vuelta, {user.name}
              </h1>
              <p className="text-white/90 mt-2">
                Gestiona tus citas en Lubricentro Automas Quillota
              </p>
            </div>
          </div>
        </div>

        {/* User Info Card */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-surface rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center">
              <User className="h-6 w-6 mr-2 text-primary" />
              Información Personal
            </h2>
            <div className="space-y-3">
              <div>
                <label className="text-text-secondary text-sm">Nombre</label>
                <p className="text-text-primary font-medium">{user.name}</p>
              </div>
              <div>
                <label className="text-text-secondary text-sm">Correo Electrónico</label>
                <p className="text-text-primary font-medium">{user.email}</p>
              </div>
              <div>
                <label className="text-text-secondary text-sm">Estado de la cuenta</label>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Activa
                </span>
              </div>
            </div>
          </div>

          <div className="bg-surface rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center">
              <Clock className="h-6 w-6 mr-2 text-primary" />
              Próximas Citas
            </h2>
            <div className="text-center py-8">
              <Calendar className="h-12 w-12 text-text-secondary mx-auto mb-4" />
              <p className="text-text-secondary">No tienes citas programadas</p>
              <button
                onClick={() => navigate('/reservar')}
                className="mt-4 text-primary hover:text-primary-dark font-medium"
              >
                Reservar una cita
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-surface rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-text-primary mb-6">Acciones Rápidas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <button
              onClick={() => navigate('/reservar')}
              className="bg-primary hover:bg-primary-dark text-white p-6 rounded-xl transition-colors text-left"
            >
              <Calendar className="h-8 w-8 mb-3" />
              <h3 className="font-bold text-lg mb-2">Reservar una Hora</h3>
              <p className="text-white/90 text-sm">
                Agenda tu próxima cita de mantención
              </p>
            </button>
            
            <button className="bg-gray-100 hover:bg-gray-200 text-text-primary p-6 rounded-xl transition-colors text-left">
              <Wrench className="h-8 w-8 mb-3 text-primary" />
              <h3 className="font-bold text-lg mb-2">Mis Servicios</h3>
              <p className="text-text-secondary text-sm">
                Historial de mantenciones realizadas
              </p>
            </button>
            
            <button className="bg-gray-100 hover:bg-gray-200 text-text-primary p-6 rounded-xl transition-colors text-left">
              <Settings className="h-8 w-8 mb-3 text-primary" />
              <h3 className="font-bold text-lg mb-2">Configuración</h3>
              <p className="text-text-secondary text-sm">
                Ajusta las preferencias de tu cuenta
              </p>
            </button>
          </div>
        </div>

        {/* Business Info */}
        <div className="bg-surface rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-text-primary mb-6">Información del Taller</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-text-primary mb-2">Horarios de Atención</h3>
              <div className="space-y-1 text-text-secondary">
                <p>Lunes a Viernes: 9:00 - 18:00 hrs</p>
                <p>Sábados: 9:00 - 14:00 hrs</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-text-primary mb-2">Ubicación</h3>
              <p className="text-text-secondary">
                Avenida 21 de mayo 223<br />
                Quillota, Chile 2260000
              </p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-surface rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-text-primary mb-6">Actividad Reciente</h2>
          <div className="text-center py-8">
            <Clock className="h-12 w-12 text-text-secondary mx-auto mb-4" />
            <p className="text-text-secondary mb-4">No hay actividad reciente</p>
            <p className="text-sm text-text-secondary">
              Tu historial de servicios aparecerá aquí una vez que realices tu primera cita
            </p>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleLogout}
            className="inline-flex items-center space-x-2 text-text-secondary hover:text-red-600 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;