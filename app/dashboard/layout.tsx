import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import MobileNav from "../components/MobileNav";
import DesktopNav from "../components/DesktopNav";

const routes = [
  {
    title: "Dashboard",
    icon: "LayoutDashboard",
    href: "/dashboard",
    variant: "default",
  },
  {
    title: "Stores",
    icon: "Store",
    href: "/dashboard/stores",
    variant: "default",
  },
  {
    title: "Products",
    icon: "Package",
    href: "/dashboard/products",
    variant: "default",
  },
  {
    title: "Orders",
    icon: "ShoppingCart",
    href: "/dashboard/orders",
    variant: "default",
  },
  {
    title: "Customers",
    icon: "Users",
    href: "/dashboard/customers",
    variant: "default",
  },
  {
    title: "Analytics",
    icon: "BarChart3",
    href: "/dashboard/analytics",
    variant: "default",
  },
  {
    title: "Settings",
    icon: "Settings",
    href: "/dashboard/settings",
    variant: "default",
  },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col">
        {/* <header className="sticky top-0 z-40 border-b bg-background">
          <div className="container flex h-16 items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="md:hidden" />
              <Link href="/" className="flex items-center gap-2">
                <Store className="h-6 w-6" />
                <span className="font-bold">ShopBuilder</span>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <form className="hidden md:block">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search..." className="w-[200px] pl-8 md:w-[300px] lg:w-[400px]" />
                </div>
              </form>
              <UserNav />
            </div>
          </div>
        </header> */}
        <div className="flex flex-1">
          <aside className="hidden md:block">
            <DesktopNav routes={routes} />
          </aside>
          <MobileNav routes={routes} />
          <main className="flex-1 p-6 md:p-8">
            <div className="mx-auto max-w-7xl">{children}</div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
