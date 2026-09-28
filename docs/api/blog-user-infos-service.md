# BlogUserInfos Service

```go
type BlogUserInfosService struct{ ... }

func NewBlogUserInfosService(client builder.TransportProvider) *BlogUserInfosService
```

Access via `client.BlogUserInfos()`.

## Methods

### Get

```go
func (s *BlogUserInfosService) Get(ctx context.Context, userId, blogId string) (*schemas.BlogUserInfo, error)
```

Gets one blog and user info pair by blog id and user id.

`GET /v3/users/{userId}/blogs/{blogId}`

```go
pair, err := client.BlogUserInfos().Get(ctx, userId, blogId)
fmt.Println(pair.Blog.Name)
fmt.Println(pair.BlogUserInfo.Role)
```
