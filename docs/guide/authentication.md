# Authentication

The SDK supports OAuth2 authentication via `golang.org/x/oauth2`.

## Google OAuth2 Setup

1. Create credentials in [Google Cloud Console](https://console.cloud.google.com/)
2. Download the JSON credentials file
3. Use the provided helpers to authenticate

## Token Source Helpers

### From Credentials File

```go
ts, err := blogger.TokenSourceFromJSON("credentials.json", "token.json")
if err != nil {
    log.Fatal(err)
}
httpClient := blogger.NewHTTPClient(ctx, ts)
client := blogger.NewRawClient(httpClient)
```

This reads the client secrets from `credentials.json` and caches the refresh token in `token.json`.

### Scopes

The SDK defines the required scopes:

```go
import blogger "github.com/itokun99/blogger-go"

// Read-only access
blogger.Scopes[1] // https://www.googleapis.com/auth/blogger.readonly

// Full access
blogger.Scopes[0] // https://www.googleapis.com/auth/blogger
```

## Using with Google API Options

You can also use the official Google API client options:

```go
client, err := blogger.NewClient(ctx,
    option.WithCredentialsFile("credentials.json"),
    option.WithScopes(blogger.Scopes[0]),
)
```

## Read-Only Access

For read-only operations, use the readonly scope:

```go
ts, _ := blogger.TokenSourceFromJSON("credentials.json", "token.json")
httpClient := blogger.NewHTTPClient(ctx, ts)
client := blogger.NewRawClient(httpClient)

// All read operations work with readonly scope
blog, _ := client.Blogs().Get(ctx, blogId)
```
