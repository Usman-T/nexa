"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageUpload } from "@/components/custom/image-upload";
import { StoreFormData } from "@/app/dashboard/stores/new/page";

interface AppearanceFormProps {
  formData: StoreFormData;
  updateFormData: (data: Partial<StoreFormData>) => void;
}

export function AppearanceForm({
  formData,
  updateFormData,
}: AppearanceFormProps) {
  const colorOptions = [
    { name: "Slate", value: "#0f172a" },
    { name: "Blue", value: "#1e40af" },
    { name: "Green", value: "#047857" },
    { name: "Red", value: "#b91c1c" },
    { name: "Orange", value: "#c2410c" },
  ];

  const accentOptions = [
    { name: "Orange", value: "#f97316" },
    { name: "Yellow", value: "#eab308" },
    { name: "Cyan", value: "#06b6d4" },
    { name: "Purple", value: "#8b5cf6" },
    { name: "Pink", value: "#ec4899" },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Store Logo</Label>
        <ImageUpload
          defaultImage={formData.logo}
          maxWidth={400}
          maxHeight={200}
          aspectRatio="2:1"
          onImageChange={(image) => updateFormData({ logo: image })}
        />
        <p className="text-xs text-muted-foreground">
          Upload your store logo. Recommended size: 400x200px.
        </p>
      </div>

      <div className="space-y-2">
        <Label>Store Banner</Label>
        <ImageUpload
          defaultImage={formData.banner}
          maxWidth={1200}
          maxHeight={300}
          aspectRatio="4:1"
          onImageChange={(image) => updateFormData({ banner: image })}
        />
        <p className="text-xs text-muted-foreground">
          Upload a banner image for your store. Recommended size: 1200x300px.
        </p>
      </div>

      <div className="space-y-2">
        <Label>Primary Color</Label>
        <div className="grid grid-cols-5 gap-2">
          {colorOptions.map((color) => (
            <div
              key={color.value}
              className={`group flex aspect-square cursor-pointer items-center justify-center rounded-md border ${
                formData.primaryColor === color.value
                  ? "ring-2 ring-primary"
                  : ""
              }`}
              style={{ backgroundColor: color.value }}
              onClick={() => updateFormData({ primaryColor: color.value })}
            >
              {formData.primaryColor === color.value && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Choose a primary color for your store theme.
        </p>
      </div>

      <div className="space-y-2">
        <Label>Accent Color</Label>
        <div className="grid grid-cols-5 gap-2">
          {accentOptions.map((color) => (
            <div
              key={color.value}
              className={`group flex aspect-square cursor-pointer items-center justify-center rounded-md border ${
                formData.accentColor === color.value
                  ? "ring-2 ring-primary"
                  : ""
              }`}
              style={{ backgroundColor: color.value }}
              onClick={() => updateFormData({ accentColor: color.value })}
            >
              {formData.accentColor === color.value && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Choose an accent color for buttons and highlights.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="font-family">Font Family</Label>
        <Select
          value={formData.fontFamily}
          onValueChange={(value) => updateFormData({ fontFamily: value })}
        >
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
        <p className="text-xs text-muted-foreground">
          Choose a font family for your store.
        </p>
      </div>
    </div>
  );
}
