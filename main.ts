// news-image-20261119 entry (Node 22, standard library only).
// The image is the entry.png beside this file: a newspaper front page
// summing up Thursday 19 November 2026 in six verified stories.
// The program copies it to /output/entry.png, deterministically.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
