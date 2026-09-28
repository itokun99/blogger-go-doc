# Pages Service

```go
type PagesService struct{ ... }

func NewPagesService(client builder.TransportProvider) *PagesService
```

Access via `client.Pages()`.

## Methods

| Method | Signature | HTTP |
|--------|-----------|------|
| Get | `(ctx, blogId, pageId) (*schemas.Page, error)` | `GET /v3/blogs/{blogId}/pages/{pageId}` |
| List | `(ctx, blogId, opts...) (*schemas.PageList, error)` | `GET /v3/blogs/{blogId}/pages` |
| Insert | `(ctx, blogId, body *schemas.Page) (*schemas.Page, error)` | `POST /v3/blogs/{blogId}/pages` |
| Update | `(ctx, blogId, pageId, body) (*schemas.Page, error)` | `PUT .../pages/{pageId}` |
| Patch | `(ctx, blogId, pageId, body) (*schemas.Page, error)` | `PATCH .../pages/{pageId}` |
| Delete | `(ctx, blogId, pageId) error` | `DELETE .../pages/{pageId}` |
| Publish | `(ctx, blogId, pageId) (*schemas.Page, error)` | `POST .../pages/{pageId}/publish` |
| Revert | `(ctx, blogId, pageId) (*schemas.Page, error)` | `POST .../pages/{pageId}/revert` |

## Options

```go
type PageListOption func(*builder.Builder)
```

| Option | Query parameter | Description |
|--------|-----------------|-------------|
| `WithPageListToken(t)` | `pageToken` | Continue from a cursor |
| `WithPageListMaxResults(n)` | `maxResults` | Page size cap |
| `WithPageListStatus(s)` | `status` | `LIVE`, `DRAFT`, `SOFT_TRASHED` |
| `WithPageView(v)` | `view` | Access level |
| `WithPageFetchBodies(b)` | `fetchBodies` | Include page content |

## Status Constants

```go
const (
    PageStatusLive        = "LIVE"
    PageStatusDraft       = "DRAFT"
    PageStatusSoftTrashed = "SOFT_TRASHED"
)
```
