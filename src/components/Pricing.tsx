import { Check, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/custom-button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Başlangıç",
    description: "Küçük stüdyolar için ideal",
    price: "299",
    currency: "₺",
    period: "/ay",
    popular: false,
    features: [
      { name: "1 Personel", included: true },
      { name: "100 Randevu/ay", included: true },
      { name: "SMS Hatırlatma (50 adet)", included: true },
      { name: "Temel Raporlama", included: true },
      { name: "Müşteri Yönetimi", included: true },
      { name: "Online Randevu", included: true },
      { name: "WhatsApp Entegrasyonu", included: false },
      { name: "AI Asistan", included: false },
      { name: "Özel Domain", included: false },
    ]
  },
  {
    name: "Profesyonel",
    description: "Büyüyen işletmeler için",
    price: "599",
    currency: "₺",
    period: "/ay",
    popular: true,
    features: [
      { name: "5 Personel", included: true },
      { name: "Sınırsız Randevu", included: true },
      { name: "Sınırsız SMS", included: true },
      { name: "Gelişmiş Raporlama", included: true },
      { name: "Müşteri Yönetimi", included: true },
      { name: "Online Randevu", included: true },
      { name: "WhatsApp Entegrasyonu", included: true },
      { name: "AI Asistan (100 çağrı)", included: true },
      { name: "Özel Domain", included: false },
    ]
  },
  {
    name: "Enterprise",
    description: "Çok şubeli işletmeler için",
    price: "1299",
    currency: "₺",
    period: "/ay",
    popular: false,
    features: [
      { name: "Sınırsız Personel", included: true },
      { name: "Sınırsız Randevu", included: true },
      { name: "Sınırsız SMS", included: true },
      { name: "Özel Raporlar", included: true },
      { name: "Müşteri Yönetimi", included: true },
      { name: "Online Randevu", included: true },
      { name: "WhatsApp Entegrasyonu", included: true },
      { name: "Sınırsız AI Asistan", included: true },
      { name: "Özel Domain", included: true },
    ]
  }
];

export function Pricing() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-soft opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Şeffaf Fiyatlandırma</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            İşletmenizin büyüklüğüne göre esnek planlar
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">14 Gün Ücretsiz Deneme</span>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative p-8 ${
                plan.popular 
                  ? 'border-2 border-primary shadow-glow scale-105' 
                  : 'border-border/50'
              } hover:shadow-lg transition-all duration-300`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground border-0">
                  En Popüler
                </Badge>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-2xl text-foreground">{plan.currency}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                    )}
                    <span className={feature.included ? 'text-foreground' : 'text-muted-foreground/50'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "hero" : "outline"} 
                size="lg"
                className="w-full"
              >
                Hemen Başla
              </Button>
            </Card>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Tüm planlar KDV dahildir. İstediğiniz zaman iptal edebilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
}