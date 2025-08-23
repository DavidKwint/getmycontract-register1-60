import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import FinancialDashboard from './FinancialDashboard';
import { Loader } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  return <section className="relative w-full py-12 md:py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Cosmic particle effect (background dots) */}
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>
      
      {/* Gradient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
        <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
      </div>
      
      <div className={`relative z-10 max-w-4xl text-center space-y-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            Für Versicherungs- & Finanzprofis
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground">
          Haushaltsanalyse per Knopfdruck
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-balance">
          Starten Sie Ihr Beratungsgespräch nicht mit Fragen, sondern mit Antworten.<br />
          GetMyContract liefert Ihnen in 60 Sekunden die komplette Finanzübersicht Ihrer Kunden – ohne einen einzigen Kontoauszug.
        </p>
        
        {/* Quality certifications */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground pt-4">
          <div className="flex items-center gap-1.5">
            <span className="text-primary font-bold">✓</span>
            <span>BaFin-lizenziert</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-primary font-bold">✓</span>
            <span>ISO 27001</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-primary font-bold">✓</span>
            <span>DSGVO-konform</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-primary font-bold">✓</span>
            <span>Made in Germany</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center">
          <Button 
            onClick={() => navigate('/signup')}
            className="bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px]"
          >
            Kostenlos Testen
          </Button>
          <Button variant="outline" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px]">
            Demo Buchen
          </Button>
        </div>
        
        <div className="pt-6 text-sm text-muted-foreground">
          Keine Kreditkarte nötig • Gratis 14 Tage
        </div>
      </div>
      
      {/* Dashboard Preview Image */}
      <div className={`w-full max-w-6xl mt-16 z-10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <img 
          src="/lovable-uploads/ef68468d-d797-480b-9ea6-dad30d58f033.png" 
          alt="GetMyContract Dashboard Preview" 
          className="w-full h-auto rounded-xl shadow-2xl border border-border/20"
        />
      </div>
    </section>;
};
export default HeroSection;