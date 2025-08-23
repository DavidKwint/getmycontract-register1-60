import React, { useState } from 'react';
import StepIndicator from '@/components/StepIndicator';
import EmailStep from '@/components/EmailStep';
import PersonalInfoStep from '@/components/PersonalInfoStep';
import CompanyInfoStep from '@/components/CompanyInfoStep';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';

interface SignupData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  companyName: string;
  employeeCount: string;
}

const SignupPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [signupData, setSignupData] = useState<SignupData>({ 
    email: '', 
    firstName: '', 
    lastName: '', 
    phone: '', 
    companyName: '', 
    employeeCount: '' 
  });
  const navigate = useNavigate();

  const handleNext = (stepData: Partial<SignupData>) => {
    setSignupData(prev => ({ ...prev, ...stepData }));
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      navigate('/');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <EmailStep onNext={handleNext} />;
      case 2:
        return <PersonalInfoStep onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <CompanyInfoStep onNext={handleNext} onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Background Effects */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
        <div className="w-full h-full opacity-5 bg-primary blur-[120px]"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-6 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={handleBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück
          </Button>
          
          <Logo />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              JETZT KOSTENLOS TESTEN!
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Sie erhalten einen unverbindlichen Testzugang für 14 Tage. Keine Kreditkarte erforderlich.
            </p>
          </div>

          {/* Step Indicator */}
          <StepIndicator currentStep={currentStep} totalSteps={3} />

          {/* Step Content */}
          <div className="mt-12">
            {renderStep()}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SignupPage;