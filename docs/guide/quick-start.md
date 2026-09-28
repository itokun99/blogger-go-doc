# Quick Start

## Basic Usage

Create a client and make your first API call:

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

	// Create a raw client with your HTTP client
	httpClient := blogger.NewHTTPClient(ctx, blogger.TokenSourceFromJSON("credentials.json", "token.json"))
	client := blogger.NewRawClient(httpClient)

	// Get your blog
	blog, err := client.Blogs().Get(ctx, "YOUR_BLOG_ID")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(blog.Name)
}
```

## Using the Official Client

For full OAuth2 support with Google auth options:

```go
import (
	"context"
	"google.golang.org/api/option"

	blogger "github.com/itokun99/blogger-go"
)

func main() {
	ctx := context.Background()

	// Create client with Google auth
	client, err := blogger.NewClient(ctx, option.WithCredentialsFile("credentials.json"))
	if err != nil {
		log.Fatal(err)
	}
	defer client.Close()

	// Use the blog service
	blog, err := client.Blogs().Get(ctx, "1234567890")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(blog.Name)
}
```

## List Posts with Options

```go
posts, err := client.Posts().List(ctx, "YOUR_BLOG_ID",
	blogger.WithMaxResults(10),
	blogger.WithStatus(blogger.PostStatusLive),
	blogger.WithOrderBy("published"),
)
if err != nil {
	log.Fatal(err)
}
fmt.Printf("Found %d posts\n", len(posts.Items))
```

## What's Next?

- Read the [Authentication Guide](/guide/authentication) to learn about OAuth2 setup
- Explore the [API Reference](/api/client) for complete method documentation
- Check [Examples](/examples/authentication) for more usage patterns
