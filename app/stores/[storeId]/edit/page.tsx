"use client"

import { ArrowLeft, Save, Trash } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { DashboardShell } from "@/app/components/dashboard-shell"
import { StoreStatusSelect } from "@/app/components/store-status-select"
import { ImageUpload } from "@/app/components/image-upload"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EditStorePage({ params }: { params: { storeId: string } }) {
  // In a real app, you would fetch the store data based on the storeId
  const storeId = params.storeId
  const storeName = storeId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/stores">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to stores</span>
            </Link>
          </Button>
          <h2 className="text-3xl font-bold tracking-tight">{storeName}</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-1">
            <Trash className="h-4 w-4" />
            <span className="hidden sm:inline">Delete Store</span>
          </Button>
          <Button className="gap-1">
            <Save className="h-4 w-4" />
            <span className="hidden sm:inline">Save Changes</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="general" className="mt-6">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="general" className="flex-1 sm:flex-none">
            General
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex-1 sm:flex-none">
            Appearance
          </TabsTrigger>
          <TabsTrigger value="products" className="flex-1 sm:flex-none">
            Products
          </TabsTrigger>
          <TabsTrigger value="payments" className="flex-1 sm:flex-none">
            Payments
          </TabsTrigger>
          <TabsTrigger value="shipping" className="flex-1 sm:flex-none">
            Shipping
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Store Information</CardTitle>
              <CardDescription>Update your store details and settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="store-name">Store Name</Label>
                  <Input id="store-name" defaultValue={storeName} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="store-url">Store URL</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">shopbuilder.com/</span>
                    <Input id="store-url" defaultValue={storeId} className="flex-1" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="store-description">Description</Label>
                <Textarea
                  id="store-description"
                  placeholder="Describe your store"
                  defaultValue={`${storeName} is a premier online destination for quality products.`}
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-2">
                <Label>Store Status</Label>
                <StoreStatusSelect defaultValue="active" />
              </div>

              <div className="space-y-2">
                <Label>Store Logo</Label>
                <ImageUpload
                  defaultImage="/placeholder.svg?height=100&width=200"
                  maxWidth={400}
                  maxHeight={200}
                  aspectRatio="2:1"
                />
              </div>

              <div className="space-y-2">
                <Label>Store Banner</Label>
                <ImageUpload
                  defaultImage="/placeholder.svg?height=200&width=800"
                  maxWidth={1200}
                  maxHeight={300}
                  aspectRatio="4:1"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>How customers can reach you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email Address</Label>
                  <Input id="contact-email" type="email" defaultValue={`contact@${storeId}.com`} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Phone Number</Label>
                  <Input id="contact-phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="store-address">Business Address</Label>
                <Textarea
                  id="store-address"
                  placeholder="Enter your business address"
                  defaultValue="123 Commerce St, Suite 100, Business City, BC 12345"
                  className="min-h-[80px]"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Store Settings</CardTitle>
              <CardDescription>Configure how your store operates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="tax-calculation">Automatic Tax Calculation</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically calculate and apply taxes based on location
                  </p>
                </div>
                <Switch id="tax-calculation" defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="inventory-tracking">Inventory Tracking</Label>
                  <p className="text-sm text-muted-foreground">Track product inventory and prevent overselling</p>
                </div>
                <Switch id="inventory-tracking" defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="customer-accounts">Customer Accounts</Label>
                  <p className="text-sm text-muted-foreground">Allow customers to create accounts and track orders</p>
                </div>
                <Switch id="customer-accounts" defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="guest-checkout">Guest Checkout</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow customers to check out without creating an account
                  </p>
                </div>
                <Switch id="guest-checkout" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Theme Settings</CardTitle>
              <CardDescription>Customize your store's colors, fonts, and overall appearance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Store Preview</h3>
                  <div className="overflow-hidden rounded-md border">
                    <div className="bg-primary p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-primary-foreground">
                          <div className="h-6 w-6 rounded-full bg-primary-foreground/20"></div>
                          <span className="font-bold">{storeName}</span>
                        </div>
                        <div className="flex gap-4 text-primary-foreground">
                          <div className="h-4 w-4 rounded-full bg-primary-foreground/20"></div>
                          <div className="h-4 w-4 rounded-full bg-primary-foreground/20"></div>
                          <div className="h-4 w-4 rounded-full bg-primary-foreground/20"></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-card p-4">
                      <div className="mb-4 h-32 rounded-md bg-muted"></div>
                      <div className="mb-2 h-6 w-2/3 rounded-md bg-muted"></div>
                      <div className="mb-4 h-4 w-1/2 rounded-md bg-muted"></div>
                      <div className="flex gap-2">
                        <div className="h-8 w-24 rounded-md bg-primary"></div>
                        <div className="h-8 w-24 rounded-md bg-secondary"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Primary Color</Label>
                    <div className="grid grid-cols-5 gap-2">
                      {["#0f172a", "#1e40af", "#047857", "#b91c1c", "#7c2d12"].map((color) => (
                        <div
                          key={color}
                          className="group flex aspect-square cursor-pointer items-center justify-center rounded-md border"
                          style={{ backgroundColor: color }}
                          onClick={() => {
                            // In a real app, this would update the theme
                          }}
                        >
                          <div className="h-4 w-4 rounded-full bg-white opacity-0 group-hover:opacity-50"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Accent Color</Label>
                    <div className="grid grid-cols-5 gap-2">
                      {["#f97316", "#eab308", "#06b6d4", "#8b5cf6", "#ec4899"].map((color) => (
                        <div
                          key={color}
                          className="group flex aspect-square cursor-pointer items-center justify-center rounded-md border"
                          style={{ backgroundColor: color }}
                          onClick={() => {
                            // In a real app, this would update the theme
                          }}
                        >
                          <div className="h-4 w-4 rounded-full bg-white opacity-0 group-hover:opacity-50"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="font-family">Font Family</Label>
                    <Select defaultValue="inter">
                      <SelectTrigger id="font-family">
                        <SelectValue placeholder="Select font" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inter">Inter</SelectItem>
                        <SelectItem value="roboto">Roboto</SelectItem>
                        <SelectItem value="opensans">Open Sans</SelectItem>
                        <SelectItem value="lato">Lato</SelectItem>
                        <SelectItem value="montserrat">Montserrat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="border-radius">Border Radius</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger id="border-radius">
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                        <SelectItem value="full">Full</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Layout Settings</CardTitle>
              <CardDescription>Configure your store's layout and structure</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="header-layout">Header Layout</Label>
                  <Select defaultValue="centered">
                    <SelectTrigger id="header-layout">
                      <SelectValue placeholder="Select layout" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="centered">Centered</SelectItem>
                      <SelectItem value="left-aligned">Left Aligned</SelectItem>
                      <SelectItem value="minimal">Minimal</SelectItem>
                      <SelectItem value="expanded">Expanded</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="footer-layout">Footer Layout</Label>
                  <Select defaultValue="standard">
                    <SelectTrigger id="footer-layout">
                      <SelectValue placeholder="Select layout" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="minimal">Minimal</SelectItem>
                      <SelectItem value="expanded">Expanded</SelectItem>
                      <SelectItem value="multi-column">Multi-Column</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product-layout">Product Layout</Label>
                  <Select defaultValue="grid">
                    <SelectTrigger id="product-layout">
                      <SelectValue placeholder="Select layout" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grid">Grid</SelectItem>
                      <SelectItem value="list">List</SelectItem>
                      <SelectItem value="compact">Compact</SelectItem>
                      <SelectItem value="featured">Featured</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product-density">Product Density</Label>
                  <Select defaultValue="normal">
                    <SelectTrigger id="product-density">
                      <SelectValue placeholder="Select density" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="compact">Compact</SelectItem>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="relaxed">Relaxed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Display Options</h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="show-breadcrumbs">Show Breadcrumbs</Label>
                    <Switch id="show-breadcrumbs" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="show-search">Show Search Bar</Label>
                    <Switch id="show-search" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="show-cart">Show Cart Icon</Label>
                    <Switch id="show-cart" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="show-wishlist">Show Wishlist</Label>
                    <Switch id="show-wishlist" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="show-filters">Show Product Filters</Label>
                    <Switch id="show-filters" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="show-sorting">Show Product Sorting</Label>
                    <Switch id="show-sorting" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Layout Settings</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Custom CSS</CardTitle>
              <CardDescription>Add custom CSS to further customize your store's appearance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-2">
                  <div className="text-sm font-medium">custom.css</div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      Format
                    </Button>
                    <Button variant="ghost" size="sm">
                      Copy
                    </Button>
                  </div>
                </div>
                <Textarea
                  className="min-h-[300px] resize-none rounded-none border-0 font-mono text-sm"
                  placeholder="/* Add your custom CSS here */

.store-header {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.product-card:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}"
                />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Custom CSS will be applied to your store after the default styles.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Save CSS</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Products Management</CardTitle>
              <CardDescription>Manage your store's product catalog</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">Manage your products from the Products page</p>
                <Button asChild>
                  <Link href="/products">Go to Products</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Configure how your store accepts payments</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">Payment method configuration coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shipping" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Options</CardTitle>
              <CardDescription>Configure shipping methods and rates</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">Shipping configuration coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

