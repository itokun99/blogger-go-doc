# Installation

## From Go Modules

Add the package to your Go module:

```sh
go get github.com/itokun99/blogger-go
```

Or add it to your `go.mod`:

```go
module myproject

go 1.21

require github.com/itokun99/blogger-go v0.1.0
```

## Verify Installation

```sh
go mod tidy
go test ./...
```

## Dependencies

The SDK requires:

- `golang.org/x/oauth2` — OAuth2 support
- `google.golang.org/api/blogger/v3` — Official Blogger API client

These are managed automatically by Go modules.
