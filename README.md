# OCode — web

A cross-device AI coding workspace: a simple chat interface where you can ask a "careful coding partner" for concise, practical help from any browser.

> Cloudflare version: [ocode-web-cloudflare](https://github.com/nikkimasani/ocode-web-cloudflare) (uses Workers AI instead of OpenAI).

## Stack

- Next.js 16 (App Router) + React 19, TypeScript
- Vercel AI SDK (`ai`, `@ai-sdk/react`) with the OpenAI provider
- Hosted on Vercel

## Project layout

| Path | What it does |
|---|---|
| `app/page.tsx` | Chat UI |
| `app/api/chat/route.ts` | Streams replies from the model with the OCode system prompt |
| `app/layout.tsx` | Page shell and metadata |
| `app/styles.css` | Styles |

## Run locally

```bash
npm install
cp .env.example .env.local   # then add your OPENAI_API_KEY
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run build`, `npm start`, `npm run check` (type-check).

## Configuration

| Variable | Where | Notes |
|---|---|---|
| `OPENAI_API_KEY` | `.env.local` / Vercel project settings | Server-side only — never expose it to the browser |

## Deploy

Push to `main`; Vercel builds and deploys automatically. Set `OPENAI_API_KEY` in Vercel → Project Settings → Environment Variables.
