"use client";

import { useState } from "react";
import {
  Store,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Sheet, SheetContent } from "@/components/ui/sheet";

const icons = {
  LayoutDashboard,
  Store,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
};

const MobileNav = ({ routes }) => {
  const [isMobileOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isMobileOpen} onOpenChange={setIsOpen}>
      <SheetContent side="left" className="p-0">
        <NavigationBar routes={routes} setIsOpen={setIsOpen} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

const NavigationBar = ({ routes, setIsOpen }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4 py-2">
      <Link
        href="/"
        className="flex items-center gap-2 px-2"
        onClick={() => setIsOpen(false)}
      >
        <Store className="h-6 w-6" />
        <span className="font-bold">ShopBuilder</span>
      </Link>
      <div className="px-2 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Menu</h2>
        <div className="space-y-1">
          {routes.map((route) => {
            const Icon = icons[route.icon]; // Get icon component dynamically
            return (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium",
                  pathname === route.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {Icon && <Icon className="h-4 w-4" />}
                {route.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
