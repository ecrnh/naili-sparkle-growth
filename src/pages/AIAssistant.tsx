import { 
  Sparkles, 
  Send, 
  MessageSquare,
  Mic,
  Bot,
  Brain,
  Zap,
  TrendingUp,
  Clock,
  History
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AIAssistant() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">AI Asistan</h1>
        <p className="text-muted-foreground">Yapay zeka destekli asistanınız</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Otomatik Yanıtlar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">Bu ay</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Tasarruf Edilen Zaman</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42 saat</div>
            <p className="text-xs text-muted-foreground">Bu hafta</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Müşteri Memnuniyeti</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">%96</div>
            <p className="text-xs text-muted-foreground">AI yanıtları</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>AI Sohbet</CardTitle>
            <CardDescription>Sorunuzu sorun, AI yanıtlasın</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] mb-4 p-4 border rounded-lg">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">Merhaba! Size nasıl yardımcı olabilirim?</p>
                  </div>
                </div>
              </div>
            </ScrollArea>
            <div className="flex gap-2">
              <Input placeholder="Mesajınızı yazın..." />
              <Button size="icon"><Send className="h-4 w-4" /></Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Önerileri</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 border rounded-lg space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Randevu Optimizasyonu</span>
                <Badge>Yeni</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Boş zamanları doldurmak için müşterilere özel teklifler gönderin
              </p>
              <Button size="sm">Uygula</Button>
            </div>
            <div className="p-3 border rounded-lg space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Personel Planlaması</span>
                <Zap className="h-4 w-4 text-amber-500" />
              </div>
              <p className="text-xs text-muted-foreground">
                Yoğun saatler için ek personel önerin
              </p>
              <Button size="sm" variant="outline">İncele</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}