# Users Resource

Operations on users.

## Methods

### Get

Get a user by ID.

```go
user, err := client.Users().Get(ctx, userId)
```

**Path Parameters:**
- `userId` — User ID (required)

## Example

```go
user, err := client.Users().Get(ctx, "self")
if err != nil {
    log.Fatal(err)
}
fmt.Println(user.DisplayName)
fmt.Println(user.Url)
```
