// quartz.layout.ts
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components" // Fixed: Single import statement

// Remove this duplicate import
// import { Component } from "./quartz/components"

const sharedComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    // Component.Comments({...}),
  ],
  footer: Component.Footer({
    links: {
      "Email": "mailto:Clarkesteban1@gmail.com",
      "Credits & Thanks": "https://echoes-of-the-departed.vercel.app/Genesys/Credits-and-Special-Thanks"
    },
  }),
}

// Custom Explorer configuration with filtering
const FilteredExplorer = Component.Explorer({
  filterFn: (node: any) => !node.file?.frontmatter?.tags?.includes("hidden"),
})

// For backlinks filtering, use plugin configuration instead
const BacklinkOptions = {
  showHidden: false, // Add custom property (you'll need to modify backlinks component)
}

export default ({ components: { FilteredExplorer } })

// Default page layout
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(FilteredExplorer),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Breadcrumbs(),
    Component.ContentMeta(),
    Component.Darkmode(),
    Component.Backlinks(),
  ],
}

// List page layout
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(FilteredExplorer),
  ],
  right: [
    Component.Darkmode(),
  ],
}