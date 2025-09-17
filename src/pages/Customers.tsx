import { useState } from "react";
import { 
  Search, 
  Plus, 
  Filter, 
  Download,
  Phone,
  Mail,
  Calendar,
  MapPin,
  Star,
  MoreVertical,
  TrendingUp,
  Clock,
  Package,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  totalVisits: number;
  totalSpent: number;
  lastVisit: string;
  status: "active" | "inactive" | "vip";
  rating: number;
  favorites: string[];
  address?: string;
  birthDate?: string;
  notes?: string;
}

const mockCustomers: Customer[] = [
  {
    id: "1",
    name: "Ayşe Yılmaz",
    phone: "0532 111 2233",
    email: "ayse@email.com",
    totalVisits: 24,
    totalSpent: 8400,
    lastVisit: "2024-01-15",
    status: "vip",
    rating: 5,
    favorites: ["French Oje", "Nail Art"],
    address: "Kadıköy, İstanbul"
  },
  {
    id: "2",
    name: "Fatma Demir",
    phone: "0533 444 5566",
    email: "fatma@email.com",
    totalVisits: 12,
    totalSpent: 3200,
    lastVisit: "2024-01-10",
    status: "active",
    rating: 4,
    favorites: ["Protez Tırnak"],
  },
  {
    id: "3",
    name: "Zeynep Kaya",
    phone: "0534 777 8899",
    email: "zeynep@email.com",
    totalVisits: 5,
    totalSpent: 1200,
    lastVisit: "2024-01-08",
    status: "active",
    rating: 5,
    favorites: ["Klasik Manikür"],
  },
  {
    id: "4",
    name: "Elif Çelik",
    phone: "0535 222 3344",
    email: "elif@email.com",
    totalVisits: 2,
    totalSpent: 450,
    lastVisit: "2023-12-20",
    status: "inactive",
    rating: 3,
    favorites: ["Jel Oje"],
  }
];

export default function Customers() {
  const [customers] = useState<Customer[]>(mockCustomers);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          customer.phone.includes(searchTerm) ||
                          customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedTab === "all") return matchesSearch;
    if (selectedTab === "vip") return matchesSearch && customer.status === "vip";
    if (selectedTab === "active") return matchesSearch && customer.status === "active";
    if (selectedTab === "inactive") return matchesSearch && customer.status === "inactive";
    
    return matchesSearch;
  });

  const stats = {
    total: customers.length,
    active: customers.filter(c => c.status === "active").length,
    vip: customers.filter(c => c.status === "vip").length,
    newThisMonth: 12
  };

  const getStatusBadge = (status: Customer["status"]) => {
    switch (status) {
      case "vip":
        return <Badge className="bg-gradient-to-r from-amber-500 to-amber-600">VIP</Badge>;
      case "active":
        return <Badge variant="secondary">Aktif</Badge>;
      case "inactive":
        return <Badge variant="outline">Pasif</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Müşteriler</h1>
          <p className="text-muted-foreground">Müşteri veritabanınızı yönetin</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Yeni Müşteri
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Toplam Müşteri
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 text-primary" />
              <span>Bu ay +{stats.newThisMonth}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Aktif Müşteriler
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.active}</div>
            <div className="text-xs text-muted-foreground">Son 30 günde</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              VIP Müşteriler
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gradient">{stats.vip}</div>
            <div className="text-xs text-muted-foreground">Sadık müşteriler</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Ortalama Değer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺350</div>
            <div className="text-xs text-muted-foreground">Müşteri başına</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="İsim, telefon veya email ile ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList>
              <TabsTrigger value="all">Tümü</TabsTrigger>
              <TabsTrigger value="active">Aktif</TabsTrigger>
              <TabsTrigger value="vip">VIP</TabsTrigger>
              <TabsTrigger value="inactive">Pasif</TabsTrigger>
            </TabsList>

            <TabsContent value={selectedTab} className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Müşteri</TableHead>
                    <TableHead>İletişim</TableHead>
                    <TableHead>Ziyaret</TableHead>
                    <TableHead>Harcama</TableHead>
                    <TableHead>Favori Hizmetler</TableHead>
                    <TableHead>Durum</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCustomers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                              {customer.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{customer.name}</div>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < customer.rating
                                      ? "fill-amber-400 text-amber-400"
                                      : "text-muted-foreground/30"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-sm">
                            <Phone className="h-3 w-3 text-muted-foreground" />
                            {customer.phone}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Mail className="h-3 w-3" />
                            {customer.email}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium">{customer.totalVisits} kez</div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            Son: {new Date(customer.lastVisit).toLocaleDateString('tr-TR')}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">₺{customer.totalSpent.toLocaleString('tr-TR')}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {customer.favorites.map((service, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(customer.status)}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Profili Görüntüle</DropdownMenuItem>
                            <DropdownMenuItem>Randevu Oluştur</DropdownMenuItem>
                            <DropdownMenuItem>Mesaj Gönder</DropdownMenuItem>
                            <DropdownMenuItem>Düzenle</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Sil</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}