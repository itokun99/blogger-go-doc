# Create Post

Example showing how to create a new blog post.

```go
package main

import (
	"context"
	"fmt"
	"log"

	blogger "github.com/itokun99/blogger-go"
	"github.com/itokun99/blogger-go/gen/schemas"
	"github.com/itokun99/blogger-go/gen/services"
)

func main() {
	ctx := context.Background()
	client := blogger.NewRawClient(nil)

	blogId := "1234567890"

	post := &schemas.Post{
		Title:   "Hello Blogger",
		Content: "<p>Welcome to my blog!</p>",
		Labels:  []string{"news", "intro"},
	}

	created, err := client.Posts().Insert(ctx, blogId, post)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("Created: %s (%s)\n", created.Title, created.Url)
}
```

## Creating a Draft

```go
post, err := client.Posts().Insert(ctx, blogId, &schemas.Post{
	Type:   "text/html",
	Title:  "Draft Post",
	Content: "<p>Work in progress</p>",
}, services.WithFetchBody(true))
```

## Publishing a Post

```go
published, err := client.Posts().Publish(ctx, blogId, postId)
fmt.Println(published.Status.LifeCycleStatus) // "LIVE"
```

## Updating a Post

```go
updated, err := client.Posts().Patch(ctx, blogId, postId, &schemas.Post{
	Title: "Updated Title",
})
```
