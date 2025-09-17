import { useState } from "react";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  CreditCard,
  Receipt,
  FileText,
  Download,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Plus,
  PieChart,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: "income" | "expense";
  paymentMethod: string;
  status: "completed" | "pending" | "cancelled";
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    date: "2024-01-17",
    description: "Ayşe Yılmaz - Nail Art",
    category: "Hizmet",
    amount: 450,
    type: "income",
    paymentMethod: "Nakit",
    status: "completed"
  },
  {
    id: "2",
    date: "2024-01-17",
    description: "Oje Malzemeleri",
    category: "Malzeme",
    amount: 1200,
    type: "expense",
    paymentMethod: "Kredi Kartı",
    status: "completed"
  },
  {
    id: "3",
    date: "2024-01-17",
    description: "Fatma Demir - French Oje",
    category: "Hizmet",
    amount: 350,
    type: "income",
    paymentMethod: "Kredi Kartı",
    status: "completed"
  },
  {
    id: "4",
    date: "2024-01-16",
    description: "Kira Ödemesi",
    category: "Sabit Giderler",
    amount: 8000,
    type: "expense",
    paymentMethod: "Banka Transferi",
    status: "completed"
  },
  {
    id: "5",
    date: "2024-01-16",
    description: "Zeynep Kaya - Protez Tırnak",
    category: "Hizmet",
    amount: 600,
    type: "income",
    paymentMethod: "Nakit",
    status: "pending"
  }
];

