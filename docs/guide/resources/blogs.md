# Blogs Resource

Operations on blogs.

## Methods

### Get

Get a blog by ID.

```go
blog, err := client.Blogs().Get(ctx, blogId)
```

**Query Parameters:**
- `view` — Access level (`READER`, `AUTHOR`, `ADMIN`)
- `maxPosts` — Maximum posts to include

**Options:**
- `blogger.WithBlogView(view)`
- `blogger.WithBlogMaxPosts(n)`

### GetByUrl

Get a blog by URL.

```go
blog, err := client.Blogs().GetByUrl(ctx, "https://example.blogspot.com")
```

**Query Parameters:**
- `url` — Blog URL (required, path parameter)
- `view` — Access level

### ListByUser

List blogs for a user.

```go
blogs, err := client.Blogs().ListByUser(ctx, userId)
```

**Query Parameters:**
- `fetchUserInfo` — Include user info
- `status` — Filter by status (`LIVE`, `DELETED`)
- `view` — Access level
- `role` — User role filter

## Example

```go
package main

import (
	"context"
	"fmt"
	"log"

	blogger "github.com/itokun99/blogger-go"
)

func main() {
	ctx := context.Background()
	client := blogger.NewRawClient(blogger.NewHTTPClient(ctx, nil))

	// Get blog by ID
	blog, err := client.Blogs().Get(ctx, "1234567890")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(blog.Name)

	// Get blog by URL
	blog, err = client.Blogs().GetByUrl(ctx, "https://myblog.blogspot.com")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(blog.Name)

	// List blogs by user
	blogs, err := client.Blogs().ListByUser(ctx, "1234567890")
	if err != nil {
		log.Fatal(err)
	}
	for _, b := range blogs.Items {
		fmt.Println(b.Name)
	}
}
```
