import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type OrderStatus = "pending" | "processing" | "shipped" | "completed" | "cancelled" | "refunded"

interface OrderStatusBadgeProps {
  status: OrderStatus | string
}

export function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
      case "processing":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100"
      case "shipped":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100"
      case "completed":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "cancelled":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      case "refunded":
        return "bg-orange-100 text-orange-800 hover:bg-orange-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  const getStatusLabel = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1)
  }

  return <Badge className={cn("font-medium", getStatusColor(status))}>{getStatusLabel(status)}</Badge>
}

