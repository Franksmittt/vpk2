# .next-docs (version-pinned Next.js reference)

This folder holds **offline or pinned** copies of official Next.js documentation used by the team. **AGENTS.md** mandates checking behaviour here before relying on memory or third-party summaries.

## What to place here

1. **App Router** (target: **Next.js 15** release line your project tracks; adjust folder name if you vendor multiple versions).
2. **Metadata and OG** (`generateMetadata`, `metadata`, `metadataBase`).
3. **Caching and static generation** (`generateStaticParams`, route handlers if used later).

## How to populate

- Export or save HTML/PDF from **https://nextjs.org/docs** for the exact major.minor you support, **or**
- Clone the Next.js docs repo at a release tag and symlink a subset into this directory.

Until files are added, engineers must still read **the same version** as `dependencies.next` in `package.json` on nextjs.org before merging risky App Router changes.
