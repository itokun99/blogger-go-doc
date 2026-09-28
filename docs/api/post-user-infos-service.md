# PostUserInfos Service

```go
type PostUserInfosService struct{ ... }

func NewPostUserInfosService(client builder.TransportProvider) *PostUserInfosService
```

Access via `client.PostUserInfos()`.

## Methods

### Get

```go
func (s *PostUserInfosService) Get(ctx context.Context, userId, blogId, postId string) (*schemas.PostUserInfo, error)
```

Gets one post and user info pair. `GET /v3/users/{userId}/blogs/{blogId}/posts/{postId}`

### List

```go
func (s *PostUserInfosService) List(ctx context.Context, userId, blogId string) (*schemas.PostUserInfosList, error)
```

Lists post and user info pairs. `GET /v3/users/{userId}/blogs/{blogId}/posts`

```go
pairs, err := client.PostUserInfos().List(ctx, userId, blogId)
for _, p := range pairs.Items {
    fmt.Println(p.Post.Title, p.PostUserInfo.HasEditAccess)
}
```
