import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe,
  CreditCard,
  Database,
  MessageSquare,
  Smartphone,
  Wifi,
  Clock,
  Save
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Ayarlar</h1>
        <p className="text-muted-foreground">İşletme ve sistem ayarlarınızı yönetin</p>
      </div>

      <Tabs defaultValue="business" className="space-y-4">
        <TabsList className="grid grid-cols-5 w-full max-w-[600px]">
          <TabsTrigger value="business">İşletme</TabsTrigger>
          <TabsTrigger value="notifications">Bildirimler</TabsTrigger>
          <TabsTrigger value="integrations">Entegrasyonlar</TabsTrigger>
          <TabsTrigger value="security">Güvenlik</TabsTrigger>
          <TabsTrigger value="billing">Faturalama</TabsTrigger>
        </TabsList>

        <TabsContent value="business" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>İşletme Bilgileri</CardTitle>
              <CardDescription>Temel işletme bilgilerinizi güncelleyin</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>İşletme Adı</Label>
                  <Input defaultValue="Nail Art Studio" />
                </div>
                <div className="space-y-2">
                  <Label>Telefon</Label>
                  <Input defaultValue="0212 555 0123" />
                </div>
                <div className="space-y-2">
                  <Label>E-posta</Label>
                  <Input defaultValue="info@nailart.com" />
                </div>
                <div className="space-y-2">
                  <Label>Adres</Label>
                  <Input defaultValue="Kadıköy, İstanbul" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Çalışma Saatleri</Label>
                <div className="grid gap-2 md:grid-cols-2">
                  <Select defaultValue="09:00">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">09:00</SelectItem>
                      <SelectItem value="10:00">10:00</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="21:00">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="20:00">20:00</SelectItem>
                      <SelectItem value="21:00">21:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Kaydet
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bildirim Tercihleri</CardTitle>
              <CardDescription>Bildirim ayarlarınızı özelleştirin</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>SMS Bildirimleri</Label>
                    <p className="text-sm text-muted-foreground">Randevu hatırlatmaları için SMS gönder</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>E-posta Bildirimleri</Label>
                    <p className="text-sm text-muted-foreground">Önemli güncellemeler için e-posta gönder</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>WhatsApp Entegrasyonu</Label>
                    <p className="text-sm text-muted-foreground">WhatsApp üzerinden bildirim gönder</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}