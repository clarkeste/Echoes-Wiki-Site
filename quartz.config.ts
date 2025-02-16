import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import * as Component from "./quartz/components" // Fixed import

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Echoes of the Departed",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "https://echoes-of-the-departed.vercel.app/",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
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
          textHighlight: "#FFD700" // Added missing color field
        },
        darkMode: {
          light: "#0B2545",
          lightgray: "#7E343D",
          gray: "#46D970",
          darkgray: "#FFFFFF",
          dark: "#FFFFFF",
          secondary: "#46D970",
          tertiary: "#21694F",
          highlight: "rgba(55, 96, 93, 0.15)",
          textHighlight: "#FFD700" // Added missing color field
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