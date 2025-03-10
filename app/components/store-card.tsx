import { Check, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface StoreCardProps {
  title: string
  description: string
  image: string
  status: "active" | "inactive" | "pending"
  products: number
  orders: number
  revenue: number
}

export function StoreCard({ title, description, image, status, products, orders, revenue }: StoreCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-32">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <Badge
          className={cn(
            "absolute right-2 top-2",
            status === "active" && "bg-green-500 hover:bg-green-600",
            status === "inactive" && "bg-gray-500 hover:bg-gray-600",
            status === "pending" && "bg-yellow-500 hover:bg-yellow-600",
          )}
        >
          {status === "active" && (
            <>
              <Check className="mr-1 h-3 w-3" /> Active
            </>
          )}
          {status === "inactive" && "Inactive"}
          {status === "pending" && (
            <>
              <Clock className="mr-1 h-3 w-3" /> Pending
            </>
          )}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="flex flex-col">
            <span className="text-muted-foreground">Products</span>
            <span className="font-medium">{products}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground">Orders</span>
            <span className="font-medium">{orders}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground">Revenue</span>
            <span className="font-medium">${revenue.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/stores/${title.toLowerCase().replace(/\s+/g, "-")}`}>View Details</Link>
        </Button>
        <Button size="sm" asChild>
          <Link href={`/stores/${title.toLowerCase().replace(/\s+/g, "-")}/edit`}>Edit Store</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

