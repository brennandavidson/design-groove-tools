# Design Groove Tools

Internal client tools portal.

## Setup

```bash
npm install
npm run dev
```

## Adding a New Client

Edit `src/clients.config.ts`:

```ts
export const clients: Record<string, ClientConfig> = {
  "client-slug": {
    name: "Client Name",
    formId: "formIdFromLeadConnector",
    formHeight: 627, // optional
  },
};
```

## Deploy to Vercel

1. Push to GitHub
2. Import in Vercel
3. Set domain to `tools.designgroove.io`

## URLs

- `tools.designgroove.io/ash-cooling` - Ash Cooling marketing form
