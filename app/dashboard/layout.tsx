import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import MobileNav from "@/components/custom/MobileNav";
import DesktopNav from "@/components/custom/DesktopNav";
import Navbar from "@/components/custom/Navbar";

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
      <div className="flex min-h-screen w-full flex-col">
        {/* <Navbar /> */}
        <div className="flex flex-1">
          <aside className="hidden md:block">
            <DesktopNav routes={routes} />
          </aside>
          <MobileNav routes={routes} />
          <main className="flex-1 p-6 md:p-8 h-screen w-full">
            <div>{children}</div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
