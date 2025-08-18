import React from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle, LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  title: string
  description: string
  features: string[]
  route: string
  Icon: LucideIcon // Uppercase prop name
  cta: string
}

const ProductCard = ({ title, description, features, route, Icon, cta }: ProductCardProps) => {
  const handleProductClick = () => {}

  return (
    <Card className="hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="mx-auto mb-4 p-4 bg-slate-100 rounded-full w-fit">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl text-primary">{title}</CardTitle>
        <CardDescription className="text-foreground">{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <ul className="space-y-2 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="h-4 w-4 text-primary mr-3" />
              {feature}
            </li>
          ))}
        </ul>

        <Button asChild variant="link" className="p-0 h-auto text-primary" onClick={handleProductClick}>
          <Link href={route} className="inline-flex items-center">
            {cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export default ProductCard
