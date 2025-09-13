import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground mb-2">
            © 2024 Naily. Tüm hakları saklıdır.
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Türkiye'de <Heart className="w-4 h-4 text-primary fill-primary" /> ile yapıldı
          </p>
        </div>
      </div>
    </footer>
  );
}