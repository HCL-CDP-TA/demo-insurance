"use client"
import { useTranslations } from "next-intl"
import { useSiteContext } from "@/lib/SiteContext"
import { CdpPageEvent } from "@hcl-cdp-ta/hclcdp-web-sdk-react"
import { useCDPTracking } from "@/lib/hooks/useCDPTracking"
import { usePageMeta } from "@/lib/hooks/usePageMeta"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import QuoteForm from "@/components/QuoteForm"
import Hero from "@/components/Hero"

const CarInsurancePage = () => {
  const { brand, locale, getPageNamespace } = useSiteContext()
  const pageNamespace = getPageNamespace()
  const t = useTranslations(pageNamespace)
  const { isCDPTrackingEnabled } = useCDPTracking()

  usePageMeta(t("meta.title"), t("meta.description"))

  return (
    <main>
      {isCDPTrackingEnabled && (
        <CdpPageEvent pageName={t("cdp.pageEventName")} pageProperties={{ brand: brand.label, locale: locale.code }} />
      )}

      <Hero title={t("hero.title")} subTitle={t("hero.subtitle")} cta={t("hero.cta")} imageUrl={t("hero.imageUrl")} />

      <div className="min-h-screen bg-gray-50">
        {/* Coverage Types */}
        <section id="details" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("coverage.title")}</h2>
              <p className="text-xl text-gray-600">{t("coverage.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 3 }, (_, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{t(`coverage.types.${index}.title`)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{t(`coverage.types.${index}.description`)}</CardDescription>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {Array.from({ length: 3 }, (_, featureIndex) => (
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

        {/* Additional Benefits */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("benefits.title")}</h2>
                <div className="space-y-4">
                  {Array.from({ length: 5 }, (_, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      <span className="text-gray-700">{t(`benefits.list.${index}`)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t("benefits.savings.title")}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{t("benefits.savings.amount")}</div>
                  <p className="text-gray-600 mb-4">{t("benefits.savings.description")}</p>
                  <div className="text-sm text-gray-500">{t("benefits.savings.disclaimer")}</div>
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
            <QuoteForm productType="car" />
          </div>
        </section>
      </div>
    </main>
  )
}

export default CarInsurancePage
