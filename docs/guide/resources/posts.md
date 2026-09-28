# Posts Resource

Operations on blog posts.

## Methods

### Get

Get a post by ID.

```go
post, err := client.Posts().Get(ctx, blogId, postId)
```

**Query Parameters:**
- `fetchBody` — Include post content
- `fetchImages` — Include post images
- `maxComments` — Max comments to include
- `view` — Access level

### List

List posts for a blog.

```go
posts, err := client.Posts().List(ctx, blogId,
    blogger.WithMaxResults(10),
    blogger.WithStatus(blogger.PostStatusLive),
    blogger.WithOrderBy("published"),
)
```

**Query Parameters:**
- `maxResults` — Max results per page
- `pageToken` — Pagination token
- `status` — Filter by status (`LIVE`, `DRAFT`, `SCHEDULED`, `SOFT_TRASHED`)
- `labels` — Filter by labels
- `startDate` — Start date filter
- `endDate` — End date filter
- `fetchImages` — Include post images
- `orderBy` — Sort by (`PUBLISHED`, `UPDATED`)
- `sortOption` — Sort direction (`DESCENDING`, `ASCENDING`)
- `view` — Access level

### Search

Search posts by query.

```go
posts, err := client.Posts().Search(ctx, blogId, "golang tutorial")
```

**Query Parameters:**
- `q` — Search query (required)
- `fetchBodies` — Include post content
- `orderBy` — Sort order

### GetByPath

Get a post by URL path.

```go
post, err := client.Posts().GetByPath(ctx, blogId, "/2024/01/hello-world.html")
```

**Query Parameters:**
- `path` — URL path (required)
- `view` — Access level
- `maxComments` — Max comments to include

### Insert

Create a new post.

```go
post, err := client.Posts().Insert(ctx, blogId, &blogger.Post{
    Title: "Hello World",
    Content: "<p>My first post</p>",
})
```

**Query Parameters:**
- `fetchBody` — Include post content
- `isDraft` — Create as draft

### Update

Replace a post.

```go
post, err := client.Posts().Update(ctx, blogId, postId, post)
```

### Patch

Partially update a post.

```go
post, err := client.Posts().Patch(ctx, blogId, postId, post)
```

### Delete

Delete a post.

```go
err := client.Posts().Delete(ctx, blogId, postId)
```

### Publish

Publish a post.

```go
post, err := client.Posts().Publish(ctx, blogId, postId)
```

### Revert

Revert a published post to draft.

```go
post, err := client.Posts().Revert(ctx, blogId, postId)
```

## Example

```go
// List posts
posts, err := client.Posts().List(ctx, blogId,
    blogger.WithMaxResults(10),
    blogger.WithStatus(blogger.PostStatusLive),
    blogger.WithOrderBy("published"),
)

// Search posts
posts, err = client.Posts().Search(ctx, blogId, "golang")

// Create post
post, err := client.Posts().Insert(ctx, blogId, &blogger.Post{
    Title: "New Post",
    Content: "<p>Content here</p>",
    Labels: []string{"news", "updates"},
})
```
