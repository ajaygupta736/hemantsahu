import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Hemant Sahu. Made with 
            <Heart size={16} className="text-red-500" />
            and lots of coffee.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;