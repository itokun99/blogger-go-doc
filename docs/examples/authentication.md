# Authentication

Complete example showing OAuth2 flow with credentials file.

```go
package main

import (
	"context"
	"fmt"
	"log"

	blogger "github.com/itokun99/blogger-go"
	"golang.org/x/oauth2"
)

func main() {
	ctx := context.Background()

	// Build token source from credentials + cached token
	ts, err := blogger.TokenSourceFromJSON("credentials.json", "token.json")
	if err != nil {
		log.Fatal(err)
	}

	// Create authenticated HTTP client
	httpClient := blogger.NewHTTPClient(ctx, ts)

	// Create SDK client
	client := blogger.NewRawClient(httpClient)

	// Fetch authenticated user
	user, err := client.Users().Get(ctx, "self")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Hello, %s!\n", user.DisplayName)

	// List blogs
	blogs, err := client.Blogs().ListByUser(ctx, user.Id)
	if err != nil {
		log.Fatal(err)
	}
	for _, b := range blogs.Items {
		fmt.Printf("- %s (%s)\n", b.Name, b.Url)
	}
}
```

## Required Scopes

- `https://www.googleapis.com/auth/blogger` — Full access
- `https://www.googleapis.com/auth/blogger.readonly` — Read-only access

Access both via `blogger.Scopes`.

## Credential File Format

Create `credentials.json` from [Google Cloud Console](https://console.cloud.google.com/apis/credentials):

```json
{
  "installed": {
    "client_id": "YOUR_CLIENT_ID.apps.googleusercontent.com",
    "project_id": "your-project",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_secret": "YOUR_CLIENT_SECRET",
    "redirect_uris": ["http://localhost"]
  }
}
```
