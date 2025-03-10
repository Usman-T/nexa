import {
  Clock,
  Download,
  Filter,
  Package,
  Search,
  ShoppingCart,
  Truck,
} from "lucide-react";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { OrderStatusBadge } from "@/components/custom/order-status-badge";

export default function OrdersPage() {
  // Sample order data - in a real app, this would come from a database
  const orders = [
    {
      id: "ORD-7652",
      customer: "Sophia Anderson",
      email: "sophia@example.com",
      date: "2023-06-23",
      total: 120.5,
      status: "completed",
      items: 2,
      store: "Fashion Boutique",
    },
    {
      id: "ORD-7651",
      customer: "Michael Johnson",
      email: "michael@example.com",
      date: "2023-06-22",
      total: 85.25,
      status: "processing",
      items: 1,
      store: "Tech Gadgets",
    },
    {
      id: "ORD-7650",
      customer: "Emma Williams",
      email: "emma@example.com",
      date: "2023-06-22",
      total: 210.75,
      status: "shipped",
      items: 3,
      store: "Home Decor",
    },
    {
      id: "ORD-7649",
      customer: "James Brown",
      email: "james@example.com",
      date: "2023-06-21",
      total: 45.99,
      status: "pending",
      items: 1,
      store: "Sports Gear",
    },
    {
      id: "ORD-7648",
      customer: "Olivia Davis",
      email: "olivia@example.com",
      date: "2023-06-21",
      total: 150.0,
      status: "completed",
      items: 2,
      store: "Beauty Products",
    },
    {
      id: "ORD-7647",
      customer: "William Miller",
      email: "william@example.com",
      date: "2023-06-20",
      total: 320.5,
      status: "cancelled",
      items: 4,
      store: "Tech Gadgets",
    },
    {
      id: "ORD-7646",
      customer: "Ava Wilson",
      email: "ava@example.com",
      date: "2023-06-20",
      total: 75.25,
      status: "refunded",
      items: 1,
      store: "Fashion Boutique",
    },
    {
      id: "ORD-7645",
      customer: "Noah Moore",
      email: "noah@example.com",
      date: "2023-06-19",
      total: 95.0,
      status: "shipped",
      items: 2,
      store: "Sports Gear",
    },
    {
      id: "ORD-7644",
      customer: "Isabella Taylor",
      email: "isabella@example.com",
      date: "2023-06-19",
      total: 180.75,
      status: "processing",
      items: 3,
      store: "Home Decor",
    },
    {
      id: "ORD-7643",
      customer: "Liam Anderson",
      email: "liam@example.com",
      date: "2023-06-18",
      total: 60.5,
      status: "completed",
      items: 1,
      store: "Pet Supplies",
    },
  ];

  // Order statistics
  const stats = [
    {
      title: "Total Orders",
      value: "573",
      change: "+12.5%",
      icon: ShoppingCart,
    },
    {
      title: "Processing",
      value: "45",
      change: "-2.5%",
      icon: Clock,
    },
    {
      title: "Shipped",
      value: "128",
      change: "+8.2%",
      icon: Truck,
    },
    {
      title: "Completed",
      value: "392",
      change: "+18.3%",
      icon: Package,
    },
  ];

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
          <p className="text-muted-foreground">
            Manage and track customer orders across all your stores
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-1">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Export</span>
          </Button>
          <Button>
            <span>Process Orders</span>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p
                className={`text-xs ${
                  stat.change.startsWith("+")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="all" className="mt-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <TabsList>
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="shipped">Shipped</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Filter className="h-3.5 w-3.5" />
              <span>Filter</span>
            </Button>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search orders..."
                className="h-8 w-[150px] pl-8 sm:w-[250px]"
              />
            </div>
          </div>
        </div>

        <TabsContent value="all" className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center">
              <div>
                <CardTitle>All Orders</CardTitle>
                <CardDescription>
                  Showing {orders.length} orders
                </CardDescription>
              </div>
              <div className="ml-auto flex gap-2">
                <Select defaultValue="newest">
                  <SelectTrigger className="h-8 w-[130px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest first</SelectItem>
                    <SelectItem value="oldest">Oldest first</SelectItem>
                    <SelectItem value="highest">Highest value</SelectItem>
                    <SelectItem value="lowest">Lowest value</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative w-full overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[30px]">
                        <Checkbox />
                      </TableHead>
                      <TableHead className="w-[100px]">Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Store</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                      <TableHead className="w-[100px] text-right">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell className="font-medium">
                          <Link
                            href={`/orders/${order.id.toLowerCase()}`}
                            className="hover:underline"
                          >
                            {order.id}
                          </Link>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{order.customer}</div>
                          <div className="text-xs text-muted-foreground">
                            {order.email}
                          </div>
                        </TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <OrderStatusBadge status={order.status} />
                        </TableCell>
                        <TableCell>{order.items}</TableCell>
                        <TableCell>{order.store}</TableCell>
                        <TableCell className="text-right font-medium">
                          ${order.total.toFixed(2)}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <span className="sr-only">Open menu</span>
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem asChild>
                                <Link
                                  href={`/orders/${order.id.toLowerCase()}`}
                                >
                                  View details
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem>Process order</DropdownMenuItem>
                              <DropdownMenuItem>Update status</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Print invoice</DropdownMenuItem>
                              <DropdownMenuItem>
                                Send notification
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Orders</CardTitle>
              <CardDescription>
                Orders awaiting payment confirmation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-[300px] items-center justify-center">
                <p className="text-muted-foreground">
                  Filtered orders will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="processing" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Processing Orders</CardTitle>
              <CardDescription>
                Orders being prepared for shipping
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-[300px] items-center justify-center">
                <p className="text-muted-foreground">
                  Filtered orders will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shipped" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Shipped Orders</CardTitle>
              <CardDescription>
                Orders that have been shipped to customers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-[300px] items-center justify-center">
                <p className="text-muted-foreground">
                  Filtered orders will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Completed Orders</CardTitle>
              <CardDescription>
                Orders that have been delivered and completed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-[300px] items-center justify-center">
                <p className="text-muted-foreground">
                  Filtered orders will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function MoreVertical({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}
