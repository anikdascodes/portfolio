#!/usr/bin/env node

import fs from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

function prepareEsbuildBinary() {
    if (process.env.ESBUILD_BINARY_PATH) return;

    const packageByPlatform = {
        'linux-x64': ['@esbuild', 'linux-x64', 'bin', 'esbuild'],
        'linux-arm64': ['@esbuild', 'linux-arm64', 'bin', 'esbuild'],
    };

    const packagePath = packageByPlatform[`${process.platform}-${process.arch}`];
    if (!packagePath) return;

    const source = path.join(projectRoot, 'node_modules', ...packagePath);
    if (!fs.existsSync(source)) return;

    const suffix = `${process.platform}-${process.arch}-${process.pid}-${Date.now()}`;
    const target = path.join(os.tmpdir(), `portfolio-esbuild-${suffix}`);
    fs.copyFileSync(source, target);
    fs.chmodSync(target, 0o755);
    process.env.ESBUILD_BINARY_PATH = target;
}

prepareEsbuildBinary();
await import('../node_modules/astro/bin/astro.mjs');
