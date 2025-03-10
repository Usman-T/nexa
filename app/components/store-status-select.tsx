"use client"

import { Check, ChevronsUpDown } from "lucide-react"
import { useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const statuses = [
  {
    value: "active",
    label: "Active",
    description: "Store is live and accepting orders",
    color: "bg-green-500",
  },
  {
    value: "inactive",
    label: "Inactive",
    description: "Store is not visible to customers",
    color: "bg-gray-500",
  },
  {
    value: "pending",
    label: "Pending",
    description: "Store is awaiting approval",
    color: "bg-yellow-500",
  },
  {
    value: "maintenance",
    label: "Maintenance",
    description: "Store is temporarily down for maintenance",
    color: "bg-blue-500",
  },
]

interface StoreStatusSelectProps {
  defaultValue?: string
}

export function StoreStatusSelect({ defaultValue = "active" }: StoreStatusSelectProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(defaultValue)

  const selectedStatus = statuses.find((status) => status.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
          <div className="flex items-center gap-2">
            <div className={`h-3 w-3 rounded-full ${selectedStatus?.color}`} />
            {selectedStatus?.label}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search status..." />
          <CommandList>
            <CommandEmpty>No status found.</CommandEmpty>
            <CommandGroup>
              {statuses.map((status) => (
                <CommandItem
                  key={status.value}
                  value={status.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className={`h-3 w-3 rounded-full ${status.color}`} />
                    <div>
                      <p>{status.label}</p>
                      <p className="text-xs text-muted-foreground">{status.description}</p>
                    </div>
                  </div>
                  <Check className={cn("ml-auto h-4 w-4", value === status.value ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

