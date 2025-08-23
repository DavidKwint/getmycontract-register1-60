
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 md:px-12 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <div>© 2025 GetMyContract. All rights reserved.</div>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
