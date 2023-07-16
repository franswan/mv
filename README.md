# mv

[ ] Build out all component using Tailwind CSS.

- Daisy UI + Tailwind UI Components are suported
- Headless UI is a third options to many any other reqs

[] Supbase connections via components whose functions are suggestied in the Figma file.

---

Supbasase support available in this Repo. See Login components and packages.json - supabase/auth-helpers-nextjs is being used in favor of next.auth.

The environmental variables required can be learned from the Supabase \_ Next.js docs. These should be set accordingly on both Vercel and in your '.env.local', for example.

Domain can be pointed to a Vercel hosted Next.js application.

- https://kswanie21.medium.com/how-to-set-up-godaddy-domain-with-vercel-f42430ed4f6

Deploy the development branch of this repo to Vercel for public viewing. Rename branches accordingliy: design, dev-preview, productions, for example. All of which can be deoplyed seperately via GitHub to Vercel.

Local set-up and dev:

`npm install`

`npm run dev`

Resources:

Supabase + NExt.js Boilerplate:
https://github.com/vercel/next.js/tree/canary/examples/with-supabase

Tailwind CSS

- https://v2.tailwindcss.com/docs
- https://tailwindui.com/
- https://daisyui.com/
- https://headlessui.com/
- `npx create-next-app -e with-supabase` (Starting boilerplate for this porject)
