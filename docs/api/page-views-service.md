# PageViews Service

```go
type PageViewsService struct{ ... }

func NewPageViewsService(client builder.TransportProvider) *PageViewsService
```

Access via `client.PageViews()`.

## Methods

### Get

```go
func (s *PageViewsService) Get(ctx context.Context, blogId string, opts ...PageViewsOption) (*schemas.Pageviews, error)
```

Gets page views by blog id. `GET /v3/blogs/{blogId}/pageviews`

## Options

| Option | Query parameter | Description |
|--------|-----------------|-------------|
| `WithPageViewRange(r)` | `range` | One of `all`, `30DAYS`, `7DAYS` |

## Example

```go
views, err := client.PageViews().Get(ctx, blogId,
    services.WithPageViewRange("30DAYS"),
)
for _, c := range views.Counts {
    fmt.Printf("%s: %s\n", c.TimeRange, c.Count)
}
```
