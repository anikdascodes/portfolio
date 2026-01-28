# Blog Guide

This guide explains how to create and manage blog posts for the portfolio website.

## 📁 Blog Structure

Each blog post is organized in its own folder:

```
src/content/blogs/
├── _TEMPLATE/                    # Template for new posts
│   ├── index.md                  # Main blog content
│   └── diagrams/                 # Images and diagrams
│       └── example.svg
├── my-first-blog-post/
│   ├── index.md
│   └── diagrams/
├── understanding-ml-pipelines/
│   ├── index.md
│   └── diagrams/
│       ├── ml-pipeline-flow.svg
│       ├── preprocessing-steps.svg
│       └── deployment-workflow.svg
└── ...
```

## 🚀 Creating a New Blog Post

### 1. Copy the Template

```bash
# Create new blog folder
cp -r src/content/blogs/_TEMPLATE src/content/blogs/my-new-post
```

### 2. Update Frontmatter

Edit `src/content/blogs/my-new-post/index.md`:

```yaml
---
title: "Your Blog Post Title"
publishDate: 2024-01-15T10:00:00Z
description: "Brief description for SEO and blog list"
author: "Anik Das"
tags: ["machine-learning", "python", "tutorial"]
featuredImage: "diagrams/featured.png"  # Optional
draft: false  # Set to false to publish
canonicalURL: ""  # Optional: if published elsewhere
---
```

### 3. Add Diagrams (Optional)

Put images and diagrams in the `diagrams/` folder:

```bash
src/content/blogs/my-new-post/
├── index.md
└── diagrams/
    ├── architecture.png
    ├── flowchart.svg
    └── screenshot.jpg
```

Reference them in your markdown:

```markdown
![Architecture Diagram](./diagrams/architecture.png)
*Figure 1: System Architecture*
```

### 4. Write Content

Use standard Markdown syntax:

```markdown
# Heading 1
## Heading 2

**Bold text** and *italic text*

- Bullet point
- Another point

1. Numbered list
2. Second item

| Table | Column |
|-------|--------|
| Data  | Value  |

```python
# Code block
print("Hello, World!")
```
```

### 5. Preview & Publish

```bash
# Start dev server
npm run dev

# Visit http://localhost:4321/#tab3 to see blog list
# Visit http://localhost:4321/blog/my-new-post/ to preview

# When ready, set draft: false and build
npm run build
```

## 📋 Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✅ | Blog post title |
| `publishDate` | ✅ | Publication date (ISO 8601 format) |
| `description` | ❌ | SEO description and excerpt |
| `author` | ❌ | Author name (default: "Anik Das") |
| `tags` | ❌ | Array of tags for categorization |
| `featuredImage` | ❌ | Path to featured image (relative to post folder) |
| `draft` | ❌ | Set to `true` to hide from production |
| `canonicalURL` | ❌ | Original URL if cross-posted |

## 🎨 Adding Diagrams

### Supported Formats
- **SVG** (recommended for diagrams)
- **PNG** (for screenshots)
- **JPG/JPEG** (for photos)
- **GIF** (for animations)

### Best Practices
1. **Use SVG** for diagrams and charts (scalable, small file size)
2. **Optimize images** before adding (use tools like TinyPNG)
3. **Use descriptive filenames** (`ml-pipeline-flow.svg` not `img1.png`)
4. **Add alt text** for accessibility
5. **Include captions** below images

### Creating SVG Diagrams

You can create SVG diagrams using:
- **Excalidraw** (hand-drawn style)
- **Figma** (professional diagrams)
- **Draw.io** (flowcharts)
- **Code** (programmatic SVG)

Example SVG structure:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" style="background:#0a0a0a">
  <!-- Dark background matching the site theme -->
  <rect x="10" y="60" width="100" height="80" rx="5" fill="#1a1a1a" stroke="#374151"/>
  <text x="60" y="105" text-anchor="middle" fill="#f3f4f6" font-family="monospace">Step 1</text>
</svg>
```

## 🔍 Search

The blog includes a powerful **client-side search** feature:

### Search Functionality

- **Search box** at the top of the blog list
- **Searches through:**
  - Blog titles
  - Descriptions
  - Content excerpts
  - Tags
- **Keyboard shortcuts:**
  - `Ctrl/Cmd + K` - Focus search box
  - `Escape` - Clear search
- **Highlighted results** - Matching text is highlighted in green
- **Real-time filtering** - Results update as you type

### Search Index

The search uses a client-side JavaScript index for instant results - no server requests needed!

---

## 🔍 SEO Features

The blog system automatically handles:

- ✅ **Meta descriptions** from frontmatter
- ✅ **Open Graph tags** for social sharing
- ✅ **Twitter Cards** with images
- ✅ **Structured data** (JSON-LD for articles)
- ✅ **Canonical URLs** to prevent duplicate content
- ✅ **Reading time** estimation
- ✅ **Author attribution**
- ✅ **Publication dates**
- ✅ **Sitemap** generation
- ✅ **RSS feed** at `/rss.xml`

## 🏷️ Tagging System

Tags help organize content:

```yaml
tags: ["machine-learning", "python", "tutorial", "data-science"]
```

Best practices:
- Use lowercase with hyphens (`machine-learning` not `Machine Learning`)
- Be consistent (choose `python` or `python-programming`, not both)
- Use 3-5 tags per post
- Include both broad (`machine-learning`) and specific (`scikit-learn`) tags

## 📝 Markdown Tips

### Code Blocks with Syntax Highlighting

````markdown
```python
def example():
    return "Hello"
```

```javascript
const x = () => "Hello";
```

```bash
npm run build
```
````

### Mathematical Expressions

Use LaTeX syntax with code blocks:

```markdown
$$E = mc^2$$

Inline math: `$y = mx + b$`
```

### Collapsible Sections

```markdown
<details>
<summary>Click to expand</summary>

Hidden content here!

</details>
```

## 🔄 Draft Mode

Keep posts as drafts while writing:

```yaml
draft: true
```

Drafts:
- ✅ Visible in development mode
- ❌ Hidden in production build
- ✅ Marked with "DRAFT" badge in dev

## 📊 Analytics

Track blog performance:
- View counts via server logs
- Social shares
- RSS subscribers

## 🔗 Sharing

Each blog post includes:
- Twitter share button
- LinkedIn share button
- Copy link functionality

## 🐛 Troubleshooting

### Images not showing
1. Check path: `./diagrams/image.png` (relative to index.md)
2. Verify file exists in the diagrams folder
3. Run `npm run copy-assets` after build
4. Check dist folder has the images

### Post not appearing
1. Check `draft: false` in frontmatter
2. Verify `publishDate` is not in the future
3. Restart dev server
4. Check for YAML syntax errors in frontmatter

### Build errors
1. Check all quotes in frontmatter are straight quotes `"` not curly `" "`
2. Ensure dates are in ISO format: `2024-01-15T10:00:00Z`
3. Verify tags are in array format: `["tag1", "tag2"]`

## 📚 Example Posts

Check these example posts:
- `my-first-blog-post/` - Simple welcome post
- `understanding-ml-pipelines/` - Complex post with multiple diagrams

## 🆘 Need Help?

- Check the [Astro Content Collections docs](https://docs.astro.build/en/guides/content-collections/)
- Review the template at `src/content/blogs/_TEMPLATE/`
- Look at existing posts for examples
