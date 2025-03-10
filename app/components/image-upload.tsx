"use client"

import type React from "react"

import { UploadCloud } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ImageUploadProps {
  defaultImage?: string
  maxWidth?: number
  maxHeight?: number
  aspectRatio?: string
}

export function ImageUpload({
  defaultImage = "/placeholder.svg?height=200&width=200",
  maxWidth = 500,
  maxHeight = 500,
  aspectRatio = "1:1",
}: ImageUploadProps) {
  const [image, setImage] = useState(defaultImage)
  const [isDragging, setIsDragging] = useState(false)

  // Calculate aspect ratio for the container
  const [width, height] = aspectRatio.split(":").map(Number)
  const paddingBottom = `${(height / width) * 100}%`

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = (event) => {
          if (event.target?.result) {
            setImage(event.target.result as string)
          }
        }
        reader.readAsDataURL(file)
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          setImage(event.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div>
      <Card
        className={`relative overflow-hidden border-2 ${isDragging ? "border-primary border-dashed" : "border-input"}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div style={{ paddingBottom }} className="relative">
          <CardContent className="absolute inset-0 flex items-center justify-center p-0">
            {image ? (
              <div className="relative h-full w-full">
                <Image src={image || "/placeholder.svg"} alt="Uploaded image" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity hover:opacity-100">
                  <div className="text-center text-white">
                    <p className="mb-2">Click or drag to replace</p>
                    <Button variant="secondary" size="sm" onClick={() => setImage("")}>
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-6 text-center">
                <UploadCloud className="mb-2 h-10 w-10 text-muted-foreground" />
                <p className="mb-2 text-sm font-medium">Drag & drop an image here</p>
                <p className="mb-4 text-xs text-muted-foreground">
                  PNG, JPG or GIF up to {maxWidth}x{maxHeight}px
                </p>
                <Button variant="secondary" size="sm" asChild>
                  <label>
                    Browse Files
                    <input type="file" className="sr-only" accept="image/*" onChange={handleFileChange} />
                  </label>
                </Button>
              </div>
            )}
          </CardContent>
        </div>
      </Card>
    </div>
  )
}

