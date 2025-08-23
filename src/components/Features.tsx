import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, FileText, PieChart, Shield, Handshake, Link, Lock } from "lucide-react";
const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  const features = [{
    title: "Verträge im Blick",
    description: "Alle Versicherungen und Kredite Ihrer Kunden in einer Übersicht.",
    expandedDescription: "GetMyContract erkennt automatisch bestehende Versicherungen, Verträge und laufende Kredite aus den Kontobewegungen Ihrer Kunden. Sie sparen sich die manuelle Abfrage und haben in Sekunden einen vollständigen Überblick. So entgeht Ihnen kein Vertrag mehr – egal ob Kfz, Baufinanzierung oder Konsumentenkredit.",
    icon: <FileText size={24} className="text-primary" />
  }, {
    title: "Sofortige Haushaltsanalyse",
    description: "Einnahmen, Ausgaben und freie Budgets auf einen Blick.",
    expandedDescription: "Das Tool analysiert automatisch das Haushaltskonto: regelmäßige Einnahmen, Fixkosten und variable Ausgaben werden erkannt und strukturiert dargestellt. So können Sie sofort sehen, welche finanziellen Spielräume Ihre Kunden haben und wo Risiken oder Überschüsse bestehen – ohne, dass jemand Zahlen eintippen muss.",
    icon: <PieChart size={24} className="text-primary" />
  }, {
    title: "Vorsorgelücken erkennen",
    description: "Fehlende Absicherungen sofort sichtbar machen.",
    expandedDescription: "Auf Basis der Haushaltsanalyse zeigt GetMyContract, wo Versorgungslücken bestehen – etwa bei Altersvorsorge, Berufsunfähigkeit oder Risikoschutz. Sie können so gezielt passende Produkte aus Ihrem Portfolio empfehlen und erhöhen Ihre Abschlussquote, weil Sie die richtigen Argumente im richtigen Moment haben.",
    icon: <Shield size={24} className="text-primary" />
  }, {
    title: "Mandate sichern",
    description: "Verträge fremder Anbieter übernehmen und Provisionen sichern.",
    expandedDescription: "GetMyContract macht fremdverwaltete Verträge sichtbar. Über einfache Prozesse können Sie diese Maklermandate für sich beanspruchen und die Betreuung übernehmen. Das schützt Sie vor Abwanderung und eröffnet zusätzliche Umsatzpotenziale – bei bestehenden Kunden wie auch bei Neukunden.",
    icon: <Handshake size={24} className="text-primary" />
  }, {
    title: "Nahtlose Integration",
    description: "Direktanbindung an Ihre bestehenden Systeme.",
    expandedDescription: "Über die API-Schnittstelle können alle gewonnenen Daten nahtlos in Ihr CRM, Vergleichsrechner oder Finanzplaner-System (z. B. Europace, Finanzportal24) übertragen werden. Sie vermeiden Doppelarbeit und arbeiten wie gewohnt in Ihrer Umgebung – nur mit deutlich besseren Daten.",
    icon: <Link size={24} className="text-primary" />
  }, {
    title: "Datenschutz & Vertrauen",
    description: "BaFin-lizenziert, PSD2- & DSGVO-konform.",
    expandedDescription: "Datensicherheit steht an erster Stelle: GetMyContract nutzt ausschließlich zertifizierte Schnittstellen, ist von der BaFin lizenziert und erfüllt höchste Standards nach PSD2 und DSGVO. Ihre Kunden behalten jederzeit die volle Kontrolle, welche Daten sie freigeben. So bauen Sie Vertrauen auf – und senken gleichzeitig Ihre eigene Haftung.",
    icon: <Lock size={24} className="text-primary" />
  }];
  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };
  return <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl font-medium tracking-tighter md:text-3xl text-foreground">Ihr persönlicher Analyse Co-Pilot</h2>
          <p className="text-muted-foreground text-lg">Was wäre, wenn Sie sofort wüssten, welche Versicherungen, Verträge und Kredite Ihr Kunde bereits hat – und wo Lücken bestehen?</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <Collapsible key={index} open={openFeature === index} onOpenChange={() => toggleFeature(index)} className={`rounded-xl border ${openFeature === index ? 'border-primary/40' : 'border-border'} bg-card transition-all duration-300 hover:border-primary/30`}>
              <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${openFeature === index ? 'rotate-180' : ''}`} />
                </div>
                <h3 className="text-xl font-medium tracking-tighter mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 pt-2">
                <div className="pt-3 border-t border-border">
                  <p className="text-muted-foreground">{feature.expandedDescription}</p>
                </div>
              </CollapsibleContent>
            </Collapsible>)}
        </div>
      </div>
    </section>;
};
export default Features;