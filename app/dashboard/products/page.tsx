import {
  AlertCircle,
  CheckCircle,
  FileText,
  MoreVertical,
  Package,
  Plus,
  Search,
  Tag,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
import { ProductCard } from "@/components/custom/product-card";
import { Badge } from "@/components/ui/badge";

export default function ProductsPage() {
  // Sample product data - in a real app, this would come from a database
  const products = [
    {
      id: "PROD-001",
      name: "Premium T-Shirt",
      description: "Soft cotton t-shirt with logo print",
      price: 29.99,
      comparePrice: 39.99,
      inventory: 125,
      status: "active",
      category: "Clothing",
      store: "Fashion Boutique",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "PROD-002",
      name: "Wireless Earbuds",
      description: "Bluetooth 5.0 with noise cancellation",
      price: 89.99,
      comparePrice: 119.99,
      inventory: 42,
      status: "active",
      category: "Electronics",
      store: "Tech Gadgets",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "PROD-003",
      name: "Ceramic Vase",
      description: "Handcrafted decorative vase",
      price: 49.99,
      comparePrice: null,
      inventory: 18,
      status: "active",
      category: "Home Decor",
      store: "Home Decor",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "PROD-004",
      name: "Moisturizing Cream",
      description: "Hydrating face cream with natural ingredients",
      price: 24.99,
      comparePrice: 29.99,
      inventory: 87,
      status: "active",
      category: "Beauty",
      store: "Beauty Products",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "PROD-005",
      name: "Running Shoes",
      description: "Lightweight performance running shoes",
      price: 79.99,
      comparePrice: 99.99,
      inventory: 35,
      status: "active",
      category: "Footwear",
      store: "Sports Gear",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "PROD-006",
      name: "Dog Collar",
      description: "Adjustable nylon collar for medium dogs",
      price: 14.99,
      comparePrice: null,
      inventory: 62,
      status: "active",
      category: "Pet Accessories",
      store: "Pet Supplies",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "PROD-007",
      name: "Classic Novel Collection",
      description: "Set of 5 classic literature books",
      price: 59.99,
      comparePrice: 75.99,
      inventory: 0,
      status: "out_of_stock",
      category: "Books",
      store: "Bookstore",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "PROD-008",
      name: "Organic Honey",
      description: "Pure organic wildflower honey",
      price: 12.99,
      comparePrice: null,
      inventory: 43,
      status: "active",
      category: "Food",
      store: "Organic Foods",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "PROD-009",
      name: "Silver Necklace",
      description: "Sterling silver pendant necklace",
      price: 89.99,
      comparePrice: 129.99,
      inventory: 15,
      status: "active",
      category: "Jewelry",
      store: "Jewelry Shop",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "PROD-010",
      name: "Yoga Mat",
      description: "Non-slip exercise yoga mat",
      price: 34.99,
      comparePrice: 44.99,
      inventory: 28,
      status: "active",
      category: "Fitness",
      store: "Sports Gear",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "PROD-011",
      name: "Coffee Maker",
      description: "Programmable drip coffee machine",
      price: 69.99,
      comparePrice: 89.99,
      inventory: 0,
      status: "draft",
      category: "Appliances",
      store: "Home Decor",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "PROD-012",
      name: "Leather Wallet",
      description: "Genuine leather bifold wallet",
      price: 39.99,
      comparePrice: null,
      inventory: 52,
      status: "active",
      category: "Accessories",
      store: "Fashion Boutique",
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  // Product statistics
  const stats = [
    {
      title: "Total Products",
      value: "1,234",
      change: "+12.5%",
      icon: Package,
    },
    {
      title: "Active Products",
      value: "1,043",
      change: "+8.2%",
      icon: CheckCircle,
    },
    {
      title: "Out of Stock",
      value: "57",
      change: "-2.5%",
      icon: AlertCircle,
    },
    {
      title: "Draft Products",
      value: "134",
      change: "+4.3%",
      icon: FileText,
    },
  ];

  // Categories for filtering
  const categories = [
    "All Categories",
    "Clothing",
    "Electronics",
    "Home Decor",
    "Beauty",
    "Footwear",
    "Pet Accessories",
    "Books",
    "Food",
    "Jewelry",
    "Fitness",
    "Appliances",
    "Accessories",
  ];

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Products</h2>
          <p className="text-muted-foreground">
            Manage and organize your product catalog
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-1">
            <Tag className="h-4 w-4" />
            <span className="hidden sm:inline">Categories</span>
          </Button>
          <Button asChild>
            <Link href="/products/new">
              <Plus className="mr-2 h-4 w-4" /> Add Product
            </Link>
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

      <div className="mt-6 space-y-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end">
          <div className="flex-1 md:max-w-sm">
            <label className="text-sm font-medium" htmlFor="search-products">
              Search
            </label>
            <div className="relative mt-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="search-products"
                placeholder="Search products..."
                className="pl-8"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:flex">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="category-filter">
                Category
              </label>
              <Select defaultValue="all">
                <SelectTrigger
                  id="category-filter"
                  className="w-full md:w-[180px]"
                >
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem
                      key={category}
                      value={category.toLowerCase().replace(/\s+/g, "_")}
                    >
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="status-filter">
                Status
              </label>
              <Select defaultValue="all">
                <SelectTrigger
                  id="status-filter"
                  className="w-full md:w-[150px]"
                >
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="out_of_stock">Out of Stock</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="store-filter">
                Store
              </label>
              <Select defaultValue="all">
                <SelectTrigger
                  id="store-filter"
                  className="w-full md:w-[180px]"
                >
                  <SelectValue placeholder="Store" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Stores</SelectItem>
                  <SelectItem value="fashion_boutique">
                    Fashion Boutique
                  </SelectItem>
                  <SelectItem value="tech_gadgets">Tech Gadgets</SelectItem>
                  <SelectItem value="home_decor">Home Decor</SelectItem>
                  <SelectItem value="beauty_products">
                    Beauty Products
                  </SelectItem>
                  <SelectItem value="sports_gear">Sports Gear</SelectItem>
                  <SelectItem value="pet_supplies">Pet Supplies</SelectItem>
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
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="inventory-high">
                    Inventory: High to Low
                  </SelectItem>
                  <SelectItem value="inventory-low">
                    Inventory: Low to High
                  </SelectItem>
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
              Showing <strong>{products.length}</strong> products
            </div>
          </div>
          <TabsContent value="grid" className="mt-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  comparePrice={product.comparePrice}
                  inventory={product.inventory}
                  status={product.status}
                  category={product.category}
                  store={product.store}
                  image={product.image}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="list" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Product List</CardTitle>
                <CardDescription>
                  A detailed list view of all your products
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&_tr]:border-b">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                          <Checkbox />
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                          Product
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                          Status
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                          Inventory
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                          Category
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                          Store
                        </th>
                        <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">
                          Price
                        </th>
                        <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                      {products.map((product) => (
                        <tr
                          key={product.id}
                          className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                        >
                          <td className="p-4 align-middle">
                            <Checkbox />
                          </td>
                          <td className="p-4 align-middle">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 overflow-hidden rounded-md">
                                <Image
                                  src={product.image || "/placeholder.svg"}
                                  alt={product.name}
                                  width={40}
                                  height={40}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div>
                                <div className="font-medium">
                                  {product.name}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {product.id}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 align-middle">
                            <ProductStatusBadge status={product.status} />
                          </td>
                          <td className="p-4 align-middle">
                            {product.inventory > 0 ? (
                              product.inventory
                            ) : (
                              <span className="text-red-500">Out of stock</span>
                            )}
                          </td>
                          <td className="p-4 align-middle">
                            {product.category}
                          </td>
                          <td className="p-4 align-middle">{product.store}</td>
                          <td className="p-4 align-middle text-right">
                            <div className="font-medium">
                              ${product.price.toFixed(2)}
                            </div>
                            {product.comparePrice && (
                              <div className="text-xs text-muted-foreground line-through">
                                ${product.comparePrice.toFixed(2)}
                              </div>
                            )}
                          </td>
                          <td className="p-4 align-middle text-right">
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
                                    href={`/products/${product.id.toLowerCase()}`}
                                  >
                                    View details
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                  <Link
                                    href={`/products/${product.id.toLowerCase()}/edit`}
                                  >
                                    Edit product
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  Duplicate product
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  Archive product
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  Delete product
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
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

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Product Categories</CardTitle>
            <CardDescription>
              Organize your products with categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Clothing",
                "Electronics",
                "Home Decor",
                "Beauty",
                "Footwear",
                "Pet Accessories",
              ].map((category) => (
                <div
                  key={category}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div>
                    <h3 className="font-medium">{category}</h3>
                    <p className="text-sm text-muted-foreground">12 products</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Manage
                  </Button>
                </div>
              ))}
              <div className="flex items-center justify-center rounded-lg border border-dashed p-4">
                <Button variant="outline" className="gap-1">
                  <Plus className="h-4 w-4" />
                  Add Category
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ProductStatusBadge({ status }: { status: string }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "out_of_stock":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      case "draft":
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active":
        return "Active";
      case "out_of_stock":
        return "Out of Stock";
      case "draft":
        return "Draft";
      default:
        return status.charAt(0).toUpperCase() + status.slice(1);
    }
  };

  return (
    <Badge className={getStatusColor(status)}>{getStatusLabel(status)}</Badge>
  );
}
