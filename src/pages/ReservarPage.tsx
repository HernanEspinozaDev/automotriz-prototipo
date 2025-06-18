import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, CheckCircle, ArrowLeft, Wrench, Siren as Tire, Scan } from 'lucide-react';
import Navbar from '../components/Navbar';

const ReservarPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const timeSlots = [
    { time: '09:00', available: true },
    { time: '10:00', available: false },
    { time: '11:00', available: true },
    { time: '12:00', available: true },
    { time: '14:00', available: false },
    { time: '15:00', available: true },
    { time: '16:00', available: true },
    { time: '17:00', available: false },
  ];

  const saturdayTimeSlots = [
    { time: '09:00', available: true },
    { time: '10:00', available: true },
    { time: '11:00', available: false },
    { time: '12:00', available: true },
    { time: '13:00', available: true },
  ];

  const services = [
    { id: 'mantencion', name: 'Mantención General', duration: '2 horas', price: '$45.000', icon: Wrench },
    { id: 'aceite', name: 'Cambio de Aceite/Filtros', duration: '45 min', price: '$25.000', icon: Wrench },
    { id: 'neumaticos', name: 'Venta de Neumáticos', duration: '1 hora', price: 'Consultar', icon: Tire },
    { id: 'vulcanizacion', name: 'Vulcanización', duration: '30 min', price: '$15.000', icon: Tire },
    { id: 'mecanica', name: 'Mecánica General', duration: '3 horas', price: 'Consultar', icon: Wrench },
    { id: 'escaner', name: 'Escáner Computarizado', duration: '30 min', price: '$20.000', icon: Scan },
  ];

  const handleConfirmBooking = () => {
    if (!selectedDate || !selectedTime || !selectedService) {
      alert('Por favor completa todos los campos');
      return;
    }

    setShowSuccess(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 3000);
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getAvailableTimeSlots = () => {
    if (!selectedDate) return timeSlots;
    
    const selectedDateObj = new Date(selectedDate);
    const dayOfWeek = selectedDateObj.getDay();
    
    // Saturday (6) has different hours
    if (dayOfWeek === 6) {
      return saturdayTimeSlots;
    }
    
    // Sunday (0) is closed
    if (dayOfWeek === 0) {
      return [];
    }
    
    return timeSlots;
  };

  const isDateDisabled = (dateString: string) => {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0; // Sunday is closed
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar isAuthenticated={true} />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="bg-surface rounded-2xl shadow-2xl p-8 text-center max-w-md mx-4">
            <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              ¡Reserva Confirmada!
            </h2>
            <p className="text-text-secondary mb-6">
              Tu cita ha sido agendada correctamente. Te esperamos en Lubricentro Automas Quillota.
            </p>
            <div className="bg-background p-4 rounded-lg mb-6">
              <p className="text-sm text-text-secondary">Detalles de tu cita:</p>
              <p className="font-medium text-text-primary">
                {services.find(s => s.id === selectedService)?.name}
              </p>
              <p className="text-text-secondary">
                {selectedDate} a las {selectedTime}
              </p>
              <p className="text-sm text-text-secondary mt-2">
                Avenida 21 de mayo 223, Quillota
              </p>
            </div>
            <p className="text-sm text-text-secondary">
              Redirigiendo al dashboard...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated={true} />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Volver al Dashboard</span>
          </button>
        </div>

        <div className="bg-surface rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-text-primary mb-2">
              Reservar una Cita
            </h1>
            <p className="text-text-secondary">
              Selecciona el servicio, fecha y horario para tu vehículo en Lubricentro Automas Quillota
            </p>
          </div>

          {/* Service Selection */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center">
              <Wrench className="h-6 w-6 mr-2 text-primary" />
              Selecciona el Servicio
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedService === service.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <IconComponent className="h-6 w-6 text-primary" />
                      <h3 className="font-semibold text-text-primary">{service.name}</h3>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-text-secondary">{service.duration}</span>
                      <span className="font-bold text-primary">{service.price}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Date Selection */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center">
              <Calendar className="h-6 w-6 mr-2 text-primary" />
              Selecciona la Fecha
            </h2>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => {
                if (!isDateDisabled(e.target.value)) {
                  setSelectedDate(e.target.value);
                  setSelectedTime(''); // Reset time when date changes
                }
              }}
              min={getTodayDate()}
              className="w-full md:w-auto px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
            />
            <p className="text-sm text-text-secondary mt-2">
              Horarios: Lunes a Viernes 9:00-18:00 hrs | Sábados 9:00-14:00 hrs | Domingos cerrado
            </p>
          </div>

          {/* Time Selection */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center">
              <Clock className="h-6 w-6 mr-2 text-primary" />
              Selecciona la Hora
            </h2>
            {selectedDate && isDateDisabled(selectedDate) ? (
              <p className="text-red-600 font-medium">Los domingos permanecemos cerrados</p>
            ) : (
              <>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {getAvailableTimeSlots().map((slot) => (
                    <button
                      key={slot.time}
                      onClick={() => slot.available && setSelectedTime(slot.time)}
                      disabled={!slot.available}
                      className={`p-3 rounded-lg font-medium transition-all ${
                        !slot.available
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed line-through'
                          : selectedTime === slot.time
                          ? 'bg-primary text-white shadow-lg'
                          : 'bg-background hover:bg-primary/10 text-text-primary border border-gray-300 hover:border-primary'
                      }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-text-secondary mt-2">
                  Los horarios tachados no están disponibles
                </p>
              </>
            )}
          </div>

          {/* Booking Summary */}
          {selectedService && selectedDate && selectedTime && (
            <div className="bg-primary/5 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-text-primary mb-3">Resumen de tu Reserva</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Servicio:</span>
                  <span className="font-medium">{services.find(s => s.id === selectedService)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Fecha:</span>
                  <span className="font-medium">{selectedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Hora:</span>
                  <span className="font-medium">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Duración:</span>
                  <span className="font-medium">{services.find(s => s.id === selectedService)?.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Ubicación:</span>
                  <span className="font-medium">Av. 21 de mayo 223, Quillota</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-text-secondary">Precio:</span>
                  <span className="font-bold text-primary text-lg">{services.find(s => s.id === selectedService)?.price}</span>
                </div>
              </div>
            </div>
          )}

          {/* Confirm Button */}
          <button
            onClick={handleConfirmBooking}
            disabled={!selectedDate || !selectedTime || !selectedService || isDateDisabled(selectedDate)}
            className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-colors ${
              selectedDate && selectedTime && selectedService && !isDateDisabled(selectedDate)
                ? 'bg-primary hover:bg-primary-dark text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Confirmar Reserva
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservarPage;