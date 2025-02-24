"use client"

import * as React from "react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"

const monthlyAmounts = [
  { value: "5000", label: "₦5,000" },
  { value: "50000", label: "₦50,000" },
  { value: "500000", label: "₦500,000" },
  { value: "1000000", label: "₦1,000,000" },
]

export function DonationForm() {
  const [selectedAmount, setSelectedAmount] = React.useState(monthlyAmounts[0].value)
  const [customAmount, setCustomAmount] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle donation submission
    console.log("Donation submitted:", {
      type: "monthly",
      amount: selectedAmount,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Tabs defaultValue="monthly" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="once">One-time</TabsTrigger>
        </TabsList>
        <TabsContent value="monthly" className="space-y-4">
          <RadioGroup value={selectedAmount} onValueChange={setSelectedAmount} className="grid grid-cols-2 gap-4">
            {monthlyAmounts.map((amount) => (
              <div key={amount.value}>
                <RadioGroupItem value={amount.value} id={`amount-${amount.value}`} className="peer sr-only" />
                <Label
                  htmlFor={`amount-${amount.value}`}
                  className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  {amount.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </TabsContent>
        <TabsContent value="once" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="custom-amount">Enter amount</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">₦</span>
              <Input
                id="custom-amount"
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="pl-8"
                placeholder="Enter custom amount"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
      <Button type="submit" className="w-full" size="lg">
        Donate Now
      </Button>
    </form>
  )
}

