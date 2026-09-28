# Users Service

```go
type UsersService struct{ ... }

func NewUsersService(client builder.TransportProvider) *UsersService
```

Access via `client.Users()`.

## Methods

### Get

```go
func (s *UsersService) Get(ctx context.Context, userId string) (*schemas.User, error)
```

Gets one user by user_id. `GET /v3/users/{userId}`

Pass `"self"` to fetch the authenticated user.

```go
user, err := client.Users().Get(ctx, "self")
fmt.Println(user.DisplayName)
```
