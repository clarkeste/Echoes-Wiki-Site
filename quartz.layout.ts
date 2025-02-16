import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
  // Component.Comments({
    // provider: 'giscus',
    // options: {
      // from data-repo
      // repo: 'clarkeste/echoes-wiki-site',
      // from data-repo-id
      // repoId: 'R_kgDOMEVSEA',
      // from data-category
      // category: 'Announcements',
      // from data-category-id
      // categoryId: 'DIC_kwDOMEVSEM4Cm-bU',
   //  }
  // }),
],
  footer: Component.Footer({
    links: {
      "Email": "mailto:Clarkesteban1@gmail.com",
      'Credits & Thanks': "https://echoes-of-the-departed.vercel.app/Genesys/Credits-and-Special-Thanks"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer(({
      filterFn: (node) => {
        // Always show folders (so their children can be filtered)
        if (node.children) return true
  
        // For files: strictly exclude those with "hidden" alias
        return node.file?.frontmatter?.aliases?.includes("hidden") !== true
      },
}))),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Breadcrumbs(),
    Component.ContentMeta(),
    Component.Darkmode(),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer(({
      filterFn: (node) => {
        // Always show folders (so their children can be filtered)
        if (node.children) return true
  
        // For files: strictly exclude those with "hidden" alias
        return node.file?.frontmatter?.aliases?.includes("hidden") !== true
      },
    }))),
  ],
  right: [
    Component.Darkmode(),
  ],
}
