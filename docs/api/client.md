# Client

The `Client` is the entry point for talking to the Blogger API v3.

```go
type Client struct {
    Service *blogger.Service
    // contains filtered or unexported fields
}
```

It satisfies `builder.TransportProvider`, supplying both the HTTP transport and the API base path to every generated service.

## Constructors

### NewClient

```go
func NewClient(ctx context.Context, opts ...option.ClientOption) (*Client, error)
```

Creates a client using official Google auth options. Internally builds a `google.golang.org/api/blogger/v3.Service`, so any `option.ClientOption` works — credential files, ADC, API keys, custom endpoints.

```go
client, err := blogger.NewClient(ctx,
    option.WithCredentialsFile("credentials.json"),
)
```

### NewRawClient

```go
func NewRawClient(httpClient *http.Client) *Client
```

Creates a client backed by a caller-provided `http.Client`. Never fails and requires no credentials — use it when you manage authentication yourself.

```go
httpClient := blogger.NewHTTPClient(ctx, tokenSource)
client := blogger.NewRawClient(httpClient)
```

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| WithContext | `(ctx) *Client` | Returns a clone bound to the given context |
| HTTPClient | `() *http.Client` | Returns the transport requests are sent through |
| BasePath | `() string` | Returns the API root paths resolve against |

## Service Accessors

| Method | Returns |
|--------|---------|
| `Blogs()` | `*services.BlogsService` |
| `Comments()` | `*services.CommentsService` |
| `Pages()` | `*services.PagesService` |
| `Posts()` | `*services.PostsService` |
| `Users()` | `*services.UsersService` |
| `BlogUserInfos()` | `*services.BlogUserInfosService` |
| `PageViews()` | `*services.PageViewsService` |
| `PostUserInfos()` | `*services.PostUserInfosService` |

```go
client := blogger.NewRawClient(httpClient)
blog, err := client.Blogs().Get(ctx, blogId)
```
