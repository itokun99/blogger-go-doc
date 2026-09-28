# PROJECT KNOWLEDGE BASE

**Generated:** 2026-09-28T14:29Z
**Commit:** 5b884e1438
**Branch:** main

## OVERVIEW
VitePress 1.6.4 documentation site for `blogger-go`, a Go SDK for the Blogger API v3. Docs-only repo — 31 Markdown pages + one TS config. The SDK lives in the sibling repo `../blogger-go` (linked via `replace` in go.mod). Auto-deploys to Vercel on push to `main`.

## STRUCTURE
```
blogger-go-doc/
├── docs/                    # VitePress srcDir — the entire site
│   ├── .vitepress/config.ts # THE page registry: nav + sidebar
│   ├── index.md             # home (only page with frontmatter)
│   ├── guide/               # concepts + guide/resources/ per-resource how-tos
│   ├── api/                 # API reference (12 pages)
│   └── examples/            # runnable programs (4 pages)
├── go.mod                   # vestigial stub (no .go files; replace -> ../blogger-go)
├── package.json             # vitepress dev/build/preview
└── .vercel/                 # local Vercel link (gitignored)
```

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| Edit/add page content | docs/AGENTS.md | content conventions + verified drift list |
| Register a new page | docs/.vitepress/config.ts | manual sidebar — unregistered pages are unreachable |
| Site nav/sidebar/theme | docs/.vitepress/config.ts | path keys /guide/ /api/ /examples/ |
| SDK ground truth | ../blogger-go | client.go, auth.go, gen/{builder,services,schemas} |
| Deploy settings | Vercel dashboard | no vercel.json / CI in repo; .vercel/ holds the local link |
| Live URL + manual deploy | README.md | demo URL, `npx vercel --prod` |

## CODE MAP
| Symbol | Type | Location | Refs | Role |
|--------|------|----------|------|------|
| default export | object | docs/.vitepress/config.ts:1 | consumed by VitePress | nav + sidebar + social links |

No application code: the only source file is config.ts; zero `.go` files. Centrality beyond the sidebar links is unmeasured (single-file JS universe).

## CONVENTIONS
- npm only (package-lock v3); three scripts — dev/build/preview. No lint, test, or format tooling exists.
- No CI: Vercel builds on push to main; manual fallback `npx vercel --prod`. Build settings live in the dashboard, not the repo.
- Docs content is hand-written; the SDK source of truth is the sibling `../blogger-go` checkout.

## ANTI-PATTERNS (THIS PROJECT)
- Never add a page without registering it in docs/.vitepress/config.ts sidebar.
- Do not run Go tooling: there are no .go files; go.mod exists only to resolve the sibling SDK for editors — nothing compiles or type-checks.
- Do not trust docs snippets as compilable — known drift list in docs/AGENTS.md; verify symbols against ../blogger-go.
- Do not commit .vercel/ (gitignored; keep it that way).

## UNIQUE STYLES
- Three similar names, all intentional: site title `blogger-go`, repo `blogger-go-doc`, npm package `blogger-go-docs`.
- Sidebar ordering: api = client first, then 8 services, then schema-models/builder/errors; guide/resources = alphabetical.
- Internal links are root-absolute and extensionless (`/guide/authentication`).

## COMMANDS
```bash
npm install            # deps (vitepress only)
npm run dev            # dev server (vitepress dev docs)
npm run build          # production build -> docs/.vitepress/dist
npm run preview        # serve the built site
npx vercel --prod      # manual deploy (normally auto on push to main)
```

## NOTES
- Docs drift from SDK source in several places (non-existent root-package helpers, APIError fields, missing constants/schema fields) — full verified list in docs/AGENTS.md.
- Version conflict: docs/guide/installation.md tells users `v0.1.0`; go.mod pins `v0.0.0`.
- Sidebar was exhaustive at generation time: 29 links ↔ 29 files, zero dead links, zero orphans — keep it that way.
- docs/.vitepress/dist/ is a gitignored local build and may be stale.
- go.mod `replace` target is `../blogger-go` (a sibling checkout is required for the stub to resolve).
