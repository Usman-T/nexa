import { DollarSign, Package, ShoppingCart, Users } from "lucide-react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StoreCard } from "@/components/custom/store-card";
import { RecentSales } from "@/components/custom/recent-sales";

export default function DashboardPage() {
  return (
    <div>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button>Download Report</Button>
          <Button variant="default">
            <Link href="/stores/new">Create Store</Link>
          </Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="stores">Stores</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Stores
                </CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12</div>
                <p className="text-xs text-muted-foreground">
                  +2 from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Orders
                </CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  +201 from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Customers
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                  +180 from last month
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Monthly Overview</CardTitle>
                <CardDescription>
                  Your store performance for the current month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium">Revenue</div>
                        <div className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">
                          +20.1%
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        $45,231.89
                      </div>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[75%] rounded-full bg-primary"></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <div>$0</div>
                      <div>Target: $60,000</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium">Orders</div>
                        <div className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">
                          +35.2%
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">573</div>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[65%] rounded-full bg-blue-500"></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <div>0</div>
                      <div>Target: 800</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium">New Customers</div>
                        <div className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">
                          +12.5%
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">180</div>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[45%] rounded-full bg-yellow-500"></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <div>0</div>
                      <div>Target: 400</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium">
                          Conversion Rate
                        </div>
                        <div className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">
                          +3.2%
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">4.5%</div>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[55%] rounded-full bg-purple-500"></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <div>0%</div>
                      <div>Target: 8%</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>
                  You made 265 sales this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="stores" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <StoreCard
              title="Fashion Boutique"
              description="Clothing and accessories store"
              image="/placeholder.svg?height=100&width=200"
              status="active"
              products={124}
              orders={432}
              revenue={12540.5}
            />
            <StoreCard
              title="Tech Gadgets"
              description="Electronics and gadgets store"
              image="/placeholder.svg?height=100&width=200"
              status="active"
              products={87}
              orders={256}
              revenue={18320.75}
            />
            <StoreCard
              title="Home Decor"
              description="Home decoration items"
              image="/placeholder.svg?height=100&width=200"
              status="active"
              products={65}
              orders={198}
              revenue={8750.25}
            />
            <StoreCard
              title="Beauty Products"
              description="Cosmetics and beauty items"
              image="/placeholder.svg?height=100&width=200"
              status="inactive"
              products={42}
              orders={0}
              revenue={0}
            />
            <StoreCard
              title="Sports Gear"
              description="Sports equipment and apparel"
              image="/placeholder.svg?height=100&width=200"
              status="active"
              products={93}
              orders={312}
              revenue={15680.3}
            />
            <StoreCard
              title="Pet Supplies"
              description="Products for pets"
              image="/placeholder.svg?height=100&width=200"
              status="active"
              products={56}
              orders={187}
              revenue={6430.8}
            />
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>
                View detailed analytics for all your stores.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                {/* Analytics content would go here */}
                <div className="flex h-full w-full flex-col items-center justify-center space-y-4">
                  <p className="text-muted-foreground">
                    Analytics dashboard coming soon
                  </p>
                  <Button>Request Early Access</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
