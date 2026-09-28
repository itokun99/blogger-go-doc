# Pages Resource

Operations on blog pages.

## Methods

### Get

Get a page by ID.

```go
page, err := client.Pages().Get(ctx, blogId, pageId)
```

**Query Parameters:**
- `view` — Access level (`READER`, `AUTHOR`, `ADMIN`)

### List

List pages for a blog.

```go
pages, err := client.Pages().List(ctx, blogId,
    blogger.WithPageListMaxResults(10),
    blogger.WithPageListStatus(blogger.PageStatusLive),
)
```

**Query Parameters:**
- `maxResults` — Max results per page
- `pageToken` — Pagination token
- `status` — Filter by status (`LIVE`, `DRAFT`, `SOFT_TRASHED`)
- `fetchBodies` — Include page content
- `view` — Access level

### Insert

Create a new page.

```go
page, err := client.Pages().Insert(ctx, blogId, page)
```

**Query Parameters:**
- `isDraft` — Create as draft

### Update

Replace a page.

```go
page, err := client.Pages().Update(ctx, blogId, pageId, page)
```

### Patch

Partially update a page.

```go
page, err := client.Pages().Patch(ctx, blogId, pageId, page)
```

### Delete

Delete a page.

```go
err := client.Pages().Delete(ctx, blogId, pageId)
```

### Publish

Publish a page.

```go
page, err := client.Pages().Publish(ctx, blogId, pageId)
```

### Revert

Revert a published page to draft.

```go
page, err := client.Pages().Revert(ctx, blogId, pageId)
```

## Example

```go
// List pages
pages, err := client.Pages().List(ctx, blogId,
    blogger.WithPageListStatus(blogger.PageStatusDraft),
)

// Create a page
newPage := &blogger.Page{
    Title: "About",
    Content: "<p>About this blog</p>",
}
page, err := client.Pages().Insert(ctx, blogId, newPage)
```
