"use client"
import { useTranslations } from "next-intl"
import { useSiteContext } from "@/lib/SiteContext"
import { CdpPageEvent } from "@hcl-cdp-ta/hclcdp-web-sdk-react"
import { useCDPTracking } from "@/lib/hooks/useCDPTracking"
import { usePageMeta } from "@/lib/hooks/usePageMeta"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ProductCard from "@/components/ProductCard"
import Link from "next/link"
import { Heart, Car, Home, Star, LucideIcon } from "lucide-react"
import Hero from "@/components/Hero"

const HomePage = () => {
  const { brand, locale, getPageNamespace } = useSiteContext()
  const pageNamespace = getPageNamespace()
  const t = useTranslations(pageNamespace)
  const { isCDPTrackingEnabled } = useCDPTracking()

  usePageMeta(t("meta.title"), t("meta.description"))

  interface Product {
    title: string
    description: string
    features: string[]
    route: string
    Icon: LucideIcon
  }

  const products: Product[] = [
    {
      title: t("products.0.title"),
      description: t("products.0.description"),
      features: [
        t("products.0.features.0"),
        t("products.0.features.1"),
        t("products.0.features.2"),
        t("products.0.features.3"),
      ],
      route: "/life-insurance",
      Icon: Heart,
    },
    {
      title: t("products.1.title"),
      description: t("products.1.description"),
      features: [
        t("products.1.features.0"),
        t("products.1.features.1"),
        t("products.1.features.2"),
        t("products.1.features.3"),
      ],
      route: "/car-insurance",
      Icon: Car,
    },
    {
      title: t("products.2.title"),
      description: t("products.2.description"),
      features: [
        t("products.2.features.0"),
        t("products.2.features.1"),
        t("products.2.features.2"),
        t("products.2.features.3"),
      ],
      route: "/home-insurance",
      Icon: Home,
    },
  ]

  return (
    <main>
      {isCDPTrackingEnabled && (
        <CdpPageEvent pageName={t("cdp.pageEventName")} pageProperties={{ brand: brand.label, locale: locale.code }} />
      )}

      <div>
        {/* Hero Section */}
        <Hero title={t("hero.title")} subTitle={t("hero.subtitle")} cta={t("hero.cta")} imageUrl={t("hero.imageUrl")} />

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("sections.products.title")}</h2>
              <p className="text-xl text-gray-600">{t("sections.products.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} cta={t("sections.products.cta")} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("sections.testimonials.title")}</h2>
              <p className="text-xl text-gray-600">{t("sections.testimonials.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[0, 1, 2].map(index => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">&ldquo;{t(`testimonials.${index}.quote`)}&rdquo;</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-900">{t(`testimonials.${index}.name`)}</p>
                      <p className="text-sm text-gray-600">{t(`testimonials.${index}.location`)}</p>
                      <p className="text-sm text-primary font-medium">{t(`testimonials.${index}.product`)}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">{t("sections.cta.title")}</h2>
            <p className="text-xl mb-8 text-blue-100">{t("sections.cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
                <Link href="/quote" data-cdp-action="cta-quote">
                  {t("sections.cta.buttons.getQuote")}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-800">
                <Link href="/contact">{t("sections.cta.buttons.speakAgent")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default HomePage
