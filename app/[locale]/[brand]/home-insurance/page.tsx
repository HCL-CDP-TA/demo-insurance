"use client"
import { useTranslations } from "next-intl"
import { useSiteContext } from "@/lib/SiteContext"
import { CdpPageEvent } from "@hcl-cdp-ta/hclcdp-web-sdk-react"
import { useCDPTracking } from "@/lib/hooks/useCDPTracking"
import { usePageMeta } from "@/lib/hooks/usePageMeta"
import QuoteForm from "@/components/QuoteForm"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Home, Shield, Umbrella, Wrench } from "lucide-react"
import Hero from "@/components/Hero"

const HomeInsurancePage = () => {
  const { brand, locale, getPageNamespace } = useSiteContext()
  const pageNamespace = getPageNamespace()
  const t = useTranslations(pageNamespace)
  const { isCDPTrackingEnabled } = useCDPTracking()

  usePageMeta(t("meta.title"), t("meta.description"))

  // Coverage type icons mapping
  const coverageIcons = [Home, Shield, Umbrella, Wrench]

  return (
    <main>
      {isCDPTrackingEnabled && (
        <CdpPageEvent pageName={t("cdp.pageEventName")} pageProperties={{ brand: brand.label, locale: locale.code }} />
      )}

      <Hero title={t("hero.title")} subTitle={t("hero.subtitle")} cta={t("hero.cta")} imageUrl={t("hero.imageUrl")} />

      <div className="min-h-screen bg-gray-50">
        {/* Coverage Details */}
        <section id="details" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("coverage.title")}</h2>
              <p className="text-xl text-gray-600">{t("coverage.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coverageIcons.map((IconComponent, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center mb-4 text-primary">
                      <IconComponent className="h-8 w-8 mr-3" />
                      <CardTitle>{t(`coverage.types.${index}.title`)}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{t(`coverage.types.${index}.description`)}</CardDescription>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {Array.from({ length: 4 }, (_, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-3" />
                          {t(`coverage.types.${index}.features.${featureIndex}`)}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Natural Disasters */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("disasters.title")}</h2>
                <p className="text-gray-600 mb-6">{t("disasters.description")}</p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t("disasters.covered.title")}</h4>
                      <p className="text-sm text-gray-600">{t("disasters.covered.description")}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">!</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t("disasters.additional.title")}</h4>
                      <p className="text-sm text-gray-600">{t("disasters.additional.description")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t("disasters.addOns.title")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-gray-900">{t("disasters.addOns.options.0.title")}</h4>
                    <p className="text-gray-600 text-sm">{t("disasters.addOns.options.0.description")}</p>
                    <p className="text-primary font-medium">{t("disasters.addOns.options.0.price")}</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-gray-900">{t("disasters.addOns.options.1.title")}</h4>
                    <p className="text-gray-600 text-sm">{t("disasters.addOns.options.1.description")}</p>
                    <p className="text-primary font-medium">{t("disasters.addOns.options.1.price")}</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-gray-900">{t("disasters.addOns.options.2.title")}</h4>
                    <p className="text-gray-600 text-sm">{t("disasters.addOns.options.2.description")}</p>
                    <p className="text-primary font-medium">{t("disasters.addOns.options.2.price")}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section id="quote" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("quote.title")}</h2>
              <p className="text-xl text-gray-600">{t("quote.subtitle")}</p>
            </div>
            <QuoteForm productType="home" />
          </div>
        </section>
      </div>
    </main>
  )
}

export default HomeInsurancePage
