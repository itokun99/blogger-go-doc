# Builder Pattern

The SDK uses a fluent builder pattern for constructing API requests.

## Basic Request Building

```go
request := builder.New(http.MethodGet, "v3/blogs/{blogId}").
    Context(ctx).
    Param("blogId", blogId)
```

## Options Pattern

Each service exposes option types that customize requests:

```go
posts, err := client.Posts().List(ctx, blogId,
    blogger.WithMaxResults(10),
    blogger.WithStatus(blogger.PostStatusLive),
    blogger.WithLabels("news", "events"),
)
```

## Common Options

### Pagination

```go
blogger.WithPageToken("nextPageToken")
blogger.WithMaxResults(10)
```

### Filtering

```go
blogger.WithStatus("LIVE")      // Post/Comment status
blogger.WithLabels("tag1")      // Post labels
blogger.WithStartDate("2024-01-01")
blogger.WithEndDate("2024-12-31")
```

### Ordering

```go
blogger.WithOrderBy("published") // "published" or "updated"
blogger.WithSortOrder("DESCENDING")
```

### View Types

```go
blogger.WithView(blogger.ViewAdmin) // "READER", "AUTHOR", "ADMIN"
```

## Status Constants

```go
// Post statuses
blogger.PostStatusLive        = "LIVE"
blogger.PostStatusDraft       = "DRAFT"
blogger.PostStatusScheduled   = "SCHEDULED"
blogger.PostStatusSoftTrashed = "SOFT_TRASHED"

// Comment statuses
blogger.CommentStatusLive     = "LIVE"
blogger.CommentStatusEmptied  = "EMPTIED"
blogger.CommentStatusPending  = "PENDING"
blogger.CommentStatusSpam     = "SPAM"

// Page statuses
blogger.PageStatusLive        = "LIVE"
blogger.PageStatusDraft       = "DRAFT"
blogger.PageStatusSoftTrashed = "SOFT_TRASHED"
```
