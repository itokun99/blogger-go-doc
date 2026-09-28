# List Posts

Example showing listing posts with pagination and filtering.

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

	// List live posts, newest first, 20 per page
	posts, err := client.Posts().List(ctx, blogId,
		services.WithMaxResults(20),
		services.WithStatus(blogger.PostStatusLive),
		services.WithOrderBy("published"),
		services.WithSortOrder("DESCENDING"),
	)
	if err != nil {
		log.Fatal(err)
	}

	for _, p := range posts.Items {
		fmt.Printf("%s (%s)\n", p.Title, p.Published)
	}

	// Check if there are more pages
	if posts.NextPageToken != "" {
		fmt.Printf("More pages available. Token: %s\n", posts.NextPageToken)
	}
}
```

## Filtering by Labels

```go
posts, err := client.Posts().List(ctx, blogId,
	services.WithLabels("news", "tutorials"),
)
```

## Date Range Filter

```go
posts, err := client.Posts().List(ctx, blogId,
	services.WithStartDate("2024-01-01T00:00:00Z"),
	services.WithEndDate("2024-12-31T23:59:59Z"),
)
```
