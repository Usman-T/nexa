import { Edit, MoreHorizontal, ShoppingCart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ProductCardProps {
  id: string
  name: string
  description: string
  price: number
  comparePrice: number | null
  inventory: number
  status: string
  category: string
  store: string
  image: string
}

export function ProductCard({
  id,
  name,
  description,
  price,
  comparePrice,
  inventory,
  status,
  category,
  store,
  image,
}: ProductCardProps) {
  const discount = comparePrice ? Math.round(((comparePrice - price) / comparePrice) * 100) : null

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={300}
            height={300}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
        {discount && <Badge className="absolute left-2 top-2 bg-red-500 hover:bg-red-600">{discount}% OFF</Badge>}
        {status === "out_of_stock" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60">
            <Badge className="bg-red-500 px-3 py-1 text-base hover:bg-red-600">Out of Stock</Badge>
          </div>
        )}
        {status === "draft" && <Badge className="absolute right-2 top-2 bg-gray-500 hover:bg-gray-600">Draft</Badge>}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/80 text-gray-800 opacity-80 hover:bg-white hover:opacity-100"
            >
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">More options</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem asChild>
              <Link href={`/products/${id.toLowerCase()}`}>View details</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/products/${id.toLowerCase()}/edit`}>Edit product</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Duplicate product</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Archive product</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Delete product</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="line-clamp-1">{name}</CardTitle>
            <CardDescription className="line-clamp-1">{category}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Star className="mr-1 h-3.5 w-3.5 fill-current text-yellow-500" />
            4.5 (24)
          </div>
          <div className="text-sm text-muted-foreground">•</div>
          <div className="text-sm text-muted-foreground">{store}</div>
        </div>
        <div className="mt-2 flex items-end gap-2">
          <div className="text-lg font-bold">${price.toFixed(2)}</div>
          {comparePrice && <div className="text-sm text-muted-foreground line-through">${comparePrice.toFixed(2)}</div>}
        </div>
        <div className="mt-1 text-sm text-muted-foreground">
          {inventory > 0 ? (
            inventory < 10 ? (
              <span className="text-amber-600">Only {inventory} left</span>
            ) : (
              <span>In stock</span>
            )
          ) : (
            <span className="text-red-500">Out of stock</span>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 p-4 pt-0">
        <Button variant="outline" size="sm" className="w-full gap-1" asChild>
          <Link href={`/products/${id.toLowerCase()}/edit`}>
            <Edit className="h-3.5 w-3.5" />
            <span>Edit</span>
          </Link>
        </Button>
        <Button size="sm" className="w-full gap-1" disabled={inventory === 0 || status === "draft"}>
          <ShoppingCart className="h-3.5 w-3.5" />
          <span>Add</span>
        </Button>
      </CardFooter>
    </Card>
  )
}

