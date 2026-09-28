# Introduction

**blogger-go** is a complete Go SDK for the [Blogger API v3](https://developers.google.com/blogger/docs/3.0/getting_started).

It covers all 8 resources and 33 methods from the canonical discovery document (revision 20260924), using proper Go idioms including context propagation, typed errors, request builders, and Google OAuth2 integration.

## Features

- **Complete API coverage** — 8 resources, 33 methods matching the official discovery doc
- **Type-safe schemas** — 15 model types derived directly from the API specification
- **Builder pattern** — Chainable request construction with option helpers
- **Typed errors** — Structured `APIError` with code, message, and reasons
- **Pagination support** — Cursor-based pagination helpers (`Token`, `PaginationResult`)
- **OAuth2 ready** — Integration with `golang.org/x/oauth2` for authentication
- **Context propagation** — All methods accept `context.Context` as first parameter

## Architecture

```
blogger-go/
├── client.go          # Client entry point with 8 service accessors
├── auth.go            # OAuth2 token source helpers
├── gen/
│   ├── builder/       # Request builder, errors, pagination
│   ├── schemas/       # 15 model structs
│   └── services/      # 8 service implementations
└── internal/          # Internal helpers
```

## Resources Covered

| Resource | Methods |
|----------|---------|
| Blogs | Get, GetByUrl, ListByUser |
| Comments | Get, List, ListByBlog, Approve, Delete, MarkAsSpam, RemoveContent |
| Pages | Get, List, Insert, Update, Patch, Delete, Publish, Revert |
| Posts | Get, List, Search, GetByPath, Insert, Update, Patch, Delete, Publish, Revert |
| Users | Get |
| BlogUserInfos | Get |
| PageViews | Get |
| PostUserInfos | Get, List |

## Requirements

- Go 1.21 or newer
- OAuth2 credentials (optional for read-only access with API key)
