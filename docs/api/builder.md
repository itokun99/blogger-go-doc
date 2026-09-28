# Builder

The builder constructs HTTP requests and executes them through a transport.

```go
package builder
```

## Types

### Builder

```go
type Builder struct {
    // contains filtered fields
}
```

Accumulates method, path, query params, headers, body, context, and transport client.

### HTTPClient

```go
type HTTPClient interface {
    Do(req *http.Request) (*http.Response, error)
}
```

Transport interface every generated service satisfies.

### BasePathProvider

```go
type BasePathProvider interface {
    BasePath() string
}
```

Provider of the API root for resolving relative paths.

### TransportProvider

```go
type TransportProvider interface {
    HTTPClient() *http.Client
    BasePath() string
}
```

Combined interface for the client's transport. Every generated `*Client` implements this.

## Functions

### New

```go
func New(method, path string) *Builder
```

Creates a new Builder for the given HTTP method and path. Path can be absolute or relative (resolved against the transport's base path).

### APIError

```go
func NewAPIError(resp *http.Response) (*APIError, error)
```

Parses an API error from an HTTP response body. Returns nil when resp is nil.

### IsAPIError

```go
func IsAPIError(err error) bool
```

Checks whether err is or wraps an APIError. Uses Unwrap so errors.As works.

### ParsePaginationResult

```go
func ParsePaginationResult(payload []byte) (*PaginationResult, error)
```

Decodes a raw list response into a PaginationResult. Tolerates a response that is itself a bare items array (not wrapped in an envelope).

### Tokens

```go
func Tokens(maxPages int, fetch func(token Token) (*PaginationResult, error)) ([]*PaginationResult, error)
```

Walks a paginated endpoint calling fetch repeatedly until nextPageToken is empty or maxPages has been collected. Pass 0 for maxPages to walk until exhausted. Returns nil when fetch is nil.

### PageTokenFromResponse

```go
func PageTokenFromResponse(payload []byte) (Token, error)
```

Extracts nextPageToken from a raw list response body. Convenience wrapper around ParsePaginationResult.

## Options Constants

Common query parameter names used across services:

```go
const (
    PageToken = "pageToken"
    MaxResults = "maxResults"
    Status    = "status"
    OrderBy   = "orderBy"
    Labels    = "labels"
)
```

## Methods on Builder

| Method | Signature | Effect |
|--------|-----------|--------|
| Context | `(ctx) *Builder` | Attaches a context; nil is a no-op |
| Param | `(key, value) *Builder` | Adds a query parameter; empty key is ignored |
| Body | `(v) *Builder` | Marshals v as JSON and sends it as the request body |
| Header | `(key, value) *Builder` | Sets an HTTP header; empty key is ignored |
| Do | `(client, model) (interface{}, error)` | Builds the request, sends it, decodes the response into model |
