import { 
  Calendar,
  Users,
  TrendingUp,
  Clock,
  DollarSign,
  Activity,
  Star,
  MessageSquare,
  ChevronRight,
  Plus,
  AlertCircle
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Dashboard() {
  const stats = [
    { 
      label: "Bugünkü Randevular", 
      value: "12", 
      icon: Calendar, 
      change: "+2",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    { 
      label: "Aktif Müşteriler", 
      value: "248", 
      icon: Users, 
      change: "+18",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    { 
      label: "Aylık Gelir", 
      value: "₺45.2K", 
      icon: DollarSign, 
      change: "+12%",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    { 
      label: "Doluluk Oranı", 
      value: "%87", 
      icon: Activity, 
      change: "+5%",
      color: "text-green-600",
      bgColor: "bg-green-600/10"
    },
  ];

  const upcomingAppointments = [
    { 
      time: "09:00", 
      customer: "Ayşe Yılmaz", 
      service: "Jel Manikür", 
      staff: "Elif",
      duration: "45 dk",
      status: "confirmed"
    },
    { 
      time: "10:30", 
      customer: "Fatma Demir", 
      service: "Protez Tırnak", 
      staff: "Zeynep",
      duration: "90 dk",
      status: "confirmed"
    },
    { 
      time: "12:00", 
      customer: "Merve Kaya", 
      service: "Nail Art", 
      staff: "Elif",
      duration: "60 dk",
      status: "pending"
    },
    { 
      time: "14:00", 
      customer: "Selin Öz", 
      service: "Klasik Manikür", 
      staff: "Aylin",
      duration: "30 dk",
      status: "confirmed"
    },
  ];

  const staffPerformance = [
    { name: "Elif", appointments: 8, revenue: "₺2,400", rating: 4.9 },
    { name: "Zeynep", appointments: 6, revenue: "₺1,800", rating: 4.8 },
    { name: "Aylin", appointments: 5, revenue: "₺1,500", rating: 4.7 },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Hoş geldiniz! İşte bugünkü özet bilgileriniz.
        </p>
      </div>

      {/* Alert */}
      <Alert className="border-primary/50 bg-primary/5">
        <AlertCircle className="h-4 w-4 text-primary" />
        <AlertDescription>
          <strong>Hatırlatma:</strong> Bugün 3 müşterinize doğum günü mesajı göndermeyi unutmayın!
        </AlertDescription>
      </Alert>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className={`rounded-lg p-2 ${stat.bgColor}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <Badge variant="secondary" className="text-green-600">
                  {stat.change}
                </Badge>
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-glow to-transparent" />
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Upcoming Appointments */}
        <Card className="lg:col-span-2">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold">Yaklaşan Randevular</h2>
                <p className="text-sm text-muted-foreground">Bugün 4 randevu var</p>
              </div>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Yeni Randevu
              </Button>
            </div>
            
            <div className="space-y-3">
              {upcomingAppointments.map((apt, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">{apt.time}</p>
                      <p className="text-xs text-muted-foreground">{apt.duration}</p>
                    </div>
                    <div className="border-l border-border pl-4">
                      <p className="font-medium">{apt.customer}</p>
                      <p className="text-sm text-muted-foreground">{apt.service}</p>
                      <p className="text-xs text-muted-foreground mt-1">Personel: {apt.staff}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={apt.status === "confirmed" ? "default" : "secondary"}>
                      {apt.status === "confirmed" ? "Onaylı" : "Bekliyor"}
                    </Badge>
                    <Button size="icon" variant="ghost">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="w-full mt-4">
              Tüm Randevuları Gör
            </Button>
          </div>
        </Card>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Hızlı İşlemler
              </h3>
              <div className="grid gap-2">
                <Button variant="outline" className="justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Randevu Oluştur
                </Button>
                <Button variant="outline" className="justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Müşteri Ekle
                </Button>
                <Button variant="outline" className="justify-start">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  SMS Gönder
                </Button>
                <Button variant="outline" className="justify-start">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Ödeme Al
                </Button>
              </div>
            </div>
          </Card>

          {/* Staff Performance */}
          <Card>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Personel Performansı
              </h3>
              <div className="space-y-4">
                {staffPerformance.map((staff, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{staff.name}</p>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        <span className="text-sm font-medium">{staff.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{staff.appointments} randevu</span>
                      <span className="font-medium text-foreground">{staff.revenue}</span>
                    </div>
                    <Progress value={(staff.appointments / 8) * 100} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Customer Satisfaction */}
          <Card className="gradient-primary text-primary-foreground">
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Star className="h-6 w-6" />
                <span className="text-3xl font-bold">4.9</span>
              </div>
              <p className="font-medium">Müşteri Memnuniyeti</p>
              <p className="text-sm opacity-90 mt-1">248 değerlendirme</p>
              <div className="flex gap-1 mt-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i <= 4 ? 'fill-current' : 'fill-none'}`} 
                  />
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}