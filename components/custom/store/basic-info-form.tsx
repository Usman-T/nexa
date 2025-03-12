"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { StoreStatusSelect } from "../store-status-select"
import { StoreFormData } from "@/app/dashboard/stores/new/page"

interface BasicInfoFormProps {
  formData: StoreFormData
  updateFormData: (data: Partial<StoreFormData>) => void
}

export function BasicInfoForm({ formData, updateFormData }: BasicInfoFormProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="store-name" className="required">
          Store Name
        </Label>
        <Input
          id="store-name"
          value={formData.name}
          onChange={(e) => updateFormData({ name: e.target.value })}
          placeholder="My Awesome Store"
          required
        />
        <p className="text-xs text-muted-foreground">This is how your store will appear to customers.</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="store-url" className="required">
          Store URL
        </Label>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">shopbuilder.com/</span>
          <Input
            id="store-url"
            value={formData.url}
            onChange={(e) => updateFormData({ url: e.target.value })}
            placeholder="my-awesome-store"
            className="flex-1"
            required
          />
        </div>
        <p className="text-xs text-muted-foreground">
          This will be the URL of your store. Only use letters, numbers, and hyphens.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="store-description">Description</Label>
        <Textarea
          id="store-description"
          value={formData.description}
          onChange={(e) => updateFormData({ description: e.target.value })}
          placeholder="Describe your store and what you sell..."
          className="min-h-[120px]"
        />
        <p className="text-xs text-muted-foreground">
          A brief description of your store. This will be displayed on your store page.
        </p>
      </div>

      <div className="space-y-2">
        <Label>Store Status</Label>
        <StoreStatusSelect defaultValue={formData.status} onChange={(value) => updateFormData({ status: value })} />
        <p className="text-xs text-muted-foreground">Set your store's visibility. You can change this later.</p>
      </div>
    </div>
  )
}

