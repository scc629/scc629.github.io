
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/jennifermacdonald/Workspace/scc629.github.io/src/pages/404.js")),
  "component---src-pages-contact-examples-js": preferDefault(require("/Users/jennifermacdonald/Workspace/scc629.github.io/src/pages/contact/examples.js")),
  "component---src-pages-contact-file-upload-js": preferDefault(require("/Users/jennifermacdonald/Workspace/scc629.github.io/src/pages/contact/file-upload.js")),
  "component---src-pages-contact-index-js": preferDefault(require("/Users/jennifermacdonald/Workspace/scc629.github.io/src/pages/contact/index.js")),
  "component---src-pages-contact-thanks-js": preferDefault(require("/Users/jennifermacdonald/Workspace/scc629.github.io/src/pages/contact/thanks.js")),
  "component---src-pages-tags-index-js": preferDefault(require("/Users/jennifermacdonald/Workspace/scc629.github.io/src/pages/tags/index.js")),
  "component---src-templates-about-page-js": preferDefault(require("/Users/jennifermacdonald/Workspace/scc629.github.io/src/templates/about-page.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/jennifermacdonald/Workspace/scc629.github.io/src/templates/blog-post.js")),
  "component---src-templates-index-page-js": preferDefault(require("/Users/jennifermacdonald/Workspace/scc629.github.io/src/templates/index-page.js")),
  "component---src-templates-product-page-js": preferDefault(require("/Users/jennifermacdonald/Workspace/scc629.github.io/src/templates/product-page.js")),
  "component---src-templates-tags-js": preferDefault(require("/Users/jennifermacdonald/Workspace/scc629.github.io/src/templates/tags.js"))
}

