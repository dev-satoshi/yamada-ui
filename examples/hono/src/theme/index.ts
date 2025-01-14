import { ThemeSchemes, extendConfig, extendTheme } from "@yamada-ui/react"
import { customConfig } from "./config"

const colorSchemes = [
  "gray",
  "neutral",
  "red",
  "rose",
  "pink",
  "flashy",
  "fuchsia",
  "purple",
  "violet",
  "indigo",
  "blue",
  "sky",
  "cyan",
  "teal",
  "emerald",
  "green",
  "lime",
  "yellow",
  "amber",
  "orange",
]

export const customTheme = {
  themeSchemes: colorSchemes.reduce(
    (prev, colorScheme) => ({
      ...prev,
      [colorScheme]: {
        semantics: {
          colors: { primary: `${colorScheme}.500` },
          colorSchemes: { primary: colorScheme },
        },
      },
    }),
    {} as ThemeSchemes,
  ),
  colorSchemes,
}

export const theme = extendTheme(customTheme)()
export const config = extendConfig(customConfig)

export default theme
