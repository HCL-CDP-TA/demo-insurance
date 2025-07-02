import { Landmark } from "lucide-react"
import { LucideIcon } from "lucide-react"

export interface SupportedBrand {
  key: string
  label: string
  icon: LucideIcon
}

const supportedBrands: SupportedBrand[] = [{ key: "woodburn", label: "Woodburn", icon: Landmark }]

export { supportedBrands }
