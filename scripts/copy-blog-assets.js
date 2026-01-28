/**
 * Copy blog assets (diagrams, images) from src/content/blogs to dist/blog
 * This script runs after the Astro build
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcBlogsDir = path.join(__dirname, '..', 'src', 'content', 'blogs');
const distBlogsDir = path.join(__dirname, '..', 'dist', 'blog');

function copyDir(src, dest) {
    if (!fs.existsSync(src)) return;
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied: ${srcPath} -> ${destPath}`);
        }
    }
}

function main() {
    console.log('Copying blog assets...');

    if (!fs.existsSync(srcBlogsDir)) {
        console.log('No blogs directory found');
        return;
    }

    const blogFolders = fs.readdirSync(srcBlogsDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    for (const folder of blogFolders) {
        const srcFolder = path.join(srcBlogsDir, folder);
        const destFolder = path.join(distBlogsDir, folder);

        // Copy diagrams folder if it exists
        const diagramsSrc = path.join(srcFolder, 'diagrams');
        const diagramsDest = path.join(destFolder, 'diagrams');
        
        if (fs.existsSync(diagramsSrc)) {
            console.log(`\nProcessing blog: ${folder}`);
            copyDir(diagramsSrc, diagramsDest);
        }

        // Copy any other assets (images, etc.)
        const entries = fs.readdirSync(srcFolder, { withFileTypes: true });
        for (const entry of entries) {
            if (entry.isDirectory() && entry.name !== 'diagrams') {
                const assetSrc = path.join(srcFolder, entry.name);
                const assetDest = path.join(destFolder, entry.name);
                console.log(`\nProcessing ${entry.name} for: ${folder}`);
                copyDir(assetSrc, assetDest);
            }
        }
    }

    console.log('\nBlog assets copied successfully!');
}

main();
