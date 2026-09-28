# Errors

Typed error types for structured API error handling.

## APIError

```go
type APIError struct {
    Code    int         `json:"code"`
    Message string      `json:"message"`
    Errors  []ErrorInfo `json:"errors"`
    Domain  string      `json:"domain"`
    Reason  string      `json:"reason"`
}
```

Returned whenever the API responds with a non-2xx status. All fields are decoded from the JSON error body Google returns.

## ErrorInfo

```go
type ErrorInfo struct {
    Reason       string `json:"reason"`
    Message      string `json:"message"`
    Location     string `json:"location"`
    LocationType string `json:"locationType"`
}
```

Detailed per-error information. Common reasons:

| Reason | Meaning |
|--------|---------|
| `NOT_FOUND` | Resource not found |
| `FORBIDDEN` | Insufficient permissions |
| `UNAUTHENTICATED` | Authentication required |
| `QUOTA_EXCEEDED` | Daily quota exceeded |
| `RATE_LIMIT_EXCEEDED` | Rate limit exceeded |
| `BAD_REQUEST` | Invalid request parameters |
| `CONFLICT` | Resource state conflict |

## Checking Errors

```go
import "errors"

blog, err := client.Blogs().Get(ctx, blogId)
if err != nil {
    var apiErr *blogger.APIError
    if errors.As(err, &apiErr) {
        fmt.Printf("HTTP %d: %s\n", apiErr.Code, apiErr.Message)
        for _, e := range apiErr.Errors {
            fmt.Printf("  %s: %s\n", e.Reason, e.Message)
        }
    } else {
        log.Fatal(err)
    }
}
```

## Helper

```go
func IsAPIError(err error) bool
```

Returns true when err is or wraps an APIError. Useful in simple switch/case patterns:

```go
if blogger.IsAPIError(err) {
    // handle API error
}
```
