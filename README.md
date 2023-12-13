# Supabase on Next.js Edge Runtime using Drizzle

## Setup

```bash
bun i
```

```bash
cp .env.example .env
```

Get a supabase pooler URL and set it as `POSTGRES_URL`. I left the Discord ID and Secret in there so it's easier to get started. Will invalidate those in a few days.

```bash
bun db:push
bun dev
```
