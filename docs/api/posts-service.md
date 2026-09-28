# Posts Service

```go
type PostsService struct{ ... }

func NewPostsService(client builder.TransportProvider) *PostsService
```

Access via `client.Posts()`.

## Methods

| Method | Signature | HTTP |
|--------|-----------|------|
| Get | `(ctx, blogId, postId) (*schemas.Post, error)` | `GET /v3/blogs/{blogId}/posts/{postId}` |
| List | `(ctx, blogId, opts...) (*schemas.PostList, error)` | `GET /v3/blogs/{blogId}/posts` |
| Search | `(ctx, blogId, q, opts...) (*schemas.PostList, error)` | `GET .../posts/search?q=` |
| GetByPath | `(ctx, blogId, path, opts...) (*schemas.Post, error)` | `GET .../posts/bypath?path=` |
| Insert | `(ctx, blogId, body *schemas.Post) (*schemas.Post, error)` | `POST /v3/blogs/{blogId}/posts` |
| Update | `(ctx, blogId, postId, body) (*schemas.Post, error)` | `PUT .../posts/{postId}` |
| Patch | `(ctx, blogId, postId, body) (*schemas.Post, error)` | `PATCH .../posts/{postId}` |
| Delete | `(ctx, blogId, postId) error` | `DELETE .../posts/{postId}` |
| Publish | `(ctx, blogId, postId) (*schemas.Post, error)` | `POST .../posts/{postId}/publish` |
| Revert | `(ctx, blogId, postId) (*schemas.Post, error)` | `POST .../posts/{postId}/revert` |

## Options

```go
type PostOption func(*builder.Builder)
```

| Option | Query parameter | Description |
|--------|-----------------|-------------|
| `WithPageToken(t)` | `pageToken` | Continue from a cursor |
| `WithMaxResults(n)` | `maxResults` | Page size cap |
| `WithStartDate(d)` | `startDate` | RFC 3339 lower bound |
| `WithEndDate(d)` | `endDate` | RFC 3339 upper bound |
| `WithStatus(s)` | `status` | `LIVE`, `DRAFT`, `SCHEDULED`, `SOFT_TRASHED` |
| `WithLabels(...labels)` | `labels` | Comma-joined label filter |
| `WithFetchImages(b)` | `fetchImages` | Include images |
| `WithFetchBody(b)` | `fetchBody` | Include body content |
| `WithOrderBy(o)` | `orderBy` | `PUBLISHED`, `UPDATED` |
| `WithSortOrder(o)` | `sortOption` | `DESCENDING`, `ASCENDING` |
| `WithView(v)` | `view` | Access level |
| `WithMaxComments(n)` | `maxComments` | Comments included per post |
| `WithPostDate(d)` | `date` | Disambiguate by-path lookups |
| `WithQuery(q)` | `q` | Search query |

## Status Constants

```go
const (
    PostStatusLive        = "LIVE"
    PostStatusDraft       = "DRAFT"
    PostStatusScheduled   = "SCHEDULED"
    PostStatusSoftTrashed = "SOFT_TRASHED"
)
```
