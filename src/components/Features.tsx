import { 
  Calendar, 
  Users, 
  Bell, 
  BarChart3, 
  CreditCard, 
  Shield, 
  Smartphone,
  Zap,
  Brain,
  Globe,
  Award,
  Clock
} from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Calendar,
    title: "Akıllı Takvim Yönetimi",
    description: "Çakışmaları önleyen AI destekli randevu sistemi ile zamanınızı optimize edin.",
    gradient: "from-primary to-primary-hover"
  },
  {
    icon: Bell,
    title: "Otomatik Hatırlatmalar",
    description: "SMS, WhatsApp ve e-posta ile müşterilerinize otomatik hatırlatmalar gönderin.",
    gradient: "from-secondary to-primary"
  },
  {
    icon: Users,
    title: "Müşteri CRM",
    description: "Müşteri tercihlerini, geçmişini ve notlarını tek platformda saklayın.",
    gradient: "from-accent to-secondary"
  },
  {
    icon: BarChart3,
    title: "Detaylı Analizler",
    description: "Personel performansı, gelir analizi ve müşteri davranışlarını takip edin.",
    gradient: "from-primary-hover to-accent"
  },
  {
    icon: CreditCard,
    title: "Online Ödeme",
    description: "Güvenli online ödeme altyapısı ile nakit bağımlılığını azaltın.",
    gradient: "from-secondary to-accent"
  },
  {
    icon: Shield,
    title: "Veri Güvenliği",
    description: "KVKK uyumlu, güvenli altyapı ve otomatik yedekleme sistemi.",
    gradient: "from-primary to-secondary"
  },
  {
    icon: Smartphone,
    title: "Mobil Uyumlu",
    description: "Her cihazdan erişim imkanı ile işlerinizi her yerden yönetin.",
    gradient: "from-accent to-primary-hover"
  },
  {
    icon: Zap,
    title: "Hızlı Kurulum",
    description: "5 dakikada kurulum, hemen kullanmaya başlayın.",
    gradient: "from-primary-hover to-secondary"
  },
  {
    icon: Brain,
    title: "AI Asistan",
    description: "7/24 AI destekli çağrı merkezi ve otomatik randevu asistanı.",
    gradient: "from-secondary to-primary-hover"
  },
  {
    icon: Globe,
    title: "Online Rezervasyon",
    description: "Müşterileriniz 7/24 web sitenizden randevu alabilsin.",
    gradient: "from-primary to-accent"
  },
  {
    icon: Award,
    title: "Sadakat Programı",
    description: "Puan sistemi ve kampanyalarla müşteri sadakatini artırın.",
    gradient: "from-accent to-primary"
  },
  {
    icon: Clock,
    title: "Zaman Tasarrufu",
    description: "Otomasyonlarla günde 2 saat tasarruf edin.",
    gradient: "from-primary-hover to-accent"
  }
];

export function Features() {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Güçlü Özellikler</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tırnak stüdyonuzun ihtiyaç duyduğu tüm araçlar tek platformda
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-2.5 mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Ve daha fazlası için hemen başlayın
          </p>
        </div>
      </div>
    </section>
  );
}