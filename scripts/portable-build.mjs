#!/usr/bin/env node

import { spawnSync } from 'child_process';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const stagingRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'portfolio-build-'));
const excluded = new Set(['.git', 'node_modules', 'dist', '.next']);

function copyDir(source, target) {
    fs.mkdirSync(target, { recursive: true });

    for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
        if (excluded.has(entry.name)) continue;

        const sourcePath = path.join(source, entry.name);
        const targetPath = path.join(target, entry.name);

        if (entry.isDirectory()) {
            copyDir(sourcePath, targetPath);
        } else if (entry.isFile()) {
            fs.copyFileSync(sourcePath, targetPath);
        }
    }
}

function run(command, args, cwd) {
    const result = spawnSync(command, args, {
        cwd,
        env: process.env,
        stdio: 'inherit',
        shell: false,
    });

    if (result.status !== 0) {
        throw new Error(`${command} ${args.join(' ')} failed with exit code ${result.status ?? 1}`);
    }
}

try {
    console.log(`Staging build in ${stagingRoot}`);
    copyDir(projectRoot, stagingRoot);

    run('npm', ['ci', '--no-audit', '--no-fund'], stagingRoot);
    run('npm', ['run', 'build'], stagingRoot);

    const sourceDist = path.join(stagingRoot, 'dist');
    const targetDist = path.join(projectRoot, 'dist');
    fs.rmSync(targetDist, { recursive: true, force: true });
    copyDir(sourceDist, targetDist);
    console.log(`Copied built site to ${targetDist}`);
} finally {
    fs.rmSync(stagingRoot, { recursive: true, force: true });
}
