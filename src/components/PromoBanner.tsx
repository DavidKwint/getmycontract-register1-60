import React from 'react';
import { Sparkles } from 'lucide-react';

const PromoBanner = () => {
  return (
    <div className="w-full bg-primary text-primary-foreground py-3 px-4 text-center">
      <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium">
        <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
        <span>Nur heute auf der DKM: Bezahle 3 Monate, erhalte zusätzliche 6 Monate kostenlos!</span>
        <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
      </div>
    </div>
  );
};

export default PromoBanner;
