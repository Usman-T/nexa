"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  BarChart3,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Store,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarSeparator,
  SidebarMenuBadge,
  SidebarHeader,
} from "@/components/ui/sidebar";

const icons = {
  LayoutDashboard,
  Store,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
};

const DesktopNav = ({ routes }) => {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <Store className="h-6 w-6" />
          <span className="font-bold">ShopBuilder</span>
        </div>
        <SidebarSeparator />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {routes.map((route) => {
                const Icon = icons[route.icon]; // Get icon component
                return (
                  <SidebarMenuItem key={route.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === route.href}
                      tooltip={route.title}
                    >
                      <Link href={route.href}>
                        {Icon && <Icon className="h-4 w-4" />}
                        <span>{route.title}</span>
                        {route.title === "Orders" && (
                          <SidebarMenuBadge>6</SidebarMenuBadge>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4">
          <Button variant="outline" className="w-full">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Visit Marketplace
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DesktopNav;
