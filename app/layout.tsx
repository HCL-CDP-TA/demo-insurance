import "./globals.css"
import { Inter } from "next/font/google"
import { SiteProvider } from "@/lib/SiteContext"
import { CdpClientWrapper, HclCdpConfig } from "@hcl-cdp-ta/hclcdp-web-sdk-react"

const inter = Inter({ subsets: ["latin"] })

const config: HclCdpConfig = {
  writeKey: process.env.NEXT_PUBLIC_CDP_WRITEKEY || "",
  inactivityTimeout: 10,
  enableSessionLogging: true,
  enableUserLogoutLogging: true,
  cdpEndpoint: process.env.NEXT_PUBLIC_CDP_ENDPOINT || "",
  destinations: [],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteProvider>
          <CdpClientWrapper config={config}>{children}</CdpClientWrapper>
        </SiteProvider>
      </body>
    </html>
  )
}
