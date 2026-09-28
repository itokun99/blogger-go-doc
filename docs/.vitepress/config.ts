export default {
  lang: 'en-US',
  title: 'blogger-go',
  description: 'Go SDK for Blogger API v3',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'API', link: '/api/client' },
      { text: 'Examples', link: '/examples/authentication' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Quick Start', link: '/guide/quick-start' },
          ]
        },
        {
          text: 'Concepts',
          items: [
            { text: 'Client Setup', link: '/guide/client-setup' },
            { text: 'Authentication', link: '/guide/authentication' },
            { text: 'Builder Pattern', link: '/guide/builder-pattern' },
            { text: 'Error Handling', link: '/guide/error-handling' },
            { text: 'Pagination', link: '/guide/pagination' },
          ]
        },
        {
          text: 'Resources',
          items: [
            { text: 'Blogs', link: '/guide/resources/blogs' },
            { text: 'Comments', link: '/guide/resources/comments' },
            { text: 'Pages', link: '/guide/resources/pages' },
            { text: 'Posts', link: '/guide/resources/posts' },
            { text: 'Users', link: '/guide/resources/users' },
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Client', link: '/api/client' },
            { text: 'Blogs Service', link: '/api/blogs-service' },
            { text: 'Comments Service', link: '/api/comments-service' },
            { text: 'Pages Service', link: '/api/pages-service' },
            { text: 'Posts Service', link: '/api/posts-service' },
            { text: 'Users Service', link: '/api/users-service' },
            { text: 'BlogUserInfos Service', link: '/api/blog-user-infos-service' },
            { text: 'PageViews Service', link: '/api/page-views-service' },
            { text: 'PostUserInfos Service', link: '/api/post-user-infos-service' },
            { text: 'Schema Models', link: '/api/schema-models' },
            { text: 'Builder', link: '/api/builder' },
            { text: 'Errors', link: '/api/errors' },
          ]
        }
      ],
      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Authentication', link: '/examples/authentication' },
            { text: 'List Posts', link: '/examples/list-posts' },
            { text: 'Create Post', link: '/examples/create-post' },
            { text: 'Paginate Results', link: '/examples/paginate' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/itokun99/blogger-go' }
    ]
  }
}
