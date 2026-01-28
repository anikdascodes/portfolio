---
title: "My First Blog Post"
publishDate: 2024-03-13T00:00:00Z
description: "Welcome to my blog! This is a sample post to demonstrate the new folder-based blogging system with diagram support."
author: "Anik Das"
tags: ["welcome", "first-post", "astro"]
draft: false
---

# Welcome to My Blog! 🎉

This is my first blog post using the new **folder-based structure**. Each blog post now lives in its own folder, making it easy to organize content and associated media.

## New Features

### 📁 Folder-Based Organization
Each blog post now has its own folder structure:

```
src/content/blogs/
└── my-first-blog-post/
    ├── index.md          # Main blog content
    └── diagrams/         # Related images & diagrams
        ├── diagram1.png
        └── diagram2.svg
```

### 🖼️ Easy Image Management
Add images to your blog posts by placing them in the same folder:

```markdown
![Description](./diagrams/my-diagram.png)
```

### 🏷️ Better Tagging
Organize posts with tags for easy discovery:
- `welcome`
- `first-post`  
- `astro`

### 📱 Improved Reading Experience
- Estimated reading time
- Better typography
- Mobile-friendly layout
- Social sharing buttons

## Code Snippets

Include code with syntax highlighting:

```python
# Example Python code
def greet_reader(name: str) -> str:
    """Welcome readers to the blog!"""
    return f"Hello, {name}! Thanks for reading."

# Call the function
message = greet_reader("Data Science Enthusiast")
print(message)
```

## What's Next?

Stay tuned for more posts about:
- Data Science projects
- Machine Learning tutorials
- Python tips and tricks
- Generative AI explorations

---

*Thanks for reading! Feel free to connect with me on [Twitter](https://x.com/AnikCodes) or [LinkedIn](https://www.linkedin.com/in/anikdascodes/).*
