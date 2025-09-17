import { useState } from "react";
import { 
  Package, 
  Plus, 
  Edit, 
  Trash2,
  Star,
  Users,
  TrendingUp,
  Gift,
  Sparkles,
  Clock,
  Check,
  X,
  MoreVertical,
  DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ServicePackage {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  duration: string;
  services: string[];
  soldCount: number;
  rating: number;
  isActive: boolean;
  validUntil: string;
  maxUsage: number;
  type: "single" | "monthly" | "unlimited";
}

const mockPackages: ServicePackage[] = [
  {
    id: "1",
    name: "Başlangıç Paketi",
    description: "Yeni müşteriler için özel tanışma paketi",
    price: 899,
    originalPrice: 1200,
    duration: "1 Ay",
    services: ["2x Klasik Manikür", "1x Jel Oje", "1x El Bakımı"],
    soldCount: 45,
    rating: 4.8,
    isActive: true,
    validUntil: "2024-12-31",
    maxUsage: 3,
    type: "monthly"
  },
  {
    id: "2",
    name: "VIP Nail Art",
    description: "Özel tasarımlar ve premium hizmetler",
    price: 2499,
    originalPrice: 3200,
    duration: "3 Ay",
    services: ["4x Nail Art", "2x 3D Tasarım", "2x Protez Tırnak", "Sınırsız Bakım"],
    soldCount: 23,
    rating: 4.9,
    isActive: true,
    validUntil: "2024-12-31",
    maxUsage: 8,
    type: "monthly"
  },
  {
    id: "3",
    name: "Düğün Paketi",
    description: "Gelin ve davetliler için özel paket",
    price: 3999,
    originalPrice: 5000,
    duration: "Tek Kullanım",
    services: ["Gelin Nail Art", "5x Misafir Manikürü", "El & Ayak Bakımı"],
    soldCount: 12,
    rating: 5.0,
    isActive: true,
    validUntil: "2024-12-31",
    maxUsage: 1,
    type: "single"
  },
  {
    id: "4",
    name: "Öğrenci Paketi",
    description: "Öğrencilere özel indirimli paket",
    price: 599,
    originalPrice: 900,
    duration: "1 Ay",
    services: ["3x Klasik Manikür", "1x Jel Oje"],
    soldCount: 67,
    rating: 4.5,
    isActive: false,
    validUntil: "2024-06-30",
    maxUsage: 4,
    type: "monthly"
  }
];

export default function Packages() {
  const [packages] = useState<ServicePackage[]>(mockPackages);
  const [selectedTab, setSelectedTab] = useState("active");

  const filteredPackages = packages.filter(pkg => {
    if (selectedTab === "active") return pkg.isActive;
    if (selectedTab === "inactive") return !pkg.isActive;
    return true;
  });

  const stats = {
    totalPackages: packages.length,
    activePackages: packages.filter(p => p.isActive).length,
    totalSold: packages.reduce((sum, p) => sum + p.soldCount, 0),
    totalRevenue: packages.reduce((sum, p) => sum + (p.price * p.soldCount), 0)
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Paketler</h1>
          <p className="text-muted-foreground">Hizmet paketlerinizi yönetin</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Yeni Paket
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Toplam Paket
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalPackages}</div>
            <div className="text-xs text-muted-foreground">{stats.activePackages} aktif</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Satılan Paket
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalSold}</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 text-primary" />
              <span>Bu ay +23</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Paket Geliri
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺{stats.totalRevenue.toLocaleString('tr-TR')}</div>
            <div className="text-xs text-muted-foreground">Toplam gelir</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Popüler Paket
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">Öğrenci Paketi</div>
            <div className="text-xs text-muted-foreground">67 satış</div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList>
          <TabsTrigger value="all">Tümü</TabsTrigger>
          <TabsTrigger value="active">Aktif</TabsTrigger>
          <TabsTrigger value="inactive">Pasif</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedTab} className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredPackages.map((pkg) => (
              <Card key={pkg.id} className={!pkg.isActive ? "opacity-60" : ""}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{pkg.name}</CardTitle>
                      <CardDescription>{pkg.description}</CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Düzenle
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          {pkg.isActive ? (
                            <>
                              <X className="mr-2 h-4 w-4" />
                              Pasif Yap
                            </>
                          ) : (
                            <>
                              <Check className="mr-2 h-4 w-4" />
                              Aktif Yap
                            </>
                          )}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Sil
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold">₺{pkg.price}</span>
                        <span className="text-sm text-muted-foreground line-through">
                          ₺{pkg.originalPrice}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {pkg.duration}
                      </div>
                    </div>
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                      %{Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)} İndirim
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">İçerik:</p>
                    <div className="space-y-1">
                      {pkg.services.map((service, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <Check className="h-3 w-3 text-primary" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{pkg.soldCount}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(pkg.rating)
                                ? "fill-amber-400 text-amber-400"
                                : "text-muted-foreground/30"
                            }`}
                          />
                        ))}
                        <span className="text-sm ml-1">{pkg.rating}</span>
                      </div>
                    </div>
                    <Switch checked={pkg.isActive} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}