"use client"

import React, { useState } from "react"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface QuoteFormProps {
  productType?: "life" | "car" | "home"
}

const QuoteForm = ({ productType = "life" }: QuoteFormProps) => {
  const t = useTranslations("quoteForm")
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    zipCode: "",
    productType: productType,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    setCurrentStep(prev => prev + 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // trackEvent({
    //   eventType: 'quote_request',
    //   productType: formData.productType,
    //   metadata: {
    //     customerData: formData,
    //     step: currentStep,
    //   },
    // });

    // Simulate form submission
    alert(t("successMessage"))
  }

  const getProductSpecificFields = () => {
    switch (productType) {
      case "car":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="vehicleYear">{t("steps.details.fields.vehicleYear")}</Label>
              <Input id="vehicleYear" name="vehicleYear" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vehicleMake">{t("steps.details.fields.vehicleMake")}</Label>
              <Input id="vehicleMake" name="vehicleMake" />
            </div>
          </>
        )
      case "home":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="homeValue">{t("steps.details.fields.homeValue")}</Label>
              <Input id="homeValue" name="homeValue" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="yearBuilt">{t("steps.details.fields.yearBuilt")}</Label>
              <Input id="yearBuilt" name="yearBuilt" type="number" />
            </div>
          </>
        )
      default:
        return (
          <div className="space-y-2">
            <Label htmlFor="annualIncome">{t("steps.details.fields.annualIncome.label")}</Label>
            <Select name="annualIncome">
              <SelectTrigger>
                <SelectValue placeholder={t("steps.details.fields.annualIncome.placeholder")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-25k">{t("steps.details.fields.annualIncome.options.under-25k")}</SelectItem>
                <SelectItem value="25k-50k">{t("steps.details.fields.annualIncome.options.25k-50k")}</SelectItem>
                <SelectItem value="50k-75k">{t("steps.details.fields.annualIncome.options.50k-75k")}</SelectItem>
                <SelectItem value="75k-100k">{t("steps.details.fields.annualIncome.options.75k-100k")}</SelectItem>
                <SelectItem value="over-100k">{t("steps.details.fields.annualIncome.options.over-100k")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )
    }
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-2xl">{t("title")}</CardTitle>
          <span className="text-sm text-muted-foreground">{t("stepIndicator", { step: currentStep })}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}></div>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div className="space-y-4">
              <CardDescription className="text-lg font-semibold mb-4">{t("steps.personal.title")}</CardDescription>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">{t("steps.personal.fields.firstName")}</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">{t("steps.personal.fields.lastName")}</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t("steps.personal.fields.email")}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{t("steps.personal.fields.phone")}</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Button type="button" onClick={handleNext} className="w-full">
                {t("buttons.next")}
              </Button>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <CardDescription className="text-lg font-semibold mb-4">{t("steps.details.title")}</CardDescription>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">{t("steps.details.fields.dateOfBirth")}</Label>
                  <Input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">{t("steps.details.fields.zipCode")}</Label>
                  <Input id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleInputChange} required />
                </div>
              </div>
              {getProductSpecificFields()}
              <div className="flex gap-4">
                <Button type="button" variant="outline" onClick={() => setCurrentStep(1)} className="flex-1">
                  {t("buttons.back")}
                </Button>
                <Button type="button" onClick={handleNext} className="flex-1">
                  {t("buttons.next")}
                </Button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <CardDescription className="text-lg font-semibold mb-4">{t("steps.review.title")}</CardDescription>
              <div className="bg-gray-50 p-4 rounded-md space-y-2">
                <p>
                  <strong>{t("steps.review.summary.name")}:</strong> {formData.firstName} {formData.lastName}
                </p>
                <p>
                  <strong>{t("steps.review.summary.email")}:</strong> {formData.email}
                </p>
                <p>
                  <strong>{t("steps.review.summary.phone")}:</strong> {formData.phone}
                </p>
                <p>
                  <strong>{t("steps.review.summary.product")}:</strong>{" "}
                  {productType.charAt(0).toUpperCase() + productType.slice(1)} {t("steps.review.summary.insurance")}
                </p>
              </div>
              <div className="flex gap-4">
                <Button type="button" variant="outline" onClick={() => setCurrentStep(2)} className="flex-1">
                  {t("buttons.back")}
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  data-cdp-action="submit-quote"
                  data-cdp-product={productType}>
                  {t("buttons.submit")}
                </Button>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}

export default QuoteForm
