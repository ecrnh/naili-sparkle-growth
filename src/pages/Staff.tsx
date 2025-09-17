import { useState } from "react";
import { 
  Plus, 
  Calendar, 
  Clock, 
  TrendingUp,
  Award,
  Phone,
  Mail,
  MoreVertical,
  Star,
  DollarSign,
  Target,
  CheckCircle,
  XCircle,
  Coffee
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Staff {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  status: "working" | "break" | "offline";
  todayAppointments: number;
  todayRevenue: number;
  monthlyTarget: number;
  monthlyAchieved: number;
  rating: number;
  specialties: string[];
  workingHours: string;
  performanceScore: number;
}

const mockStaff: Staff[] = [
  {
    id: "1",
    name: "Merve Aslan",
    role: "Uzman Nail Artist",
    phone: "0532 111 2233",
    email: "merve@naily.com",
    status: "working",
    todayAppointments: 6,
    todayRevenue: 2400,
    monthlyTarget: 50000,
    monthlyAchieved: 38000,
    rating: 4.9,
    specialties: ["Nail Art", "3D Tasarım", "Protez"],
    workingHours: "09:00 - 18:00",
    performanceScore: 92
  },
  {
    id: "2",
    name: "Selin Yıldız",
    role: "Nail Artist",
    phone: "0533 444 5566",
    email: "selin@naily.com",
    status: "working",
    todayAppointments: 5,
    todayRevenue: 1800,
    monthlyTarget: 40000,
    monthlyAchieved: 35000,
    rating: 4.7,
    specialties: ["French Oje", "Klasik Manikür"],
    workingHours: "10:00 - 19:00",
    performanceScore: 87
  },
  {
    id: "3",
    name: "Burcu Demir",
    role: "Junior Nail Artist",
    phone: "0534 777 8899",
    email: "burcu@naily.com",
    status: "break",
    todayAppointments: 3,
    todayRevenue: 900,
    monthlyTarget: 25000,
    monthlyAchieved: 18000,
    rating: 4.5,
    specialties: ["Jel Oje", "Bakım"],
    workingHours: "12:00 - 20:00",
    performanceScore: 72
  },
  {
    id: "4",
    name: "Aylin Kaya",
    role: "Stajyer",
    phone: "0535 222 3344",
    email: "aylin@naily.com",
    status: "offline",
    todayAppointments: 0,
    todayRevenue: 0,
    monthlyTarget: 10000,
    monthlyAchieved: 8500,
    rating: 4.2,
    specialties: ["Asistan", "Temizlik"],
    workingHours: "14:00 - 20:00",
    performanceScore: 85
  }
];

export default function Staff() {
  const [staff] = useState<Staff[]>(mockStaff);
  const [selectedTab, setSelectedTab] = useState("overview");

  const getStatusBadge = (status: Staff["status"]) => {
    switch (status) {
      case "working":
        return <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Çalışıyor</Badge>;
      case "break":
        return <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20">Molada</Badge>;
      case "offline":
        return <Badge variant="outline">Çevrimdışı</Badge>;
    }
  };

  const totalStats = {
    activeStaff: staff.filter(s => s.status === "working").length,
    todayRevenue: staff.reduce((sum, s) => sum + s.todayRevenue, 0),
    todayAppointments: staff.reduce((sum, s) => sum + s.todayAppointments, 0),
    avgRating: (staff.reduce((sum, s) => sum + s.rating, 0) / staff.length).toFixed(1)
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Personel</h1>
          <p className="text-muted-foreground">Ekibinizi yönetin ve performansı takip edin</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Yeni Personel
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Aktif Personel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStats.activeStaff}/{staff.length}</div>
            <Progress value={(totalStats.activeStaff / staff.length) * 100} className="mt-2 h-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Bugünkü Gelir
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺{totalStats.todayRevenue.toLocaleString('tr-TR')}</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 text-primary" />
              <span>Hedefin %85'i</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Bugünkü Randevular
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStats.todayAppointments}</div>
            <div className="text-xs text-muted-foreground">14 tamamlandı</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Ortalama Puan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">{totalStats.avgRating}</div>
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-xs text-muted-foreground">247 değerlendirme</div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList>
          <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
          <TabsTrigger value="schedule">Çalışma Takvimi</TabsTrigger>
          <TabsTrigger value="performance">Performans</TabsTrigger>
          <TabsTrigger value="commission">Prim/Komisyon</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {staff.map((member) => (
              <Card key={member.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(member.status)}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Profil</DropdownMenuItem>
                          <DropdownMenuItem>Takvim</DropdownMenuItem>
                          <DropdownMenuItem>Performans Raporu</DropdownMenuItem>
                          <DropdownMenuItem>Mesaj Gönder</DropdownMenuItem>
                          <DropdownMenuItem>Düzenle</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Bugün</p>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-medium">{member.todayAppointments} randevu</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Gelir</p>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="font-medium">₺{member.todayRevenue}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Aylık Hedef</span>
                      <span className="text-sm font-medium">
                        ₺{member.monthlyAchieved.toLocaleString('tr-TR')} / ₺{member.monthlyTarget.toLocaleString('tr-TR')}
                      </span>
                    </div>
                    <Progress value={(member.monthlyAchieved / member.monthlyTarget) * 100} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{member.workingHours}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(member.rating)
                              ? "fill-amber-400 text-amber-400"
                              : "text-muted-foreground/30"
                          }`}
                        />
                      ))}
                      <span className="text-sm ml-1">{member.rating}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Haftalık Çalışma Takvimi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {staff.map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.workingHours}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map((day, i) => (
                        <div
                          key={day}
                          className={`w-12 h-12 rounded-lg border flex items-center justify-center text-xs font-medium ${
                            i < 6 ? 'bg-primary/10 border-primary/20 text-primary' : 'bg-muted'
                          }`}
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid gap-4">
            {staff.map((member) => (
              <Card key={member.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gradient">{member.performanceScore}%</div>
                      <p className="text-xs text-muted-foreground">Performans Skoru</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-4 text-center">
                    <div>
                      <Target className="h-5 w-5 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">Hedef</p>
                      <p className="text-xs text-muted-foreground">%{((member.monthlyAchieved / member.monthlyTarget) * 100).toFixed(0)}</p>
                    </div>
                    <div>
                      <Star className="h-5 w-5 mx-auto mb-2 text-amber-500" />
                      <p className="text-sm font-medium">Puan</p>
                      <p className="text-xs text-muted-foreground">{member.rating}</p>
                    </div>
                    <div>
                      <CheckCircle className="h-5 w-5 mx-auto mb-2 text-green-500" />
                      <p className="text-sm font-medium">Tamamlanan</p>
                      <p className="text-xs text-muted-foreground">142</p>
                    </div>
                    <div>
                      <XCircle className="h-5 w-5 mx-auto mb-2 text-red-500" />
                      <p className="text-sm font-medium">İptal</p>
                      <p className="text-xs text-muted-foreground">3</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="commission" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Prim ve Komisyon Hesaplaması</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {staff.map((member) => {
                  const commission = member.monthlyAchieved * 0.15; // %15 komisyon
                  const targetBonus = member.monthlyAchieved >= member.monthlyTarget ? 500 : 0;
                  const total = commission + targetBonus;

                  return (
                    <div key={member.id} className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-muted-foreground">{member.role}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-gradient">₺{total.toLocaleString('tr-TR')}</p>
                          <p className="text-xs text-muted-foreground">Toplam Prim</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 pt-3 border-t">
                        <div>
                          <p className="text-sm text-muted-foreground">Satış Komisyonu</p>
                          <p className="font-medium">₺{commission.toLocaleString('tr-TR')}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Hedef Primi</p>
                          <p className="font-medium">₺{targetBonus}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Performans</p>
                          <p className="font-medium">{member.performanceScore}%</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}