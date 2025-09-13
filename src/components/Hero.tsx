import { ArrowRight, Calendar, Users, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/custom-button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 gradient-soft opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-glow rounded-full blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-20 animate-float animation-delay-2000" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6 animate-fadeIn">
            <Badge className="px-4 py-2 text-sm font-medium gradient-primary text-primary-foreground border-0">
              <Sparkles className="w-4 h-4 mr-2" />
              Türkiye'nin En Akıllı Tırnak Stüdyosu Yönetim Platformu
            </Badge>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fadeInUp">
            <span className="text-gradient">Naily</span> ile
            <br />
            <span className="text-foreground">Stüdyonuzu</span>{" "}
            <span className="text-gradient">Büyütün</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 animate-fadeInUp animation-delay-200">
            Randevularınızı kolayca yönetin, müşterilerinizi mutlu edin,
            <br className="hidden md:block" />
            işinizi bir üst seviyeye taşıyın.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp animation-delay-400">
            <Button variant="hero" size="xl" className="group">
              Ücretsiz Deneyin
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl">
              Demo İzle
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fadeInUp animation-delay-600">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="w-5 h-5 text-primary mr-2" />
                <span className="text-3xl font-bold text-foreground">50K+</span>
              </div>
              <p className="text-muted-foreground">Aylık Randevu</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-primary mr-2" />
                <span className="text-3xl font-bold text-foreground">1000+</span>
              </div>
              <p className="text-muted-foreground">Mutlu Stüdyo</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-5 h-5 text-primary mr-2" />
                <span className="text-3xl font-bold text-foreground">%40</span>
              </div>
              <p className="text-muted-foreground">Gelir Artışı</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}