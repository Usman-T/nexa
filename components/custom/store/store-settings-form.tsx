import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { StoreFormData } from "@/app/dashboard/stores/new/page"

interface StoreSettingsFormProps {
  formData: StoreFormData
  updateFormData: (data: Partial<StoreFormData>) => void
}

export function StoreSettingsForm({ formData, updateFormData }: StoreSettingsFormProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="tax-calculation">Automatic Tax Calculation</Label>
          <p className="text-sm text-muted-foreground">Automatically calculate and apply taxes based on location</p>
        </div>
        <Switch
          id="tax-calculation"
          checked={formData.taxCalculation}
          onCheckedChange={(checked) => updateFormData({ taxCalculation: checked })}
        />
      </div>

      <Separator />

      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="inventory-tracking">Inventory Tracking</Label>
          <p className="text-sm text-muted-foreground">Track product inventory and prevent overselling</p>
        </div>
        <Switch
          id="inventory-tracking"
          checked={formData.inventoryTracking}
          onCheckedChange={(checked) => updateFormData({ inventoryTracking: checked })}
        />
      </div>

      <Separator />

      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="customer-accounts">Customer Accounts</Label>
          <p className="text-sm text-muted-foreground">Allow customers to create accounts and track orders</p>
        </div>
        <Switch
          id="customer-accounts"
          checked={formData.customerAccounts}
          onCheckedChange={(checked) => updateFormData({ customerAccounts: checked })}
        />
      </div>

      <Separator />

      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="guest-checkout">Guest Checkout</Label>
          <p className="text-sm text-muted-foreground">Allow customers to check out without creating an account</p>
        </div>
        <Switch
          id="guest-checkout"
          checked={formData.guestCheckout}
          onCheckedChange={(checked) => updateFormData({ guestCheckout: checked })}
        />
      </div>
    </div>
  )
}

