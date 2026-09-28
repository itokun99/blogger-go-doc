# Client Setup

The `Client` is the main entry point to the Blogger API. It manages authentication, base URL, and provides access to all services.

## Creating a Client

### With OAuth2 Credentials

```go
import blogger "github.com/itokun99/blogger-go"

client, err := blogger.NewClient(ctx, option.WithCredentialsFile("credentials.json"))
```

### With Existing HTTP Client

```go
httpClient := blogger.NewHTTPClient(ctx, tokenSource)
client := blogger.NewRawClient(httpClient)
```

### Context Handling

The client supports context propagation via `WithContext`:

```go
ctx := context.WithValue(context.Background(), myKey, myValue)
client := blogger.NewRawClient(httpClient).WithContext(ctx)
```

Each service method accepts the context as its first parameter:

```go
blog, err := client.Blogs().Get(ctx, blogId)
```

## Service Accessors

Access services through the client:

| Method | Returns |
|--------|---------|
| `client.Blogs()` | `*BlogsService` |
| `client.Comments()` | `*CommentsService` |
| `client.Pages()` | `*PagesService` |
| `client.Posts()` | `*PostsService` |
| `client.Users()` | `*UsersService` |
| `client.BlogUserInfos()` | `*BlogUserInfosService` |
| `client.PageViews()` | `*PageViewsService` |
| `client.PostUserInfos()` | `*PostUserInfosService` |

## Configuration

| Method | Description |
|--------|-------------|
| `HTTPClient()` | Returns the underlying HTTP client |
| `BasePath()` | Returns the API base URL |
| `WithContext(ctx)` | Returns a new client with the given context |
