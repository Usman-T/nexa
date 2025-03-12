"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { StoreFormData } from "@/app/dashboard/stores/new/page"

interface ContactInfoFormProps {
  formData: StoreFormData
  updateFormData: (data: Partial<StoreFormData>) => void
}

export function ContactInfoForm({ formData, updateFormData }: ContactInfoFormProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="contact-email" className="required">
          Email Address
        </Label>
        <Input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          placeholder="contact@example.com"
          required
        />
        <p className="text-xs text-muted-foreground">
          This email will be used for order notifications and customer inquiries.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-phone">Phone Number</Label>
        <Input
          id="contact-phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => updateFormData({ phone: e.target.value })}
          placeholder="+1 (555) 123-4567"
        />
        <p className="text-xs text-muted-foreground">Optional phone number for customer support.</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="store-address">Business Address</Label>
        <Textarea
          id="store-address"
          value={formData.address}
          onChange={(e) => updateFormData({ address: e.target.value })}
          placeholder="123 Commerce St, Suite 100, Business City, BC 12345"
          className="min-h-[100px]"
        />
        <p className="text-xs text-muted-foreground">Your business address for invoices and shipping information.</p>
      </div>
    </div>
  )
}

