import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border py-10">
    <div className="container mx-auto px-4 text-center space-y-3">
      <div className="flex items-center justify-center gap-2">
        <Heart className="w-5 h-5 text-primary fill-primary" />
        <span className="font-display text-lg font-bold">அரன்பணி</span>
      </div>
      <p className="text-sm text-muted-foreground">
        கோயில்களை காப்போம் • Preserving our sacred heritage
      </p>
      <p className="text-xs text-muted-foreground">
        © 2026 Aranpani. Made with devotion.
      </p>
    </div>
  </footer>
);

export default Footer;
