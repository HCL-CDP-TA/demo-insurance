"use client"
import { useTranslations } from "next-intl"
import { useSiteContext } from "@/lib/SiteContext"
import { CdpPageEvent } from "@hcl-cdp-ta/hclcdp-web-sdk-react"
import { useCDPTracking } from "@/lib/hooks/useCDPTracking"
import { usePageMeta } from "@/lib/hooks/usePageMeta"
import { DollarSign, Shield, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import QuoteForm from "@/components/QuoteForm"
import Hero from "@/components/Hero"

const LifeInsurancePage = () => {
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
        {/* Product Details */}
        <section id="details" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("whyChoose.title")}</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Shield className="h-8 w-8 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t("whyChoose.features.0.title")}</h3>
                      <p className="text-gray-600">{t("whyChoose.features.0.description")}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="h-8 w-8 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t("whyChoose.features.1.title")}</h3>
                      <p className="text-gray-600">{t("whyChoose.features.1.description")}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-8 w-8 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{t("whyChoose.features.2.title")}</h3>
                      <p className="text-gray-600">{t("whyChoose.features.2.description")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t("coverageOptions.title")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-gray-900">{t("coverageOptions.options.0.title")}</h4>
                    <p className="text-gray-600 text-sm">{t("coverageOptions.options.0.description")}</p>
                    <p className="text-primary font-medium">{t("coverageOptions.options.0.price")}</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-gray-900">{t("coverageOptions.options.1.title")}</h4>
                    <p className="text-gray-600 text-sm">{t("coverageOptions.options.1.description")}</p>
                    <p className="text-primary font-medium">{t("coverageOptions.options.1.price")}</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-gray-900">{t("coverageOptions.options.2.title")}</h4>
                    <p className="text-gray-600 text-sm">{t("coverageOptions.options.2.description")}</p>
                    <p className="text-primary font-medium">{t("coverageOptions.options.2.price")}</p>
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
            <QuoteForm productType="life" />
          </div>
        </section>
      </div>
    </main>
  )
}

export default LifeInsurancePage
