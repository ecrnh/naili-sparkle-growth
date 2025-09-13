import { useState } from "react";
import { Calendar, Clock, User, Search, Filter, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Appointments() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const appointments = [
    {
      id: 1,
      time: "09:00",
      endTime: "09:45",
      customer: "Ayşe Yılmaz",
      service: "Jel Manikür",
      staff: "Elif",
      status: "confirmed",
      phone: "0532 123 4567",
      price: "₺300"
    },
    {
      id: 2,
      time: "10:00",
      endTime: "11:30",
      customer: "Fatma Demir",
      service: "Protez Tırnak",
      staff: "Zeynep",
      status: "confirmed",
      phone: "0533 234 5678",
      price: "₺450"
    },
    {
      id: 3,
      time: "11:30",
      endTime: "12:30",
      customer: "Merve Kaya",
      service: "Nail Art",
      staff: "Elif",
      status: "pending",
      phone: "0534 345 6789",
      price: "₺350"
    },
    {
      id: 4,
      time: "14:00",
      endTime: "14:30",
      customer: "Selin Öz",
      service: "Klasik Manikür",
      staff: "Aylin",
      status: "confirmed",
      phone: "0535 456 7890",
      price: "₺200"
    },
    {
      id: 5,
      time: "15:00",
      endTime: "16:00",
      customer: "Zehra Çelik",
      service: "Kalıcı Oje",
      staff: "Zeynep",
      status: "cancelled",
      phone: "0536 567 8901",
      price: "₺250"
    }
  ];

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30", "20:00"
  ];

  const staff = ["Elif", "Zeynep", "Aylin"];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Randevular</h1>
          <p className="text-muted-foreground">
            Randevu takvimini yönetin ve düzenleyin
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Yeni Randevu
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Müşteri veya hizmet ara..." className="pl-9" />
            </div>
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Personel Seç" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tüm Personel</SelectItem>
              {staff.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Durum" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tüm Durumlar</SelectItem>
              <SelectItem value="confirmed">Onaylı</SelectItem>
              <SelectItem value="pending">Bekliyor</SelectItem>
              <SelectItem value="cancelled">İptal</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </Card>

      {/* Calendar View Tabs */}
      <Tabs defaultValue="day" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="day">Günlük</TabsTrigger>
            <TabsTrigger value="week">Haftalık</TabsTrigger>
            <TabsTrigger value="month">Aylık</TabsTrigger>
            <TabsTrigger value="list">Liste</TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline">
              Bugün
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Day View */}
        <TabsContent value="day" className="space-y-0">
          <Card>
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-lg font-semibold">21 Aralık 2024, Cumartesi</h2>
                <p className="text-sm text-muted-foreground">5 randevu • ₺1,550 tahmini gelir</p>
              </div>
              
              <div className="grid grid-cols-[auto_1fr_1fr_1fr] gap-4">
                {/* Time column */}
                <div className="space-y-2">
                  <div className="h-12 flex items-center justify-center text-sm font-medium text-muted-foreground">
                    Saat
                  </div>
                  {timeSlots.map((time) => (
                    <div key={time} className="h-16 flex items-start justify-end pr-4 text-sm text-muted-foreground">
                      {time}
                    </div>
                  ))}
                </div>
                
                {/* Staff columns */}
                {staff.map((staffMember) => (
                  <div key={staffMember} className="space-y-2">
                    <div className="h-12 flex items-center justify-center text-sm font-medium bg-muted rounded-lg">
                      {staffMember}
                    </div>
                    <div className="relative">
                      {appointments
                        .filter((apt) => apt.staff === staffMember)
                        .map((apt) => {
                          const startIndex = timeSlots.indexOf(apt.time);
                          const endIndex = timeSlots.indexOf(apt.endTime.split(":")[0] + ":00");
                          const duration = endIndex > startIndex ? endIndex - startIndex : 1;
                          
                          return (
                            <div
                              key={apt.id}
                              className={`absolute left-0 right-0 p-2 rounded-lg border ${
                                apt.status === "confirmed" 
                                  ? "bg-primary/10 border-primary/30" 
                                  : apt.status === "pending"
                                  ? "bg-yellow-500/10 border-yellow-500/30"
                                  : "bg-destructive/10 border-destructive/30 opacity-60"
                              }`}
                              style={{
                                top: `${startIndex * 72 + startIndex * 8}px`,
                                height: `${duration * 72 + (duration - 1) * 8}px`
                              }}
                            >
                              <p className="font-medium text-sm">{apt.customer}</p>
                              <p className="text-xs text-muted-foreground">{apt.service}</p>
                              <p className="text-xs font-medium mt-1">{apt.price}</p>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* List View */}
        <TabsContent value="list" className="space-y-0">
          <Card>
            <div className="p-6">
              <div className="space-y-3">
                {appointments.map((apt) => (
                  <div 
                    key={apt.id}
                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-lg font-bold">{apt.time}</p>
                        <p className="text-xs text-muted-foreground">{apt.endTime}</p>
                      </div>
                      <div className="border-l pl-4">
                        <p className="font-medium">{apt.customer}</p>
                        <p className="text-sm text-muted-foreground">{apt.service}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {apt.staff}
                          </span>
                          <span className="text-xs text-muted-foreground">{apt.phone}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{apt.price}</span>
                      <Badge 
                        variant={
                          apt.status === "confirmed" ? "default" : 
                          apt.status === "pending" ? "secondary" : 
                          "destructive"
                        }
                      >
                        {apt.status === "confirmed" ? "Onaylı" : 
                         apt.status === "pending" ? "Bekliyor" : 
                         "İptal"}
                      </Badge>
                      <Button size="sm" variant="outline">Düzenle</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}