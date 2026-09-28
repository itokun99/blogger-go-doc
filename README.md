# blogger-go Documentation

VitePress documentation for the [blogger-go](https://github.com/itokun99/blogger-go) SDK.

## Live Demo

🌐 [https://blogger-go-irlmkmock-arthurs-tavern.vercel.app](https://blogger-go-irlmkmock-arthurs-tavern.vercel.app)

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Deploys automatically to Vercel on push to main.

```bash
# Deploy manually
npx vercel --prod
```

## Docs Structure

```
docs/
├── index.md              # Homepage
├── .vitepress/config.ts  # VitePress config
├── guide/                # User guide
│   ├── introduction.md
│   ├── installation.md
│   ├── quick-start.md
│   ├── client-setup.md
│   ├── authentication.md
│   ├── builder-pattern.md
│   ├── error-handling.md
│   ├── pagination.md
│   └── resources/        # Per-resource guides
├── api/                  # API reference
│   ├── client.md
│   ├── *-service.md      # One per service
│   ├── schema-models.md
│   ├── builder.md
│   └── errors.md
└── examples/             # Code examples
```
