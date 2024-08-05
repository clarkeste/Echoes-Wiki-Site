import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Echoes of the Departed",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "https://echoes-wiki-site.vercel.app",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#FFFFFF",
          lightgray: "#57D2A7",
          gray: "#282C38",
          darkgray: "#212427",
          dark: "#212427",
          secondary: "#3282C7",
          tertiary: "#5FA3AB",
          highlight: "rgba(55, 96, 93, 0.15)",
        },
        darkMode: {
          light: "#0B2545",
          lightgray: "#1D5D46",
          gray: "#EF3E36",
          darkgray: "#FFFFFF",
          dark: "#FFFFFF",
          secondary: "#EF3E36",
          tertiary: "#1D5D46",
          highlight: "rgba(55, 96, 93, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.HardLineBreaks(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config




          // light: "#faf8f8",
          // lightgray: "#e5e5e5",
          //  gray: "#b8b8b8",
          //darkgray: "#4e4e4e",
          // dark: "#2b2b2b",
          // secondary: "#284b63",
          // tertiary: "#84a59d",
          // highlight: "rgba(143, 159, 169, 0.15)",