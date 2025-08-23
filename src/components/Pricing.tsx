
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plan = {
    name: "GetMyContract Professional",
    price: "49€",
    period: "pro Monat",
    description: "Steigern Sie Ihren Beratungserfolg mit professioneller Vertragsanalyse",
    features: [
      "360°-Kundenprofil auf einen Blick",
      "Unbegrenzte Vertragsanalysen",
      "Liquiditäts- & Verpflichtungsanalyse",
      "Automatische Vertrags- & Vorsorge-Lücken-Erkennung",
      "Lebens- & Wohnsituation-Assessment",
      "Live-Kundenanalyse & Reporting",
      "API-Zugang",
      "BaFin-konforme Dokumentation",
      "DSGVO-konforme Datenverarbeitung",
      "ISO 27001 zertifizierte Sicherheit",
      "Priority Support"
    ],
    buttonText: "14 Tage kostenlos testen",
    buttonVariant: "default",
    popular: true
  };
  
  return (
    <section id="pricing" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Einfache Preisgestaltung
          </h2>
          <p className="text-muted-foreground text-lg">
            Steigern Sie Ihren Beratungserfolg mit GetMyContract
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="max-w-md w-full">
            <div className="p-8 rounded-xl border border-primary/50 cosmic-glow bg-card transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                Beliebt
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium tracking-tighter mb-2 text-foreground">{plan.name}</h3>
                
                <div className="mb-4">
                  <div className="text-4xl font-bold tracking-tighter text-foreground">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">{plan.period}</div>
                </div>
                
                <p className="text-muted-foreground mb-6">{plan.description}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-sm text-foreground leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-medium"
                variant="default"
                asChild
              >
                <Link to="/signup">{plan.buttonText}</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center text-muted-foreground">
          Fragen? <a href="#" className="text-primary hover:underline">Kontaktieren Sie unser Team</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
