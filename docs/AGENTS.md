# docs/ — VitePress Content Root

OVERVIEW: 31 Markdown pages (incl. home); `.vitepress/config.ts` is the manual page registry — any page not sidebar-registered is unreachable. Earned its file (init-deep score 9/25, content root): page templates, link rules, and SDK-drift knowledge live here; api/, guide/, examples/ score <8 and are covered by this file.

## WHERE TO LOOK
| Task | Location | Notes |
|------|----------|-------|
| Register a page | .vitepress/config.ts | add under the path-keyed sidebar (/guide/ /api/ /examples/); manual registry, no autosidebar |
| Service reference | `api/<resource>-service.md` | kebab-case mirrors Go type names (`BlogUserInfosService` → blog-user-infos-service.md) |
| Concept guide | `guide/<concept>.md` | runnable snippets with full import blocks |
| Per-resource how-to | `guide/resources/<resource>.md` | query parameters only — no Go types, no HTTP verbs |
| Runnable example | `examples/<task>.md` | one full package main per file |
| Home | index.md | only page with frontmatter (layout: home) |

## CONVENTIONS
- Single H1 named for the subject; H2 sections; H3 only for per-method detail; no admonition blocks anywhere.
- No YAML frontmatter on content pages (index.md is the sole exception).
- Internal links: root-absolute, extensionless — `[Authentication Guide](/guide/authentication)`. External links: full URLs.
- Code fences: language `go` (139 blocks; only exceptions: 2 `sh`, 1 `json` in installation.md / examples/authentication.md). No region markers, no file-path headers.
- api/*-service.md template: H1 → type+constructor fence → "Access via `client.X()`." → ## Methods → ## Options (type fence + table) → optional ## Example, ## Status Constants. Table rows read `(ctx, blogId, opts...) (*schemas.PostList, error)` plus an HTTP column; types are qualified (`*schemas.Post`, `opts ...PostsOption`).
- guide/resources/* template: "Operations on X." → ## Methods → H3 per method (one-line imperative → call fence → **Query Parameters:** bullets) → ## Example.
- Call sites chain (`client.Posts().List(ctx, blogId, ...)`); `context.Context` is always the first argument; placeholder IDs are `"1234567890"`.
- Tone: present-tense declarative, symbols in backticks, em dash separator. api/ = reference only (no package main); examples/ = one runnable program each.

## ANTI-PATTERNS (THIS PROJECT)
- Snippets are NOT compile-checked (no .go files; go.mod is a stub). Verified drift vs ../blogger-go: `blogger.WithMaxResults/WithStatus/WithPageToken/WithLabels` do not exist in the root package (real homes: gen/services, gen/builder); api/blogs-service.md:39 "the client re-exports them" is false; APIError really has `Reasons []string` (docs show Errors/Domain/Reason plus an `ErrorInfo` type that does not exist); View*/PostStatus*/CommentStatus* constants in docs are absent from source; schema-models.md BlogPerUserInfo fields drift; ParsePaginationResult source signature is `(payload []byte) (*PaginationResult, error)` but guide/pagination.md shows a different shape. Verify symbols against ../blogger-go before repeating; fix drift deliberately.
- Option prefix split: api/ + examples/ use `services.WithX` (matches SDK); guide/ pages use `blogger.WithX` (wrong today). New pages: use `services.`; do not propagate the wrong prefix.
- Indentation split: api/ uses 4 spaces, examples/ use tabs (paginate.md mixes both in one file). Follow the file you edit; do not reformat unrelated lines.
- Two competing api method presentations exist (table rows vs H3-per-method) with no rule — follow the page you are extending.
- guide/pagination.md and examples/paginate.md near-duplicate each other — do not copy either wholesale.
- Version drift: installation.md tells users v0.1.0; go.mod pins v0.0.0.

## NOTES
- Sanity check: `npm run build` (VitePress fails on dead links); docs/.vitepress/dist is gitignored and may be stale.
- guide/resources covers 5 of 8 resources (blogs, comments, pages, posts, users); bloguserinfos, pageviews, postuserinfos have no resource page.
