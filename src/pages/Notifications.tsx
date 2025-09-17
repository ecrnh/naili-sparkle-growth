import { useState } from "react";
import { 
  Bell, 
  MessageSquare, 
  Mail,
  Phone,
  Check,
  X,
  Clock,
  Send,
  Filter,
  CheckCheck,
  Calendar,
  Users,
  AlertCircle,
  Info,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Notification {
  id: string;
  type: "appointment" | "message" | "system" | "promotion";
  title: string;
  message: string;
  recipient: string;
  channel: "sms" | "email" | "whatsapp" | "push";
  status: "sent" | "pending" | "failed" | "delivered" | "read";
  createdAt: string;
  scheduledFor?: string;
  priority: "high" | "medium" | "low";
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "appointment",
    title: "Randevu Hatırlatma",
    message: "Yarın saat 14:00'teki randevunuzu hatırlatmak isteriz.",
    recipient: "Ayşe Yılmaz",
    channel: "sms",
    status: "delivered",
    createdAt: "2024-01-17T10:00:00",
    priority: "high"
  },
  {
    id: "2",
    type: "promotion",
    title: "Özel Kampanya",
    message: "%20 indirim fırsatını kaçırmayın! Sadece bu hafta geçerli.",
    recipient: "Tüm Müşteriler",
    channel: "email",
    status: "sent",
    createdAt: "2024-01-17T09:00:00",
    priority: "medium"
  },
  {
    id: "3",
    type: "system",
    title: "Sistem Güncellemesi",
    message: "Yeni özellikler eklendi. Hemen keşfedin!",
    recipient: "Personel",
    channel: "push",
    status: "read",
    createdAt: "2024-01-16T15:00:00",
    priority: "low"
  },
  {
    id: "4",
    type: "message",
    title: "Müşteri Mesajı",
    message: "Randevumu değiştirebilir miyiz?",
    recipient: "Fatma Demir",
    channel: "whatsapp",
    status: "pending",
    createdAt: "2024-01-17T11:30:00",
    priority: "high"
  }
];

