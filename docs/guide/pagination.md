# Pagination

The SDK supports cursor-based pagination for list operations.

## Basic Pagination

```go
// First page
posts, err := client.Posts().List(ctx, blogId,
    blogger.WithMaxResults(10),
)
```

## Automatic Pagination

Use the `Tokens` helper to walk all pages:

```go
import blogger "github.com/itokun99/blogger-go"

allPosts, err := blogger.Tokens(100, func(token blogger.Token) (*blogger.PaginationResult, error) {
    opts := []blogger.PostOption{}
    if !token.IsZero() {
        opts = append(opts, blogger.WithPageToken(token.String()))
    }
    result, err := client.Posts().List(ctx, blogId, opts...)
    if err != nil {
        return nil, err
    }
    return blogger.ParsePaginationResult(result), nil
})
```

## Manual Pagination

```go
var allPosts []*blogger.Post
token := blogger.Token("")

for {
    opts := []blogger.PostOption{
        blogger.WithMaxResults(10),
    }
    if !token.IsZero() {
        opts = append(opts, blogger.WithPageToken(token.String()))
    }
    
    result, err := client.Posts().List(ctx, blogId, opts...)
    if err != nil {
        log.Fatal(err)
    }
    
    allPosts = append(allPosts, result.Items...)
    
    nextToken := blogger.NewPageToken(result.NextPageToken)
    if nextToken.IsZero() {
        break
    }
    token = nextToken
}
```

## PaginationResult

Decode paginated responses:

```go
result, err := blogger.ParsePaginationResult(responseBody)
if err != nil {
    log.Fatal(err)
}

var posts []*blogger.Post
err = result.Decode(&posts)
```

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `Items` | `[]byte` | Raw items array |
| `NextPageToken` | `string` | Token for next page |
| `TotalItems` | `int64` | Total number of items |
| `HasMore()` | `bool` | Whether more pages exist |
