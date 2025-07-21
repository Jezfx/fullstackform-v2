# End-to-end typesafe API in a monorepo 
This is a boilerplate project for future reference. 
It supports a serverless api route with full end-to-end typescript api. 
This architecture could support middleware, auth and could scale across multiple apps. 

#### Tech Stack

- [Turborepo](https://turbo.build/)
- [Next.js](https://nextjs.org/)
- [tRCP](https://trpc.io/)
- [Astro](https://astro.build/)
- [Chakra UI](https://chakra-ui.com/)
- [Storybook](https://storybook.js.org/)
- [Zod](https://zod.dev/)
- [Supabase](https://supabase.com/)

## tRCP AppRouter 

```
.
└── monorepo (turborepo)/
    ├── apps/
    │   ├── docs (storybook)
    │   ├── astro (astro)
    │   └── web (nextjs)/
    │       ├── contact
    │       ├── messages
    │       └── api/
    │           ├── /messages/
    │           │   └── /get-by-email
    │           └── /trcp/
    │               ├── getMessages
    │               ├── submitMessage
    │               └── getMessagesByEmail
    └── packages/
        ├── ui (chakra-ui)
        └── data-access (supabase)
```

##### New 
<img width="990" height="627" alt="Screenshot 2025-07-16 at 22 15 57" src="https://github.com/user-attachments/assets/c931a2a5-bbd6-4000-adb6-8f54d659cda3" />


#### tRCP API
```
serverClient.getMessages();
serverClient.submitMessage();
serverClient.getMessagesByEmail({ email });
```

## To Run Locally

### Database

1. Create table

```
CREATE TABLE public.messages (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  email text,
  firstName text,
  lastName text,
  message text,
  CONSTRAINT messages_pkey PRIMARY KEY (id)
);
```

2. Add .env.local vars

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

### Turborepo

Run turbo

```
pnpm i
pnpm run dev
```

