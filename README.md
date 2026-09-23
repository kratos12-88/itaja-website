# Itaja Marketing Website

A publish-ready marketing website for **Itaja**, built with Next.js, TypeScript and plain CSS. This is intentionally **not** the Itaja web app. It explains the product, shows the buyer/seller value, presents pricing, captures early-access leads and includes basic legal/SEO pages.

## Included

- Responsive marketing homepage
- Product feature page
- Pricing page
- About/contact page
- FAQ page
- Privacy and Terms pages
- Mobile storefront mockup
- Early-access form
- Contact form
- API routes for both forms
- Optional Supabase persistence
- SEO metadata, robots and sitemap
- Itaja brand colours and original supplied logo asset
- No UI framework dependency

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Enable form persistence with Supabase

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor.
3. Copy `.env.example` to `.env.local`.
4. Set:

```env
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY
NEXT_PUBLIC_SITE_URL=https://itaja.ng
```

Keep the service role key **server-side only**. Never prefix it with `NEXT_PUBLIC_`.

Without Supabase credentials, both forms still respond successfully in demo mode and log submissions to the server console. This keeps local setup friction low without pretending that demo storage is production persistence.

## Deploy

The easiest deployment target is Vercel:

1. Push this folder to GitHub.
2. Import the repository in Vercel.
3. Add the environment variables above.
4. Deploy.
5. Point your domain to the deployment.

Any Node-compatible host that supports Next.js route handlers will also work.

## Brand

- Cream: `#F1F0CC`
- Oxblood: `#3F0D12`
- Positioning: simple storefront for small Nigerian Instagram/TikTok fashion and thrift vendors.

## Notes

The copy and pricing in this build are based on the current Itaja product brief. Legal pages are starter templates and should be reviewed by qualified counsel before launch.

## V2 additions

This package includes the V2 marketing-site interaction pass:

- scroll-triggered reveal transitions across the homepage
- a sticky, scroll-synchronised "Inside the app" feature showcase
- live transitions between dashboard, products, storefront, orders, billing and done-for-you UI previews
- subtle hero mockup motion
- reduced-motion accessibility support
- no additional animation dependency required


## V6 polish
Phone mockups reduced, spacing expanded, navigation refined, typography hierarchy tightened, live demo simplified, and micro-interactions/palette polished.
