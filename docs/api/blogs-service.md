# Blogs Service

```go
type BlogsService struct{ ... }

func NewBlogsService(client builder.TransportProvider) *BlogsService
```

Access via `client.Blogs()`.

## Methods

### Get

```go
func (s *BlogsService) Get(ctx context.Context, blogId string, opts ...BlogsOption) (*schemas.Blog, error)
```

Gets a blog by id. `GET /v3/blogs/{blogId}`

### GetByUrl

```go
func (s *BlogsService) GetByUrl(ctx context.Context, blogURL string, opts ...BlogsOption) (*schemas.Blog, error)
```

Gets a blog by url. `GET /v3/blogs/byurl?url={url}`

### ListByUser

```go
func (s *BlogsService) ListByUser(ctx context.Context, userId string, opts ...BlogsOption) (*schemas.BlogList, error)
```

Lists blogs by user. `GET /v3/users/{userId}/blogs`

## Options

Options live in the `services` package; the client re-exports them.

```go
type BlogsOption func(*builder.Builder)
```

| Option | Query parameter | Description |
|--------|-----------------|-------------|
| `WithBlogView(view)` | `view` | Access level: `READER`, `AUTHOR`, `ADMIN` |
| `WithBlogMaxPosts(n)` | `maxPosts` | Max posts included in the response |

## Example

```go
blog, err := client.Blogs().Get(ctx, "1234567890",
    services.WithBlogView(services.ViewAuthor),
)
```
