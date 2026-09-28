# Comments Service

```go
type CommentsService struct{ ... }

func NewCommentsService(client builder.TransportProvider) *CommentsService
```

Access via `client.Comments()`.

## Methods

### Get

```go
func (s *CommentsService) Get(ctx context.Context, blogId, postId, commentId string) (*schemas.Comment, error)
```

`GET /v3/blogs/{blogId}/posts/{postId}/comments/{commentId}`

### List

```go
func (s *CommentsService) List(ctx context.Context, blogId, postId string, opts ...CommentListOption) (*schemas.CommentList, error)
```

`GET /v3/blogs/{blogId}/posts/{postId}/comments`

### ListByBlog

```go
func (s *CommentsService) ListByBlog(ctx context.Context, blogId string, opts ...CommentListOption) (*schemas.CommentList, error)
```

`GET /v3/blogs/{blogId}/comments`

### Approve

```go
func (s *CommentsService) Approve(ctx context.Context, blogId, postId, commentId string) (*schemas.Comment, error)
```

`POST .../comments/{commentId}/approve`

### Delete

```go
func (s *CommentsService) Delete(ctx context.Context, blogId, postId, commentId string) error
```

`DELETE /v3/blogs/{blogId}/posts/{postId}/comments/{commentId}`

### MarkAsSpam

```go
func (s *CommentsService) MarkAsSpam(ctx context.Context, blogId, postId, commentId string) (*schemas.Comment, error)
```

`POST .../comments/{commentId}/spam`

### RemoveContent

```go
func (s *CommentsService) RemoveContent(ctx context.Context, blogId, postId, commentId string) (*schemas.Comment, error)
```

`POST .../comments/{commentId}/removecontent`

## Options

```go
type CommentListOption func(*builder.Builder)
```

| Option | Query parameter | Description |
|--------|-----------------|-------------|
| `WithCommentPageToken(t)` | `pageToken` | Continue from a cursor |
| `WithCommentMaxResults(n)` | `maxResults` | Page size cap |
| `WithCommentStatus(s)` | `status` | `LIVE`, `EMPTIED`, `PENDING`, `SPAM` |
| `WithCommentView(v)` | `view` | Access level |
| `WithCommentStartDate(d)` | `startDate` | RFC 3339 lower bound |
| `WithCommentEndDate(d)` | `endDate` | RFC 3339 upper bound |
| `WithCommentFetchBodies(b)` | `fetchBodies` | Include comment bodies |
| `WithCommentPost(id)` | `post` | Restrict ListByBlog to one post |
