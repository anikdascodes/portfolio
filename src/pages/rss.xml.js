import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection('blogs');
    
    // Filter out drafts
    const publishedPosts = posts.filter(post => !post.data.draft);
    
    // Sort by date (newest first)
    const sortedPosts = publishedPosts.sort(
        (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()
    );

    return rss({
        // RSS Feed Title
        title: 'Anik Das | Data Science & AI Blog',
        // RSS Feed Description
        description: 'Articles on Data Science, Machine Learning, Python, and Generative AI by Anik Das.',
        // Site URL
        site: context.site,
        // List of items
        items: sortedPosts.map((post) => {
            const postUrl = `/blog/${post.slug}/`;
            return {
                title: post.data.title,
                pubDate: post.data.publishDate,
                description: post.data.description,
                link: postUrl,
                categories: post.data.tags,
                author: post.data.author,
            };
        }),
        // Custom data
        customData: `<language>en-us</language>
<copyright>Copyright ${new Date().getFullYear()} Anik Das</copyright>
<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
<image>
    <url>https://devidev.io/img/meta.png</url>
    <title>Anik Das | Data Science & AI Blog</title>
    <link>https://devidev.io</link>
</image>`,
        stylesheet: '/rss/styles.xsl',
    });
}
