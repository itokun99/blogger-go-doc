# Schema Models

All 15 schema models generated from the discovery document.

## Blog

```go
type Blog struct {
    Kind          string         `json:"kind"`
    Id            string         `json:"id"`
    Name          string         `json:"name"`
    Url           string         `json:"url"`
    Published     string         `json:"published"`
    Updated       string         `json:"updated"`
    Posts         PostInfo       `json:"posts"`
    Pages         PageInfo       `json:"pages"`
    Locale        Locale         `json:"locale"`
    CustomMetaData string      `json:"customMetaData"`
}
```

## BlogList

```go
type BlogList struct {
    Kind                string        `json:"kind"`
    Items               []*Blog       `json:"items"`
    NextPageToken       string        `json:"nextPageToken"`
    TotalItems          int64         `json:"totalItems"`
    Etag                string        `json:"etag"`
    BlogUserInfos       []*BlogPerUserInfo `json:"blogUserInfos,omitempty"`
}
```

## Comment

```go
type Comment struct {
    Kind          string   `json:"kind"`
    Id            string   `json:"id"`
    Blog          BlogLink `json:"blog"`
    Post          PostLink `json:"post"`
    Author        Person   `json:"author"`
    Content       string   `json:"content"`
    Published     string   `json:"published"`
    Updated       string   `json:"updated"`
    Status        string   `json:"status"`
}
```

## CommentList

```go
type CommentList struct {
    Kind            string     `json:"kind"`
    NextPageToken   string     `json:"nextPageToken"`
    Items           []*Comment `json:"items"`
    Etag            string     `json:"etag"`
    PrevPageToken   string     `json:"prevPageToken"`
    PrevLink        string     `json:"prevLink"`
    NextLink        string     `json:"nextLink"`
    SelfLink        string     `json:"selfLink"`
}
```

## Page

```go
type Page struct {
    Kind        string     `json:"kind"`
    Id          string     `json:"id"`
    Blog        BlogLink   `json:"blog"`
    Author      Person     `json:"author"`
    Title       string     `json:"title"`
    TitleLink   string     `json:"titleLink"`
    Content     string     `json:"content"`
    Published   string     `json:"published"`
    Updated     string     `json:"updated"`
    Status      string     `json:"status"`
    URL         string     `json:"url"`
    Link        string     `json:"link"`
    SelfLink    string     `json:"selfLink"`
    ReaderComments string  `json:"readerComments"`
}
```

## PageList

```go
type PageList struct {
    Kind           string   `json:"kind"`
    NextPageToken  string   `json:"nextPageToken"`
    Items          []*Page  `json:"items"`
    Etag           string   `json:"etag"`
    PrevPageToken  string   `json:"prevPageToken"`
    PrevLink       string   `json:"prevLink"`
    NextLink       string   `json:"nextLink"`
    SelfLink       string   `json:"selfLink"`
}
```

## Post

```go
type Post struct {
    Kind            string        `json:"kind"`
    Id              string        `json:"id"`
    Blog            BlogLink      `json:"blog"`
    Author          Person        `json:"author"`
    Title           string        `json:"title"`
    Content         string        `json:"content"`
    CustomMetaData  string        `json:"customMetaData"`
    Published       string        `json:"published"`
    Updated         string        `json:"updated"`
    Modified        string        `json:"modified"`
    Url             string        `json:"url"`
    Link            string        `json:"link"`
    Images          []ImageLink   `json:"images"`
    NotesLink       string        `json:"notesLink"`
    ReaderComments  string        `json:"readerComments"`
    SelfLink        string        `json:"selfLink"`
    Status          struct { LifeCycleStatus string } `json:"status"`
    Labels          []string      `json:"labels"`
}
```

## PostList

```go
type PostList struct {
    Kind            string        `json:"kind"`
    NextPageToken   string        `json:"nextPageToken"`
    Items           []*Post       `json:"items"`
    Etag            string        `json:"etag"`
    PrevPageToken   string        `json:"prevPageToken"`
    PrevLink        string        `json:"prevLink"`
    NextLink        string        `json:"nextLink"`
    SelfLink        string        `json:"selfLink"`
}
```

## User

```go
type User struct {
    Kind          string   `json:"kind"`
    Id            string   `json:"id"`
    DisplayName   string   `json:"displayName"`
    Url           string   `json:"url"`
    Description   string   `json:"description"`
    Created       string   `json:"created"`
    Avatar        Avatar   `json:"avatar"`
}
```

## Pageviews

```go
type Pageviews struct {
    Kind    string     `json:"kind"`
    Blog    BlogLink   `json:"blog"`
    Counts  []Count    `json:"counts"`
    Etag    string     `json:"etag"`
}
```

## Remaining Models

```go
type PostUserInfo struct { Post Post; BlogUserInfo BlogUserInfo }
type PostPerUserInfo struct { Post Post; BlogUserInfo BlogUserInfo }
type PostUserInfosList struct { Kind string; Items []*PostUserInfo }
type BlogUserInfo struct { Blog Blog; PerUserInfo BlogPerUserInfo }
type BlogPerUserInfo struct { HasAdmin bool; Role string; IsOwner bool; Blog Blog; User User }
type Locale struct { Language string; Country string; SystemLocale string }
type Person struct { DisplayName string; Url string; Image Avatar }
type Avatar struct { Url string }
type ImageLink struct { Url string }
type BlogLink struct { Id string; Url string }
type PostLink struct { Id string; Url string }
type Count struct { TimeRange string; Count string }
```
