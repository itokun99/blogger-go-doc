---
layout: home

hero:
  name: blogger-go
  text: Go SDK for Blogger API v3
  tagline: Complete client covering all 8 resources and 33 methods. Builder pattern, typed errors, pagination helpers, OAuth2.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/introduction
    - theme: alt
      text: View on GitHub
      link: https://github.com/itokun99/blogger-go

features:
  - title: Complete API Coverage
    details: All 8 resources and 33 methods from the canonical discovery document (revision 20260924).
  - title: Builder Pattern
    details: Chainable request construction with per-service option helpers.
  - title: Typed Errors
    details: Structured APIError with HTTP code, message, and per-reason details.
  - title: Pagination Helpers
    details: Cursor-based pagination with Token, PaginationResult, and an automatic page walker.
  - title: OAuth2 Ready
    details: Token source helpers on top of golang.org/x/oauth2 and official Google auth options.
  - title: Context Propagation
    details: Every method takes context.Context first, so cancellation and deadlines just work.
---
