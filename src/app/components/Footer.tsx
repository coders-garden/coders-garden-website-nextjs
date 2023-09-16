import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Coders Garden</p>
      </div>
    </footer>
  );
};

export default Footer;