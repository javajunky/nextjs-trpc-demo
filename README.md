# Next.js App Router Using tRPC Demo
This is a demo of using tRPC with Next.js App Router. You can read my detailed [blog post](https://wilchow.com/blog/using-trpc-with-nextjs-app-router) for more information.

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
```
.
├── src
│ ├── layout.tsx # <-- add Provider here
│ ├── page.tsx # <-- make API call here
│ ├── app
│ │ ├── api
│ │ │ └── trpc
│ │ │ └── [trpc]
│ │ │ └── route.ts # <-- tRPC HTTP handler
│ │ └── [..]
│ ├── server
│ │ ├── index.ts # <-- main app router
│ │ └── trpc.ts # <-- procedure helpers
│ └── utils
│   ├── Provider.ts # <-- create app context
│   └── trpc.ts # <-- your typesafe tRPC hooks
└── [..]
```

## Resources
- [tRPC](https://trpc.io/)
