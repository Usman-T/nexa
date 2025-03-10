import { Plus, Search } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StoreCard } from "@/components/custom/store-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function StoresPage() {
  // Sample store data - in a real app, this would come from a database
  const stores = [
    {
      title: "Fashion Boutique",
      description: "Clothing and accessories store",
      image: "/placeholder.svg?height=100&width=200",
      status: "active" as const,
      products: 124,
      orders: 432,
      revenue: 12540.5,
    },
    {
      title: "Tech Gadgets",
      description: "Electronics and gadgets store",
      image: "/placeholder.svg?height=100&width=200",
      status: "active" as const,
      products: 87,
      orders: 256,
      revenue: 18320.75,
    },
    {
      title: "Home Decor",
      description: "Home decoration items",
      image: "/placeholder.svg?height=100&width=200",
      status: "active" as const,
      products: 65,
      orders: 198,
      revenue: 8750.25,
    },
    {
      title: "Beauty Products",
      description: "Cosmetics and beauty items",
      image: "/placeholder.svg?height=100&width=200",
      status: "inactive" as const,
      products: 42,
      orders: 0,
      revenue: 0,
    },
    {
      title: "Sports Gear",
      description: "Sports equipment and apparel",
      image: "/placeholder.svg?height=100&width=200",
      status: "active" as const,
      products: 93,
      orders: 312,
      revenue: 15680.3,
    },
    {
      title: "Pet Supplies",
      description: "Products for pets",
      image: "/placeholder.svg?height=100&width=200",
      status: "active" as const,
      products: 56,
      orders: 187,
      revenue: 6430.8,
    },
    {
      title: "Bookstore",
      description: "Books and stationery",
      image: "/placeholder.svg?height=100&width=200",
      status: "pending" as const,
      products: 210,
      orders: 0,
      revenue: 0,
    },
    {
      title: "Organic Foods",
      description: "Organic and health foods",
      image: "/placeholder.svg?height=100&width=200",
      status: "active" as const,
      products: 78,
      orders: 145,
      revenue: 4320.6,
    },
    {
      title: "Jewelry Shop",
      description: "Fine jewelry and accessories",
      image: "/placeholder.svg?height=100&width=200",
      status: "active" as const,
      products: 42,
      orders: 89,
      revenue: 22450.75,
    },
  ];

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Stores</h2>
          <p className="text-muted-foreground">
            Manage and monitor all your e-commerce stores
          </p>
        </div>
        <Button asChild>
          <Link href="/stores/new">
            <Plus className="mr-2 h-4 w-4" /> Create Store
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-end">
        <div className="flex-1 md:max-w-sm">
          <label className="text-sm font-medium" htmlFor="search-stores">
            Search
          </label>
          <div className="relative mt-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="search-stores"
              placeholder="Search stores..."
              className="pl-8"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:flex">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium" htmlFor="status-filter">
              Status
            </label>
            <Select defaultValue="all">
              <SelectTrigger id="status-filter" className="w-full md:w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium" htmlFor="sort-by">
              Sort By
            </label>
            <Select defaultValue="newest">
              <SelectTrigger id="sort-by" className="w-full md:w-[150px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="revenue-high">Highest Revenue</SelectItem>
                <SelectItem value="revenue-low">Lowest Revenue</SelectItem>
                <SelectItem value="orders-high">Most Orders</SelectItem>
                <SelectItem value="orders-low">Least Orders</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Tabs defaultValue="grid" className="mt-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="grid">Grid</TabsTrigger>
            <TabsTrigger value="list">List</TabsTrigger>
          </TabsList>
          <div className="text-sm text-muted-foreground">
            Showing <strong>{stores.length}</strong> stores
          </div>
        </div>
        <TabsContent value="grid" className="mt-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {stores.map((store) => (
              <StoreCard
                key={store.title}
                title={store.title}
                description={store.description}
                image={store.image}
                status={store.status}
                products={store.products}
                orders={store.orders}
                revenue={store.revenue}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="list" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Store List</CardTitle>
              <CardDescription>
                A detailed list view of all your stores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Store
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Status
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Products
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Orders
                      </th>
                      <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">
                        Revenue
                      </th>
                      <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&_tr:last-child]:border-0">
                    {stores.map((store) => (
                      <tr
                        key={store.title}
                        className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                      >
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 overflow-hidden rounded-md">
                              <img
                                src={store.image || "/placeholder.svg"}
                                alt={store.title}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-medium">{store.title}</div>
                              <div className="text-xs text-muted-foreground">
                                {store.description}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <div
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                              store.status === "active"
                                ? "bg-green-100 text-green-800"
                                : store.status === "inactive"
                                ? "bg-gray-100 text-gray-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {store.status.charAt(0).toUpperCase() +
                              store.status.slice(1)}
                          </div>
                        </td>
                        <td className="p-4 align-middle">{store.products}</td>
                        <td className="p-4 align-middle">{store.orders}</td>
                        <td className="p-4 align-middle text-right">
                          ${store.revenue.toFixed(2)}
                        </td>
                        <td className="p-4 align-middle text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm" asChild>
                              <Link
                                href={`/stores/${store.title
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                              >
                                View
                              </Link>
                            </Button>
                            <Button variant="ghost" size="sm" asChild>
                              <Link
                                href={`/stores/${store.title
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}/edit`}
                              >
                                Edit
                              </Link>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
