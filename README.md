# Ground Up

Ground Up is a Brazilian Jiu-Jitsu technique reference: a searchable library of BJJ
techniques with step-by-step instructions, positional context, and a jargon glossary
for players learning the terminology. This repo is a pnpm monorepo containing that
web app plus a couple of supporting artifacts.

## Artifacts

| Artifact | Dir | What it is |
|---|---|---|
| BJJ Technique Book | `artifacts/bjj-book` | The main "Ground Up" web app — technique library, filters, technique detail pages, glossary |
| API Server | `artifacts/api-server` | Express backend used by the web app |
| Ground Up Promo Video | `artifacts/ground-up-promo` | Animated ~26s promo video for the app (React/Remotion-style video artifact) |
| Canvas | `artifacts/mockup-sandbox` | Component preview sandbox used while designing UI variants |

## Run & operate

This is a pnpm workspace (Node.js). Each artifact is run independently:

```bash
pnpm --filter @workspace/bjj-book run dev         # main web app
pnpm --filter @workspace/api-server run dev        # backend API
pnpm --filter @workspace/mockup-sandbox run dev    # component preview sandbox
pnpm --filter @workspace/ground-up-promo run dev   # promo video preview
```

Other useful commands:

```bash
pnpm run typecheck                                 # typecheck every package
pnpm run build                                     # typecheck + build everything
pnpm --filter @workspace/bjj-book test              # run the bjj-book test suite
```

On Replit, these are wired up as workflows, so the dev servers start automatically
and are visible in the preview pane — you don't need to run the commands above by
hand unless you're working outside Replit.

## API security configuration

The API accepts browser requests from loopback origins during local development. In
production, set `CORS_ORIGINS` to a comma-separated list of the exact frontend
origins allowed to call it; the server will refuse to start when this is missing.

```bash
CORS_ORIGINS=https://app.example.com,https://www.example.com
```

## Stack

- pnpm workspaces, TypeScript
- Frontend: React, Vite, Tailwind CSS, Framer Motion, Wouter (routing)
- Backend: Express
- Testing: Vitest, Testing Library

## Structure

```
artifacts/
  bjj-book/          # main web app (pages, components, technique data)
  api-server/        # backend API
  ground-up-promo/   # promo video artifact
  mockup-sandbox/    # design/preview sandbox
lib/                 # shared packages used across artifacts
```

See `replit.md` for deeper project notes and conventions.
