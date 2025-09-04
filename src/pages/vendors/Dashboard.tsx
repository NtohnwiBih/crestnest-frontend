import LangCurrencyDropdown from "@/components/dropdown/vendor/language";
import LocationDropdown from "@/components/dropdown/vendor/location";
import UserProfileDropdown from "@/components/dropdown/vendor/user-profile";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import VendorOverview from "@/components/VendorOverview";
import { VendorSidebar } from "@/components/VendorSidebar";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex">
        <VendorSidebar />
        
        <SidebarInset className="flex-1">
          {/* Header with sidebar trigger */}
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="flex items-center gap-2 flex-1">
              <h1 className="hidden lg:block font-semibold">Vendor Dashboard</h1>
            </div>
            <div className="flex items-center gap-2">
              <LocationDropdown />
              <LangCurrencyDropdown />
              <UserProfileDropdown />
            </div>
          </header>
          
          {/* Main content */}
          <main className="flex-1 p-6">
            <VendorOverview />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;