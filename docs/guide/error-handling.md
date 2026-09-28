# Error Handling

The SDK provides typed errors for structured error handling.

## APIError

When an API request fails, the SDK returns an `APIError`:

```go
import blogger "github.com/itokun99/blogger-go"

blog, err := client.Blogs().Get(ctx, blogId)
if err != nil {
    if apiErr, ok := err.(*blogger.APIError); ok {
        fmt.Printf("Error %d: %s\n", apiErr.Code, apiErr.Message)
        for _, reason := range apiErr.Errors {
            fmt.Printf("  - %s: %s\n", reason.Reason, reason.Message)
        }
    } else {
        log.Fatal(err)
    }
}
```

## APIError Structure

```go
type APIError struct {
    Code    int              // HTTP status code
    Message string           // Human-readable message
    Errors  []ErrorInfo      // Detailed error information
    Domain  string           // Error domain
}

type ErrorInfo struct {
    Reason    string `json:"reason"`
    Message   string `json:"message"`
    Location  string `json:"location"`
    LocationType string `json:"locationType"`
}
```

## Checking Error Types

Use `errors.As` to check for specific error types:

```go
import "errors"

var apiErr *blogger.APIError
if errors.As(err, &apiErr) {
    // Handle API error
}
```

## Common Error Cases

| Error | Cause |
|-------|-------|
| `APIError{Code: 404}` | Resource not found |
| `APIError{Code: 403}` | Permission denied |
| `APIError{Code: 401}` | Unauthorized |
| `APIError{Code: 400}` | Bad request (validation error) |
| `APIError{Code: 429}` | Rate limit exceeded |
| `APIError{Code: 500}` | Server error |
