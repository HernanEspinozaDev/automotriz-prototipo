import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrench, Shield, Clock, Star, Phone, Mail, MapPin, Scan, Siren as Tire } from 'lucide-react';
import Navbar from '../components/Navbar';
import logoAutomas from '../assets/automaslogo.jpeg';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    const user = localStorage.getItem('automotrizUser');
    if (user) {
      navigate('/reservar');
    } else {
      navigate('/login');
    }
  };

  const isAuthenticated = !!localStorage.getItem('automotrizUser');

  return (
    <div className="min-h-screen">
      <Navbar isAuthenticated={isAuthenticated} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light to-primary py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Lubricentro Automas Quillota
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Mantención general, cambios de aceite, venta de neumáticos, vulcanización, mecánica general y escáner. Tu auto en las mejores manos.
          </p>
          <button 
            onClick={handleBookingClick}
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center space-x-2"
          >
            <Clock className="h-6 w-6" />
            <span>Reserva tu hora de mantención</span>
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-surface p-6 rounded-lg shadow-lg text-center">
              <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mantención General</h3>
              <p className="text-text-secondary">
                Servicio completo de mantención para tu vehículo
              </p>
            </div>
            <div className="bg-surface p-6 rounded-lg shadow-lg text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cambios de Aceite/Filtros</h3>
              <p className="text-text-secondary">
                Cambio de aceite y filtros con los mejores productos
              </p>
            </div>
            <div className="bg-surface p-6 rounded-lg shadow-lg text-center">
              <Tire className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Venta de Neumáticos</h3>
              <p className="text-text-secondary">
                Amplio stock de neumáticos de las mejores marcas
              </p>
            </div>
            <div className="bg-surface p-6 rounded-lg shadow-lg text-center">
              <Tire className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Vulcanización</h3>
              <p className="text-text-secondary">
                Reparación profesional de neumáticos
              </p>
            </div>
            <div className="bg-surface p-6 rounded-lg shadow-lg text-center">
              <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mecánica General</h3>
              <p className="text-text-secondary">
                Reparaciones y mantención mecánica especializada
              </p>
            </div>
            <div className="bg-surface p-6 rounded-lg shadow-lg text-center">
              <Scan className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Escáner</h3>
              <p className="text-text-secondary">
                Diagnóstico computarizado de tu vehículo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 px-4 bg-surface">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-12">
            Horarios de Atención
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background p-8 rounded-lg">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Lunes a Viernes</h3>
              <p className="text-3xl font-bold text-primary">9:00 - 18:00 hrs</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Sábados</h3>
              <p className="text-3xl font-bold text-primary">9:00 - 14:00 hrs</p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="noticias" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
            Últimas Noticias
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Nuevos Servicios de Escáner</h3>
              <p className="text-text-secondary mb-4">
                Ahora contamos con equipos de diagnóstico computarizado de última generación para detectar cualquier falla en tu vehículo.
              </p>
              <span className="text-primary font-medium">15 Nov 2024</span>
            </div>
            <div className="bg-surface p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Promoción en Neumáticos</h3>
              <p className="text-text-secondary mb-4">
                Aprovecha nuestras ofertas especiales en neumáticos de primeras marcas. Consulta por financiamiento disponible.
              </p>
              <span className="text-primary font-medium">10 Nov 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-16 px-4 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Sobre Lubricentro Automas Quillota
              </h2>
              <p className="text-text-secondary mb-4">
                Somos un emprendimiento familiar dedicado al cuidado integral de tu vehículo. Ubicados en el corazón de Quillota, ofrecemos servicios especializados con la mejor atención personalizada.
              </p>
              <p className="text-text-secondary mb-6">
                Nuestro equipo cuenta con amplia experiencia en mantención general, mecánica, vulcanización y venta de neumáticos. Utilizamos tecnología de punta para el diagnóstico computarizado.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-text-secondary">Compromiso</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Familiar</div>
                  <div className="text-text-secondary">Emprendimiento</div>
                </div>
              </div>
            </div>
            <div className="bg-primary/10 p-8 rounded-lg flex items-center justify-center">
              <img 
                src={logoAutomas}
                alt="Lubricentro Automas Quillota" 
                className="h-32 w-32 rounded-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="opiniones" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
            Opiniones de Clientes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                rating: 5,
                comment: "Excelente atención y muy profesionales. El cambio de aceite fue rápido y a buen precio."
              },
              {
                name: "Carlos Rodríguez",
                rating: 5,
                comment: "Compré neumáticos aquí y quedé muy satisfecho. Buenos precios y calidad garantizada."
              },
              {
                name: "Ana Martínez",
                rating: 5,
                comment: "El servicio de escáner me ayudó a detectar un problema a tiempo. Muy recomendado."
              }
            ].map((review, index) => (
              <div key={index} className="bg-surface p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-text-secondary mb-4">"{review.comment}"</p>
                <p className="font-semibold text-text-primary">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contactanos" className="py-16 px-4 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
            Contáctanos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
              <p className="text-text-secondary">Próximamente</p>
            </div>
            <div className="text-center">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-text-secondary">info@automasquillota.cl</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dirección</h3>
              <p className="text-text-secondary">
                Avenida 21 de mayo 223<br />
                Quillota, Chile 2260000
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-primary text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src={logoAutomas} 
              alt="Lubricentro Automas Quillota" 
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-xl font-bold">Lubricentro Automas Quillota</span>
          </div>
          <p className="text-gray-400 mb-2">
            Avenida 21 de mayo 223, Quillota, Chile
          </p>
          <p className="text-gray-400">
            © 2024 Lubricentro Automas Quillota. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;