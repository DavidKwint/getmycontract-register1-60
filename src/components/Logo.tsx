
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <img 
        src="/lovable-uploads/a65cfd05-c436-42ac-ac21-1645de6cd577.png" 
        alt="GetMyContract Logo" 
        className="h-8 w-8 object-contain"
      />
      <span className="text-xl font-bold text-foreground">GetMyContract</span>
    </div>
  );
};

export default Logo;
