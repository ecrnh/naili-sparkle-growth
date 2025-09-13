import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Users,
  UserCheck,
  DollarSign,
  Package,
  MessageSquare,
  BarChart3,
  Settings,
  Menu,
  Sparkles,
  Phone,
  Bell,
  FileText,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const mainItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Randevular", url: "/appointments", icon: Calendar, badge: "12" },
  { title: "Müşteriler", url: "/customers", icon: Users },
  { title: "Personel", url: "/staff", icon: UserCheck },
];

const managementItems = [
  { title: "Finanslar", url: "/finance", icon: DollarSign },
  { title: "Paketler", url: "/packages", icon: Package },
  { title: "Bildirimler", url: "/notifications", icon: MessageSquare, badge: "3" },
  { title: "Raporlar", url: "/reports", icon: BarChart3 },
];

const systemItems = [
  { title: "AI Asistan", url: "/ai-assistant", icon: Sparkles, badge: "Yeni" },
  { title: "Çağrı Merkezi", url: "/call-center", icon: Phone },
  { title: "Hatırlatmalar", url: "/reminders", icon: Bell },
  { title: "Faturalar", url: "/invoices", icon: FileText },
  { title: "Ayarlar", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const getNavClass = (path: string) => {
    const isActive = location.pathname === path;
    return isActive 
      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
      : "hover:bg-accent hover:text-accent-foreground";
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-border/50">
        <div className="flex items-center gap-2 px-4 py-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-glow">
            <Sparkles className="h-6 w-6 text-primary-foreground" />
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="text-xl font-bold text-gradient">Naily</h1>
              <p className="text-xs text-muted-foreground">Stüdyo Yönetimi</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Ana Menü</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={getNavClass(item.url)}>
                    <NavLink to={item.url}>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && (
                        <>
                          <span className="flex-1">{item.title}</span>
                          {item.badge && (
                            <Badge variant="secondary" className="ml-auto">
                              {item.badge}
                            </Badge>
                          )}
                        </>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Yönetim</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {managementItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={getNavClass(item.url)}>
                    <NavLink to={item.url}>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && (
                        <>
                          <span className="flex-1">{item.title}</span>
                          {item.badge && (
                            <Badge variant="secondary" className="ml-auto">
                              {item.badge}
                            </Badge>
                          )}
                        </>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Sistem</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {systemItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={getNavClass(item.url)}>
                    <NavLink to={item.url}>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && (
                        <>
                          <span className="flex-1">{item.title}</span>
                          {item.badge && (
                            <Badge 
                              variant={item.badge === "Yeni" ? "default" : "secondary"} 
                              className="ml-auto"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/50">
        <div className="flex items-center gap-2 px-4 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
            <Users className="h-4 w-4" />
          </div>
          {!isCollapsed && (
            <div className="flex-1">
              <p className="text-sm font-medium">Nail Art Studio</p>
              <p className="text-xs text-muted-foreground">Premium Plan</p>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}