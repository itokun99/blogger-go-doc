# Pagination

Example showing how to walk paginated results using the `Tokens` helper.

```go
package main

import (
	"context"
	"fmt"
	"log"

	blogger "github.com/itokun99/blogger-go"
	"github.com/itokun99/blogger-go/gen/services"
)

func main() {
	ctx := context.Background()
	client := blogger.NewRawClient(nil)

	blogId := "1234567890"

	// Walk all pages (up to 100)
	allPosts, err := blogger.Tokens(100, func(token blogger.Token) (*blogger.PaginationResult, error) {
		opts := []services.PostOption{}
		if !token.IsZero() {
			opts = append(opts, services.WithPageToken(token.String()))
		}
		opts = append(opts, services.WithMaxResults(10))

		result, err := client.Posts().List(ctx, blogId, opts...)
		if err != nil {
			return nil, err
		}
		return blogger.ParsePaginationResult(result), nil
	})
	if err != nil {
		log.Fatal(err)
	}

	total := 0
	for _, page := range allPosts {
		var items []map[string]string
		if err := page.Decode(&items); err != nil {
			log.Fatal(err)
		}
		fmt.Printf("Page: %d items, total: %d\n", len(items), page.TotalItems)
		total += len(items)
	}
	fmt.Printf("Total posts: %d\n", total)
}
```

## Manual Pagination

For more control, paginate manually:

```go
var allItems []MyType
token := blogger.Token("")

for {
	result, err := client.Posts().List(ctx, blogId,
		services.WithMaxResults(10),
	)
	if err != nil {
		log.Fatal(err)
	}

	var items []MyType
	if err := blogger.ParsePaginationResult(result).Decode(&items); err != nil {
		log.Fatal(err)
	}
	allItems = append(allItems, items...)

	next := blogger.NewPageToken(result.NextPageToken)
	if next.IsZero() {
		break
	}
	token = next
}
```

## Parsing Raw Response

```go
payload, _ := httpClient.Get("/v3/blogs/..." + ...)
result, err := blogger.ParsePaginationResult(payload)
if err != nil {
    log.Fatal(err)
}

var posts []*schemas.Post
err = result.Decode(&posts)
```