export default function Finance() {
  const [transactions] = useState<Transaction[]>(mockTransactions);
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  const stats = {
    totalIncome: transactions.filter(t => t.type === "income" && t.status === "completed").reduce((sum, t) => sum + t.amount, 0),
    totalExpense: transactions.filter(t => t.type === "expense" && t.status === "completed").reduce((sum, t) => sum + t.amount, 0),
    pendingPayments: transactions.filter(t => t.status === "pending").reduce((sum, t) => sum + t.amount, 0),
    profit: 0
  };
  stats.profit = stats.totalIncome - stats.totalExpense;

  const monthlyGoal = 100000;
  const progressPercentage = (stats.totalIncome / monthlyGoal) * 100;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Finanslar</h1>
          <p className="text-muted-foreground">İşletmenizin finansal durumunu takip edin</p>
        </div>
        <div className="flex gap-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Bugün</SelectItem>
              <SelectItem value="week">Bu Hafta</SelectItem>
              <SelectItem value="month">Bu Ay</SelectItem>
              <SelectItem value="year">Bu Yıl</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Rapor İndir
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            İşlem Ekle
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              Toplam Gelir
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺{stats.totalIncome.toLocaleString('tr-TR')}</div>
            <div className="flex items-center gap-1 text-xs text-green-600">
              <ArrowUpRight className="h-3 w-3" />
              <span>%12 artış</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              Toplam Gider
              <TrendingDown className="h-4 w-4 text-red-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺{stats.totalExpense.toLocaleString('tr-TR')}</div>
            <div className="flex items-center gap-1 text-xs text-red-600">
              <ArrowDownRight className="h-3 w-3" />
              <span>%5 azalış</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              Net Kar
              <DollarSign className="h-4 w-4 text-primary" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${stats.profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ₺{Math.abs(stats.profit).toLocaleString('tr-TR')}
            </div>
            <div className="text-xs text-muted-foreground">
              Kar marjı: %{((stats.profit / stats.totalIncome) * 100).toFixed(1)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              Bekleyen Ödemeler
              <CreditCard className="h-4 w-4 text-amber-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₺{stats.pendingPayments.toLocaleString('tr-TR')}</div>
            <div className="text-xs text-muted-foreground">3 işlem bekliyor</div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Goal */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Aylık Hedef</CardTitle>
            <Badge variant={progressPercentage >= 100 ? "default" : "secondary"}>
              {progressPercentage >= 100 ? "Hedefe Ulaşıldı!" : "Devam Ediyor"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>₺{stats.totalIncome.toLocaleString('tr-TR')}</span>
              <span className="text-muted-foreground">₺{monthlyGoal.toLocaleString('tr-TR')}</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            <p className="text-xs text-muted-foreground">
              Hedefinize ulaşmak için ₺{Math.max(0, monthlyGoal - stats.totalIncome).toLocaleString('tr-TR')} daha kazanmanız gerekiyor.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="transactions">
        <TabsList>
          <TabsTrigger value="transactions">İşlemler</TabsTrigger>
          <TabsTrigger value="income">Gelir Analizi</TabsTrigger>
          <TabsTrigger value="expenses">Gider Analizi</TabsTrigger>
          <TabsTrigger value="invoices">Faturalar</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Son İşlemler</CardTitle>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tarih</TableHead>
                    <TableHead>Açıklama</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead>Ödeme Yöntemi</TableHead>
                    <TableHead>Durum</TableHead>
                    <TableHead className="text-right">Tutar</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{new Date(transaction.date).toLocaleDateString('tr-TR')}</TableCell>
                      <TableCell className="font-medium">{transaction.description}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{transaction.category}</Badge>
                      </TableCell>
                      <TableCell>{transaction.paymentMethod}</TableCell>
                      <TableCell>
                        <Badge variant={
                          transaction.status === "completed" ? "secondary" :
                          transaction.status === "pending" ? "default" : "destructive"
                        }>
                          {transaction.status === "completed" ? "Tamamlandı" :
                           transaction.status === "pending" ? "Bekliyor" : "İptal"}
                        </Badge>
                      </TableCell>
                      <TableCell className={`text-right font-medium ${
                        transaction.type === "income" ? "text-green-600" : "text-red-600"
                      }`}>
                        {transaction.type === "income" ? "+" : "-"}₺{transaction.amount.toLocaleString('tr-TR')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="income" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  Gelir Dağılımı
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <span className="text-sm">Nail Art</span>
                    </div>
                    <span className="font-medium">₺12,500</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-secondary" />
                      <span className="text-sm">French Oje</span>
                    </div>
                    <span className="font-medium">₺8,300</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-accent" />
                      <span className="text-sm">Protez Tırnak</span>
                    </div>
                    <span className="font-medium">₺15,200</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                      <span className="text-sm">Diğer</span>
                    </div>
                    <span className="font-medium">₺6,700</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  En Karlı Hizmetler
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "3D Nail Art", revenue: 18500, count: 37 },
                    { name: "Protez Tırnak", revenue: 15200, count: 25 },
                    { name: "French Oje", revenue: 8300, count: 24 },
                    { name: "Jel Oje", revenue: 6500, count: 26 }
                  ].map((service, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>{service.name}</span>
                        <span className="text-muted-foreground">{service.count} işlem</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={(service.revenue / 18500) * 100} className="flex-1 h-2" />
                        <span className="text-sm font-medium w-20 text-right">₺{service.revenue.toLocaleString('tr-TR')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="expenses" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Gider Kategorileri</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { category: "Kira", amount: 8000, percentage: 35 },
                    { category: "Malzemeler", amount: 4500, percentage: 20 },
                    { category: "Personel", amount: 6000, percentage: 26 },
                    { category: "Faturalar", amount: 2000, percentage: 9 },
                    { category: "Diğer", amount: 2300, percentage: 10 }
                  ].map((expense, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{expense.category}</span>
                          <span className="text-sm text-muted-foreground">%{expense.percentage}</span>
                        </div>
                        <Progress value={expense.percentage} className="h-2" />
                      </div>
                      <span className="ml-4 font-medium w-24 text-right">₺{expense.amount.toLocaleString('tr-TR')}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Maliyet Optimizasyonu</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Malzeme Tasarrufu</span>
                      <Badge className="bg-green-500/20 text-green-600 border-green-500/30">Başarılı</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Toplu alımlarla %15 tasarruf sağlandı</p>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Enerji Tüketimi</span>
                      <Badge className="bg-amber-500/20 text-amber-600 border-amber-500/30">İyileştirme Gerekli</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">LED aydınlatmaya geçiş öneriliyor</p>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Stok Yönetimi</span>
                      <Badge className="bg-blue-500/20 text-blue-600 border-blue-500/30">Optimize</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Otomatik sipariş sistemi aktif</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Faturalar</CardTitle>
                <Button className="gap-2">
                  <FileText className="h-4 w-4" />
                  Fatura Oluştur
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fatura No</TableHead>
                    <TableHead>Müşteri</TableHead>
                    <TableHead>Tarih</TableHead>
                    <TableHead>Vade</TableHead>
                    <TableHead>Durum</TableHead>
                    <TableHead className="text-right">Tutar</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { no: "FTR-2024-001", customer: "Ayşe Yılmaz", date: "2024-01-15", due: "2024-01-25", status: "paid", amount: 1250 },
                    { no: "FTR-2024-002", customer: "Fatma Demir", date: "2024-01-14", due: "2024-01-24", status: "pending", amount: 850 },
                    { no: "FTR-2024-003", customer: "Zeynep Kaya", date: "2024-01-13", due: "2024-01-23", status: "overdue", amount: 650 },
                  ].map((invoice) => (
                    <TableRow key={invoice.no}>
                      <TableCell className="font-medium">{invoice.no}</TableCell>
                      <TableCell>{invoice.customer}</TableCell>
                      <TableCell>{new Date(invoice.date).toLocaleDateString('tr-TR')}</TableCell>
                      <TableCell>{new Date(invoice.due).toLocaleDateString('tr-TR')}</TableCell>
                      <TableCell>
                        <Badge variant={
                          invoice.status === "paid" ? "secondary" :
                          invoice.status === "pending" ? "default" : "destructive"
                        }>
                          {invoice.status === "paid" ? "Ödendi" :
                           invoice.status === "pending" ? "Bekliyor" : "Gecikmiş"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-medium">₺{invoice.amount}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Receipt className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}