import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Calendar,
  DollarSign,
  Star,
  Clock,
  Target,
  Award,
  Activity,
  Download,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Raporlar</h1>
          <p className="text-muted-foreground">İşletme performansınızı analiz edin</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="month">
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Bu Hafta</SelectItem>
              <SelectItem value="month">Bu Ay</SelectItem>
              <SelectItem value="quarter">Bu Çeyrek</SelectItem>
              <SelectItem value="year">Bu Yıl</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtrele
          </Button>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Rapor İndir
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              Aylık Gelir
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺124,500</div>
            <div className="flex items-center gap-1 text-xs">
              <span className="text-green-600">+18.2%</span>
              <span className="text-muted-foreground">geçen aya göre</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              Müşteri Sayısı
              <Users className="h-4 w-4 text-primary" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <div className="flex items-center gap-1 text-xs">
              <span className="text-green-600">+42</span>
              <span className="text-muted-foreground">yeni müşteri</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              Randevu Sayısı
              <Calendar className="h-4 w-4 text-blue-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">856</div>
            <div className="flex items-center gap-1 text-xs">
              <span className="text-red-600">-3.4%</span>
              <span className="text-muted-foreground">iptal oranı</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              Ortalama Puan
              <Star className="h-4 w-4 text-amber-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <div className="text-xs text-muted-foreground">523 değerlendirme</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid grid-cols-5 w-full max-w-[600px]">
          <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
          <TabsTrigger value="revenue">Gelir Analizi</TabsTrigger>
          <TabsTrigger value="customers">Müşteri Analizi</TabsTrigger>
          <TabsTrigger value="services">Hizmet Analizi</TabsTrigger>
          <TabsTrigger value="staff">Personel Performans</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Aylık Gelir Trendi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {["Ocak", "Şubat", "Mart", "Nisan"].map((month, i) => (
                    <div key={month} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>{month}</span>
                        <span className="font-medium">₺{(85000 + i * 12000).toLocaleString('tr-TR')}</span>
                      </div>
                      <Progress value={60 + i * 10} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>En Popüler Hizmetler</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Nail Art", count: 234, revenue: 42300 },
                    { name: "French Oje", count: 189, revenue: 28350 },
                    { name: "Protez Tırnak", count: 156, revenue: 46800 },
                    { name: "Jel Oje", count: 145, revenue: 21750 }
                  ].map((service) => (
                    <div key={service.name} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{service.name}</p>
                        <p className="text-xs text-muted-foreground">{service.count} işlem</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm">₺{service.revenue.toLocaleString('tr-TR')}</p>
                        <p className="text-xs text-muted-foreground">
                          %{((service.revenue / 139200) * 100).toFixed(1)} pay
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Hedef Gerçekleşme</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Gelir Hedefi</span>
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/20">%92</Badge>
                  </div>
                  <Progress value={92} className="h-2" />
                  <p className="text-xs text-muted-foreground">₺124,500 / ₺135,000</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Müşteri Hedefi</span>
                    <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">%114</Badge>
                  </div>
                  <Progress value={100} className="h-2" />
                  <p className="text-xs text-muted-foreground">342 / 300</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Randevu Hedefi</span>
                    <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20">%85</Badge>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-muted-foreground">856 / 1000</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-4">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Gelir Dağılımı</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Hizmet Bazlı</h4>
                    {[
                      { name: "Nail Art & Tasarım", value: 45, color: "bg-primary" },
                      { name: "Protez & Uzatma", value: 30, color: "bg-secondary" },
                      { name: "Bakım & Tedavi", value: 15, color: "bg-accent" },
                      { name: "Diğer", value: 10, color: "bg-muted-foreground" }
                    ].map((item) => (
                      <div key={item.name} className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${item.color}`} />
                            <span>{item.name}</span>
                          </div>
                          <span className="font-medium">%{item.value}</span>
                        </div>
                        <Progress value={item.value} className="h-2" />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Ödeme Yöntemi</h4>
                    {[
                      { name: "Nakit", value: 55, amount: 68475 },
                      { name: "Kredi Kartı", value: 35, amount: 43575 },
                      { name: "Havale/EFT", value: 10, amount: 12450 }
                    ].map((item) => (
                      <div key={item.name} className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>{item.name}</span>
                          <span className="font-medium">₺{item.amount.toLocaleString('tr-TR')}</span>
                        </div>
                        <Progress value={item.value} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="customers" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Müşteri Segmentasyonu</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">VIP Müşteriler</p>
                      <p className="text-xs text-muted-foreground">10+ ziyaret</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gradient">48</p>
                      <p className="text-xs text-muted-foreground">%14</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Düzenli Müşteriler</p>
                      <p className="text-xs text-muted-foreground">5-10 ziyaret</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">124</p>
                      <p className="text-xs text-muted-foreground">%36</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Yeni Müşteriler</p>
                      <p className="text-xs text-muted-foreground">1-4 ziyaret</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">170</p>
                      <p className="text-xs text-muted-foreground">%50</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Müşteri Memnuniyeti</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gradient">4.8</div>
                      <div className="flex items-center justify-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < 4 ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">523 değerlendirme</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-2">
                        <span className="text-sm w-4">{rating}</span>
                        <Star className="h-4 w-4 text-amber-400" />
                        <Progress value={rating === 5 ? 75 : rating === 4 ? 20 : 5} className="flex-1 h-2" />
                        <span className="text-sm text-muted-foreground w-10 text-right">
                          {rating === 5 ? "392" : rating === 4 ? "105" : "26"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="services" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hizmet Performansı</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "3D Nail Art", bookings: 87, revenue: 39150, duration: "90 dk", satisfaction: 4.9 },
                  { name: "French Oje", bookings: 156, revenue: 31200, duration: "45 dk", satisfaction: 4.7 },
                  { name: "Protez Tırnak", bookings: 98, revenue: 49000, duration: "120 dk", satisfaction: 4.8 },
                  { name: "Jel Oje", bookings: 234, revenue: 35100, duration: "60 dk", satisfaction: 4.6 },
                  { name: "Klasik Manikür", bookings: 189, revenue: 18900, duration: "30 dk", satisfaction: 4.5 }
                ].map((service) => (
                  <div key={service.name} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium">{service.name}</h4>
                      <Badge variant="outline">{service.duration}</Badge>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Randevu</p>
                        <p className="font-medium">{service.bookings}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Gelir</p>
                        <p className="font-medium">₺{service.revenue.toLocaleString('tr-TR')}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Ortalama</p>
                        <p className="font-medium">₺{Math.round(service.revenue / service.bookings)}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Puan</p>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                          <span className="font-medium">{service.satisfaction}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="staff" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Personel Performans Karşılaştırması</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Merve Aslan", role: "Uzman", appointments: 186, revenue: 74400, rating: 4.9, efficiency: 94 },
                  { name: "Selin Yıldız", role: "Nail Artist", appointments: 142, revenue: 42600, rating: 4.7, efficiency: 87 },
                  { name: "Burcu Demir", role: "Junior", appointments: 98, revenue: 19600, rating: 4.5, efficiency: 72 }
                ].map((staff) => (
                  <div key={staff.name} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium">{staff.name}</h4>
                        <p className="text-sm text-muted-foreground">{staff.role}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gradient">%{staff.efficiency}</div>
                        <p className="text-xs text-muted-foreground">Verimlilik</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Randevu</p>
                        <p className="font-medium">{staff.appointments}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Gelir</p>
                        <p className="font-medium">₺{staff.revenue.toLocaleString('tr-TR')}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Puan</p>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                          <span className="font-medium">{staff.rating}</span>
                        </div>
                      </div>
                    </div>
                    <Progress value={staff.efficiency} className="mt-3 h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}