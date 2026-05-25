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
        title: 'Anik Das',
        // RSS Feed Description
        description: 'Articles on Data Science, Machine Learning, Python, and Generative AI by Anik Das.',
        // Site URL
        site: context.site,
        // List of items
        items: sortedPosts.map((post) => {
            const slug = post.slug || post.id.replace(/\/index$/, '');
            const postUrl = `/blog/${slug}/`;
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
    <url>https://anikdascodes.netlify.app/img/meta.png</url>
    <title>Anik Das</title>
    <link>https://anikdascodes.netlify.app</link>
        </image>`,
    });
}
