import { Check, X } from "lucide-react"
import { StoreFormData } from "@/app/dashboard/stores/new/page"
import { Separator } from "@/components/ui/separator"

interface ReviewFormProps {
  formData: StoreFormData
}

export function ReviewForm({ formData }: ReviewFormProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Basic Information</h3>
        <div className="mt-3 space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-sm font-medium">Store Name</div>
            <div className="col-span-2 text-sm">{formData.name || "Not provided"}</div>
          </div>
          <Separator />
          <div className="grid grid-cols-3 gap-4">
            <div className="text-sm font-medium">Store URL</div>
            <div className="col-span-2 text-sm">
              {formData.url ? `shopbuilder.com/${formData.url}` : "Not provided"}
            </div>
          </div>
          <Separator />
          <div className="grid grid-cols-3 gap-4">
            <div className="text-sm font-medium">Description</div>
            <div className="col-span-2 text-sm">{formData.description || "Not provided"}</div>
          </div>
          <Separator />
          <div className="grid grid-cols-3 gap-4">
            <div className="text-sm font-medium">Status</div>
            <div className="col-span-2 text-sm capitalize">{formData.status}</div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium">Appearance</h3>
        <div className="mt-3 space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-sm font-medium">Logo</div>
            <div className="col-span-2">
              <div className="h-12 w-24 overflow-hidden rounded border">
                <img
                  src={formData.logo || "/placeholder.svg?height=100&width=200"}
                  alt="Store Logo"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <Separator />
          <div className="grid grid-cols-3 gap-4">
            <div className="text-sm font-medium">Banner</div>
            <div className="col-span-2">
              <div className="h-12 w-48 overflow-hidden rounded border">
                <img
                  src={formData.banner || "/placeholder.svg?height=200&width=800"}
                  alt="Store Banner"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <Separator />
          <div className="grid grid-cols-3 gap-4">
            <div className="text-sm font-medium">Colors</div>
            <div className="col-span-2 flex items-center gap-2">
              <div className="h-5 w-5 rounded-full" style={{ backgroundColor: formData.primaryColor }} />
              <span className="text-sm">Primary</span>
              <div className="ml-4 h-5 w-5 rounded-full" style={{ backgroundColor: formData.accentColor }} />
              <span className="text-sm">Accent</span>
            </div>
          </div>
          <Separator />
          <div className="grid grid-cols-3 gap-4">
            <div className="text-sm font-medium">Font</div>
            <div className="col-span-2 text-sm capitalize">{formData.fontFamily}</div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium">Contact Information</h3>
        <div className="mt-3 space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-sm font-medium">Email</div>
            <div className="col-span-2 text-sm">{formData.email || "Not provided"}</div>
          </div>
          <Separator />
          <div className="grid grid-cols-3 gap-4">
            <div className="text-sm font-medium">Phone</div>
            <div className="col-span-2 text-sm">{formData.phone || "Not provided"}</div>
          </div>
          <Separator />
          <div className="grid grid-cols-3 gap-4">
            <div className="text-sm font-medium">Address</div>
            <div className="col-span-2 text-sm">{formData.address || "Not provided"}</div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium">Store Settings</h3>
        <div className="mt-3 space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-sm font-medium">Tax Calculation</div>
            <div className="col-span-2">
              {formData.taxCalculation ? (
                <div className="flex items-center text-green-600">
                  <Check className="mr-1 h-4 w-4" /> Enabled
                </div>
              ) : (
                <div className="flex items-center text-red-600">
                  <X className="mr-1 h-4 w-4" /> Disabled
                </div>
              )}
            </div>
          </div>
          <Separator />
          <div className="grid grid-cols-3 gap-4">
            <div className="text-sm font-medium">Inventory Tracking</div>
            <div className="col-span-2">
              {formData.inventoryTracking ? (
                <div className="flex items-center text-green-600">
                  <Check className="mr-1 h-4 w-4" /> Enabled
                </div>
              ) : (
                <div className="flex items-center text-red-600">
                  <X className="mr-1 h-4 w-4" /> Disabled
                </div>
              )}
            </div>
          </div>
          <Separator />
          <div className="grid grid-cols-3 gap-4">
            <div className="text-sm font-medium">Customer Accounts</div>
            <div className="col-span-2">
              {formData.customerAccounts ? (
                <div className="flex items-center text-green-600">
                  <Check className="mr-1 h-4 w-4" /> Enabled
                </div>
              ) : (
                <div className="flex items-center text-red-600">
                  <X className="mr-1 h-4 w-4" /> Disabled
                </div>
              )}
            </div>
          </div>
          <Separator />
          <div className="grid grid-cols-3 gap-4">
            <div className="text-sm font-medium">Guest Checkout</div>
            <div className="col-span-2">
              {formData.guestCheckout ? (
                <div className="flex items-center text-green-600">
                  <Check className="mr-1 h-4 w-4" /> Enabled
                </div>
              ) : (
                <div className="flex items-center text-red-600">
                  <X className="mr-1 h-4 w-4" /> Disabled
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

