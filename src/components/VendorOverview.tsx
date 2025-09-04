import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  ShoppingBag, 
  DollarSign, 
  TrendingUp, 
  Users,
  Plus,
  Settings,
  BarChart3
} from "lucide-react";

const VendorOverview = () => {
  const stats = [
    {
      title: "Total Products",
      value: "24",
      change: "+12%",
      icon: Package,
      trend: "up"
    },
    {
      title: "Total Orders",
      value: "156",
      change: "+23%",
      icon: ShoppingBag,
      trend: "up"
    },
    {
      title: "Revenue",
      value: "XAF 45,230",
      change: "+18%",
      icon: DollarSign,
      trend: "up"
    },
    {
      title: "Customers",
      value: "89",
      change: "+7%",
      icon: Users,
      trend: "up"
    },
  ];

  const recentOrders = [
    { id: "#001", customer: "John Doe", amount: "XAF 2,450", status: "completed", date: "2 hours ago" },
    { id: "#002", customer: "Jane Smith", amount: "XAF 1,890", status: "processing", date: "5 hours ago" },
    { id: "#003", customer: "Mike Johnson", amount: "XAF 3,200", status: "shipped", date: "1 day ago" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "processing": return "bg-yellow-100 text-yellow-800";
      case "shipped": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
            <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your shops.
            </p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
            </Button>
            <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Product
            </Button>
        </div>
       </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-3 w-3 text-green-600" />
                    <span className="text-xs text-green-600">{stat.change}</span>
                  </div>
                </div>
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest orders from your shops</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{order.id}</span>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{order.customer}</p>
                    <p className="text-xs text-muted-foreground">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{order.amount}</p>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your business</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Package className="h-4 w-4 mr-2" />
              Add Product
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Plus className="h-4 w-4 mr-2" />
              Create New Shop
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <BarChart3 className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Settings className="h-4 w-4 mr-2" />
              Shop Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VendorOverview;