import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Dashboard from "@/pages/Dashboard";
import Appointments from "@/pages/Appointments";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="customers" element={<div className="text-2xl">Müşteriler (Yakında)</div>} />
            <Route path="staff" element={<div className="text-2xl">Personel (Yakında)</div>} />
            <Route path="finance" element={<div className="text-2xl">Finanslar (Yakında)</div>} />
            <Route path="packages" element={<div className="text-2xl">Paketler (Yakında)</div>} />
            <Route path="notifications" element={<div className="text-2xl">Bildirimler (Yakında)</div>} />
            <Route path="reports" element={<div className="text-2xl">Raporlar (Yakında)</div>} />
            <Route path="ai-assistant" element={<div className="text-2xl">AI Asistan (Yakında)</div>} />
            <Route path="call-center" element={<div className="text-2xl">Çağrı Merkezi (Yakında)</div>} />
            <Route path="reminders" element={<div className="text-2xl">Hatırlatmalar (Yakında)</div>} />
            <Route path="invoices" element={<div className="text-2xl">Faturalar (Yakında)</div>} />
            <Route path="settings" element={<div className="text-2xl">Ayarlar (Yakında)</div>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
