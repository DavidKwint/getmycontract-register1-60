
import React from 'react';
import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';
import testimonial3 from '@/assets/testimonial-3.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Was ist dir lieber: Ordner durchwälzen oder in zwei Minuten einen Überblick? Das Tool spart mir pro Kunde mindestens 30 Minuten – besonders am Anfang der Beratung.",
      author: "Martin Weber",
      position: "Selbstständiger Versicherungsmakler",
      avatar: testimonial1
    },
    {
      quote: "Der größte Pain ist das Sammeln und Prüfen der Unterlagen. Wenn das automatisch in mein System fließt, spart mir das mindestens 45 Minuten pro Kunde.",
      author: "Stefan Fischer",
      position: "Finanzierungsberater",
      avatar: testimonial2
    },
    {
      quote: "GetMyContract gibt mir in drei Minuten alle Daten, die ich zum Arbeiten brauche – alles vom Kunden inklusive Kreditraten, Ausgaben und Gehaltsnachweise.",
      author: "Andreas Müller",
      position: "BauFi-Berater",
      avatar: testimonial3
    }
  ];
  
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Das sagen unsere Kunden
          </h2>
          <p className="text-muted-foreground text-lg">
            Echte Erfahrungen von Beratern, die täglich mit GetMyContract arbeiten
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-border bg-background/80 backdrop-blur-sm hover:border-border/60 transition-all duration-300 flex flex-col h-full"
            >
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary inline-block mr-1">★</span>
                ))}
              </div>
              <p className="text-lg mb-8 text-foreground/90 italic flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
