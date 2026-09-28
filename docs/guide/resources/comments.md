# Comments Resource

Operations on comments.

## Methods

### Get

Get a comment by ID.

```go
comment, err := client.Comments().Get(ctx, blogId, postId, commentId)
```

**Path Parameters:**
- `blogId` — Blog ID
- `postId` — Post ID
- `commentId` — Comment ID

### List

List comments for a post.

```go
comments, err := client.Comments().List(ctx, blogId, postId,
    blogger.WithMaxResults(10),
    blogger.WithStatus(blogger.CommentStatusLive),
)
```

**Query Parameters:**
- `maxResults` — Max results per page
- `pageToken` — Pagination token
- `status` — Filter by status
- `startDate` — Start date filter
- `endDate` — End date filter
- `fetchBodies` — Include comment bodies
- `view` — Access level

### ListByBlog

List all comments for a blog.

```go
comments, err := client.Comments().ListByBlog(ctx, blogId,
    blogger.WithCommentPost(postId), // Optional: filter to single post
)
```

### Approve

Approve a pending comment.

```go
comment, err := client.Comments().Approve(ctx, blogId, postId, commentId)
```

### Delete

Delete a comment.

```go
err := client.Comments().Delete(ctx, blogId, postId, commentId)
```

### MarkAsSpam

Mark a comment as spam.

```go
comment, err := client.Comments().MarkAsSpam(ctx, blogId, postId, commentId)
```

### RemoveContent

Remove comment content while keeping the comment.

```go
comment, err := client.Comments().RemoveContent(ctx, blogId, postId, commentId)
```

## Example

```go
// List comments
comments, err := client.Comments().List(ctx, blogId, postId,
    blogger.WithMaxResults(10),
    blogger.WithStatus(blogger.CommentStatusPending),
)
```
