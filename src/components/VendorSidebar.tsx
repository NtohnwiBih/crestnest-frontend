import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { 
  BarChart3, 
  Package, 
  Store, 
  Settings, 
  Plus,
  ShoppingBag,
  Users,
  DollarSign,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import logo from "/img/logo-sm.png"

// Mock data for multiple shops
const shops = [
  { id: "1", name: "Fashion Store", category: "Clothing", status: "active" },
  { id: "2", name: "Tech Hub", category: "Electronics", status: "active" },
  { id: "3", name: "Home Essentials", category: "Home & Garden", status: "draft" },
];

const dashboardItems = [
  { title: "Overview", url: "/vendor-dashboard", icon: BarChart3 },
  { title: "Products", url: "/vendor-dashboard/products", icon: Package },
  { title: "Orders", url: "/vendor-dashboard/orders", icon: ShoppingBag },
  { title: "Customers", url: "/vendor-dashboard/customers", icon: Users },
  { title: "Analytics", url: "/vendor-dashboard/analytics", icon: TrendingUp },
  { title: "Revenue", url: "/vendor-dashboard/revenue", icon: DollarSign },
  { title: "Settings", url: "/vendor-dashboard/settings", icon: Settings },
];

export function VendorSidebar() {
  const { state } = useSidebar();
//   const location = useLocation();
//   const currentPath = location.pathname;
  const [selectedShop, setSelectedShop] = useState(shops[0]);
  
  const collapsed = state === "collapsed";

//   const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted/50";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarHeader className="p-4 border-b">
        {!collapsed && (
          <div className="space-y-3">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="Crest Nest Logo" 
                className="h-4 w-auto mr-2 sm:h-4 md:h-6 lg:h-8" 
              />
              <h2 className="text-lg font-bold">Crest <span className="text-primary">Nest</span></h2>
            </div>
            
            {/* Shop Selector */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Current Shop</span>
                <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              <div className="p-2 bg-muted rounded-md">
                <div className="font-medium text-sm">{selectedShop.name}</div>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="text-xs">
                    {selectedShop.category}
                  </Badge>
                  <Badge 
                    variant={selectedShop.status === "active" ? "default" : "outline"}
                    className="text-xs"
                  >
                    {selectedShop.status}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboardItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <SidebarGroup>
            <SidebarGroupLabel>All Shops</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {shops.map((shop) => (
                  <SidebarMenuItem key={shop.id}>
                    <SidebarMenuButton 
                      onClick={() => setSelectedShop(shop)}
                      className={selectedShop.id === shop.id ? "bg-primary/10" : ""}
                    >
                      <Store className="h-4 w-4" />
                      <div className="flex-1 text-left">
                        <div className="font-medium text-sm">{shop.name}</div>
                        <div className="text-xs text-muted-foreground">{shop.category}</div>
                      </div>
                      <Badge 
                        variant={shop.status === "active" ? "default" : "outline"}
                        className="text-xs"
                      >
                        {shop.status}
                      </Badge>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
}