export default function Notifications() {
  const [notifications] = useState<Notification[]>(mockNotifications);
  const [selectedTab, setSelectedTab] = useState("all");

  const getStatusBadge = (status: Notification["status"]) => {
    switch (status) {
      case "sent":
        return <Badge variant="secondary">Gönderildi</Badge>;
      case "delivered":
        return <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Teslim Edildi</Badge>;
      case "read":
        return <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">Okundu</Badge>;
      case "pending":
        return <Badge variant="default">Bekliyor</Badge>;
      case "failed":
        return <Badge variant="destructive">Başarısız</Badge>;
    }
  };

  const getChannelIcon = (channel: Notification["channel"]) => {
    switch (channel) {
      case "sms":
        return <MessageSquare className="h-4 w-4" />;
      case "email":
        return <Mail className="h-4 w-4" />;
      case "whatsapp":
        return <Phone className="h-4 w-4 text-green-600" />;
      case "push":
        return <Bell className="h-4 w-4" />;
    }
  };

  const getTypeIcon = (type: Notification["type"]) => {
    switch (type) {
      case "appointment":
        return <Calendar className="h-4 w-4 text-primary" />;
      case "message":
        return <MessageSquare className="h-4 w-4 text-blue-500" />;
      case "system":
        return <Info className="h-4 w-4 text-muted-foreground" />;
      case "promotion":
        return <AlertCircle className="h-4 w-4 text-amber-500" />;
    }
  };

  const stats = {
    total: notifications.length,
    sent: notifications.filter(n => n.status === "sent" || n.status === "delivered").length,
    pending: notifications.filter(n => n.status === "pending").length,
    failed: notifications.filter(n => n.status === "failed").length
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Bildirimler</h1>
          <p className="text-muted-foreground">Müşteri ve personel bildirimlerini yönetin</p>
        </div>
        <Button className="gap-2">
          <Send className="h-4 w-4" />
          Yeni Bildirim
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Toplam Bildirim
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <div className="text-xs text-muted-foreground">Son 7 gün</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Gönderilen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.sent}</div>
            <div className="text-xs text-muted-foreground">%95 başarı oranı</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Bekleyen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600">{stats.pending}</div>
            <div className="text-xs text-muted-foreground">İşlem bekliyor</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Başarısız
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.failed}</div>
            <div className="text-xs text-muted-foreground">Tekrar dene</div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList>
          <TabsTrigger value="all">Tümü</TabsTrigger>
          <TabsTrigger value="inbox">Gelen Kutusu</TabsTrigger>
          <TabsTrigger value="sent">Gönderilenler</TabsTrigger>
          <TabsTrigger value="scheduled">Zamanlanmış</TabsTrigger>
          <TabsTrigger value="templates">Şablonlar</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Bildirim Geçmişi</CardTitle>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>
                          {getTypeIcon(notification.type)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{notification.title}</h4>
                            {getChannelIcon(notification.channel)}
                          </div>
                          {getStatusBadge(notification.status)}
                        </div>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {notification.recipient}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {new Date(notification.createdAt).toLocaleString('tr-TR')}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inbox" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gelen Mesajlar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications
                  .filter(n => n.type === "message")
                  .map((message) => (
                    <div key={message.id} className="p-4 border rounded-lg space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>{message.recipient[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{message.recipient}</p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(message.createdAt).toLocaleString('tr-TR')}
                            </p>
                          </div>
                        </div>
                        {getChannelIcon(message.channel)}
                      </div>
                      <p className="text-sm">{message.message}</p>
                      <div className="flex gap-2">
                        <Button size="sm">Yanıtla</Button>
                        <Button size="sm" variant="outline">Arşivle</Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gönderilen Bildirimler</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {notifications
                  .filter(n => n.status === "sent" || n.status === "delivered" || n.status === "read")
                  .map((notification) => (
                    <div key={notification.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {getChannelIcon(notification.channel)}
                        <div>
                          <p className="font-medium text-sm">{notification.title}</p>
                          <p className="text-xs text-muted-foreground">{notification.recipient}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {notification.status === "read" && (
                          <CheckCheck className="h-4 w-4 text-blue-500" />
                        )}
                        {notification.status === "delivered" && (
                          <Check className="h-4 w-4 text-green-500" />
                        )}
                        <span className="text-xs text-muted-foreground">
                          {new Date(notification.createdAt).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Zamanlanmış Bildirimler</CardTitle>
              <CardDescription>Otomatik gönderilecek bildirimler</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Haftalık Hatırlatma</p>
                      <p className="text-sm text-muted-foreground">Her Pazartesi 10:00</p>
                    </div>
                    <Badge>Aktif</Badge>
                  </div>
                  <p className="text-sm">Haftanın randevuları müşterilere gönderilecek</p>
                </div>
                <div className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Doğum Günü Kutlaması</p>
                      <p className="text-sm text-muted-foreground">Otomatik</p>
                    </div>
                    <Badge>Aktif</Badge>
                  </div>
                  <p className="text-sm">Müşterilere doğum günü indirimi gönderilecek</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bildirim Şablonları</CardTitle>
              <CardDescription>Hazır mesaj şablonları</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="p-4 border rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Randevu Hatırlatma</h4>
                    <Button size="sm" variant="outline">Kullan</Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sayın {"{müşteri_adı}"}, yarın saat {"{randevu_saati}"}'deki randevunuzu hatırlatmak isteriz. Naily
                  </p>
                </div>
                <div className="p-4 border rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Teşekkür Mesajı</h4>
                    <Button size="sm" variant="outline">Kullan</Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bizi tercih ettiğiniz için teşekkür ederiz! Bir sonraki ziyaretinizde %10 indirim kazandınız. Naily
                  </p>
                </div>
                <div className="p-4 border rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Kampanya Duyurusu</h4>
                    <Button size="sm" variant="outline">Kullan</Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {"{kampanya_adı}"} başladı! {"{indirim_oranı}"} indirimle hizmetlerimizden yararlanın. Detaylar için: {"{link}"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}