import { ArrowRight, CheckCircle, Gift } from "lucide-react";
import { Button } from "@/components/ui/custom-button";
import { Card } from "@/components/ui/card";

export function CTA() {
  const benefits = [
    "14 gün ücretsiz deneme",
    "Kredi kartı gerektirmez",
    "Anında kurulum",
    "7/24 destek"
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-primary opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-glow rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 gradient-soft border-primary/20 shadow-glow">
          <div className="text-center">
            {/* Special offer badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
              <Gift className="w-4 h-4" />
              <span className="text-sm font-semibold">Özel Kampanya - İlk 100 Stüdyoya %50 İndirim!</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-gradient">Stüdyonuzu</span> Dijitale Taşıyın
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Türkiye'nin 1000+ tırnak stüdyosunun tercih ettiği platform ile siz de büyümeye başlayın
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl" className="group">
                Hemen Ücretsiz Deneyin
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl">
                Demo Talep Et
              </Button>
            </div>

            {/* Trust text */}
            <p className="text-sm text-muted-foreground mt-6">
              Dilediğiniz zaman iptal edebilirsiniz. Gizli ücret yoktur.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}