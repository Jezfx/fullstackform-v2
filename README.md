# Task 1) Full Stack Contact Form ✨

### 🎥 [Video walk through ](https://www.loom.com/share/93591ed6526948af9088d98c8938b92c?sid=4e450983-7a63-48fb-91c9-56b4813b7785)

<img width="1512" alt="Screenshot 2025-07-07 at 15 53 42" src="https://github.com/user-attachments/assets/b9fd188f-2e29-45f5-8f6c-464121b904bb" />

## Links

- Contact: https://fullstackform-web-git-main-jezs-projects-26358988.vercel.app/contact
- Messages: https://fullstackform-web-git-main-jezs-projects-26358988.vercel.app/messages
- Storybook: https://fullstackform-docs.vercel.app/

## Tech Stack

- [Turborepo](https://turbo.build/)
- [Next.js](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Storybook](https://storybook.js.org/)
- [Zod](https://zod.dev/)
- [Supabase](https://supabase.com/)

## Monorepo Structure

```
└── monorepo (turborepo)/
    ├── apps/
    │   ├── docs (storybook)
    │   └── web (nextjs)/
    │       ├── contact
    │       └── messages
    └── packages/
        └── ui (chakra-ui)
```

## Architecture

<img width="825" alt="Screenshot 2025-07-08 at 06 05 14" src="https://github.com/user-attachments/assets/cd0388a9-55b0-4966-8f2e-eec507037524" />

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

### Methodologies

- UI is separate from the apps
- Dumb components to make them easier to test and document
- Keep utils, types, stories close to where they're used
- Apps cant includes files from eachother
- 

### What I used AI for

- Util functions (page-contact.utils.ts)

### Outstanding

If I had more time

- Global: Testing (mainly unit and integration with jest and cypress)
- Glocal: Error handling (boundries, rather than  individual files)
- Form: scroll up on state.error like you do storyblok.com/fs/demo
- Form: remove the error message when you start typing into an error input
- Form: maybe do some zod validation on the client side too
- Messages Page: style and use Suspense to pull in db entries.

# Task 2) Brochure Stack

## Assumptions

- marketing site, mostly static content + some forms (contact, newsletter, maybe light CMS).
- **Small team or solo dev**, potentially designers involved.
- **Non-technical stakeholders**, so maintainability and preview ability matter.
- Needs to be fast, SEO-friendly, accessible, and easy to update.

## Architecture
<img width="1033" alt="Screenshot 2025-07-07 at 19 45 54" src="https://github.com/user-attachments/assets/89ceb706-8e89-4f5b-81a6-d7bd1931393d" />


## Frontend

Frontend priorities are centered around speed ([Next.js](https://nextjs.org/), [Vercel](https://vercel.com/)), both in terms of performance and how quickly ideas and content can be published to the site. 

A key to this is keeping the designs (Figma) closely aligned with the component library ([Chakra UI](https://chakra-ui.com/)) and maintaining good documentation ([Storybook](https://storybook.js.org/)). The goal is to remove friction and resources needed to make changes while ensuring everyone references the same source of truth.

[DebugBear](https://www.debugbear.com/) is the best tool I’ve found to measure and track performance over-time, unlike other performance dashboards like in Sentry and Vercel that give you collated web vitals over a date range Debugbear gives you full vitals per-day over the course of time.

## Headless Content

I'd like non-technical people to be comfortable making changes, so a CMS with a good, easy-to-use editor is key ([Storyblok](https://www.storyblok.com/) 🙃🎉). For other content such as heavy media, I'd actually prioritise the developer experience a bit more ([Cloudinary](https://cloudinary.com/) and [Mux](https://www.mux.com/)).


## Monitoring And Tracking

A requirement for monitoring is that it’s easy to manage. I’ve had a good experience with [Rudderstack](https://www.rudderstack.com/). It has a many-to-one relationship to many analytics and reporting platforms ([Sentry](https://sentry.io/)) which means you’re just adding tracking once making it easy to manage and also good for performance.

Testing is critical for marketing pages, a solution that also offers server side testing is ideal. [PostHog](https://posthog.com/) does both well and also has a great developer experience.

[Amplitude](https://amplitude.com/) is great for analysing funnels and tracking very detailed nuanced behaviors and conversion using custom events.

## Marketing

Tracking is imperative to defining success for marketing pages. Even metrics that aren't directly related to conversion such as bounce rate, engagement, and funnel drop-offs are important to measure. I prefer using [Google Tag Manager (GTM)](https://tagmanager.google.com/) to integrate tracking services ([Google Analytics 4 (GA4)](https://marketingplatform.google.com/about/analytics/), [Meta Pixel (formerly Facebook Pixel)](https://www.facebook.com/business/tools/meta-pixel)) into the web app. This creates a reliable source of truth that marketers can also manage. 

The email service can sometimes double up as a customer CRM, and [Klaviyo](https://www.klaviyo.com/) does a good job of that with great site integrations and testing. [Dixa](https://www.dixa.com/) helps handle quick customer inquiries if there's a team to answer them and [Fullstory](https://www.fullstory.com/) to watch and monitor user behaviors and patterns.


