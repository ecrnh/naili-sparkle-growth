import { 
  Calendar,
  Users,
  TrendingUp,
  Clock,
  DollarSign,
  Activity,
  Star,
  MessageSquare
} from "lucide-react";
import { Card } from "@/components/ui/card";

export function Dashboard() {
  const stats = [
    { label: "Bugünkü Randevular", value: "12", icon: Calendar, change: "+2" },
    { label: "Aktif Müşteriler", value: "248", icon: Users, change: "+18" },
    { label: "Aylık Gelir", value: "₺45.2K", icon: DollarSign, change: "+12%" },
    { label: "Doluluk Oranı", value: "%87", icon: Activity, change: "+5%" },
  ];

  const appointments = [
    { time: "09:00", customer: "Ayşe Yılmaz", service: "Jel Manikür", staff: "Elif" },
    { time: "10:30", customer: "Fatma Demir", service: "Protez Tırnak", staff: "Zeynep" },
    { time: "12:00", customer: "Merve Kaya", service: "Nail Art", staff: "Elif" },
    { time: "14:00", customer: "Selin Öz", service: "Klasik Manikür", staff: "Aylin" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Güçlü Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tüm işlemlerinizi tek ekrandan yönetin
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-7xl mx-auto">
          <Card className="p-8 shadow-xl border-border/50 bg-card/95 backdrop-blur-sm">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 bg-background/50 border-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <span className="text-xs text-green-600 font-medium">{stat.change}</span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Appointments Table */}
              <div className="lg:col-span-2">
                <Card className="p-6 bg-background/50 border-border/50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      Bugünkü Randevular
                    </h3>
                    <span className="text-sm text-muted-foreground">4 randevu</span>
                  </div>
                  <div className="space-y-3">
                    {appointments.map((apt, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="text-sm font-medium text-primary">{apt.time}</div>
                          <div>
                            <div className="font-medium text-foreground">{apt.customer}</div>
                            <div className="text-sm text-muted-foreground">{apt.service}</div>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {apt.staff}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <Card className="p-6 bg-background/50 border-border/50">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Hızlı İşlemler
                  </h3>
                  <div className="space-y-2">
                    <button className="w-full p-3 text-left rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-sm font-medium">
                      + Yeni Randevu
                    </button>
                    <button className="w-full p-3 text-left rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-colors text-sm font-medium">
                      + Müşteri Ekle
                    </button>
                    <button className="w-full p-3 text-left rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors text-sm font-medium">
                      + SMS Gönder
                    </button>
                  </div>
                </Card>

                <Card className="p-6 gradient-primary text-primary-foreground">
                  <div className="flex items-center justify-between mb-2">
                    <Star className="w-5 h-5" />
                    <span className="text-2xl font-bold">4.9</span>
                  </div>
                  <div className="text-sm opacity-90">Müşteri Memnuniyeti</div>
                  <div className="text-xs opacity-75 mt-1">248 değerlendirme</div>
                </Card>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Card className="p-4 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Bu Hafta</div>
                    <div className="text-xl font-bold">₺12,450</div>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-gradient-to-r from-secondary/10 to-secondary/5 border-secondary/20">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-8 h-8 text-secondary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Gönderilen SMS</div>
                    <div className="text-xl font-bold">156</div>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-accent" />
                  <div>
                    <div className="text-sm text-muted-foreground">Yeni Müşteri</div>
                    <div className="text-xl font-bold">+23</div>
                  </div>
                </div>
              </Card>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}