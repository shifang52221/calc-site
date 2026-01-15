This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Analytics (optional)

To track daily visits without building an admin backend, you can use Plausible Analytics (cookie-less).

- Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=homedecorcalc.com`
- Optional (self-hosted): set `NEXT_PUBLIC_PLAUSIBLE_SRC=https://plausible.yourdomain.com/js/script.js`

## Site URL (required)

Set `NEXT_PUBLIC_SITE_URL=https://homedecorcalc.com` so `sitemap.xml` and canonical URLs use the correct domain.

## Contact (recommended)

Set `NEXT_PUBLIC_CONTACT_EMAIL=support@homedecorcalc.com` to show a domain-based email on the contact page.

## Ads (optional)

AdSense is wired up with manual ad slots (to protect UX/CLS). It is disabled unless you set an AdSense client id.

- Set `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxxxx`
- Set `ADSENSE_PUBLISHER_ID=pub-xxxxxxxxxxxxxxxx` so `/ads.txt` outputs your record
- Provide slot ids as needed:
  - Home: `NEXT_PUBLIC_ADSENSE_SLOT_HOME_TOP=1234567890`
  - Calculators: `NEXT_PUBLIC_ADSENSE_SLOT_CALC_AFTER_RESULT=1234567890`
  - Guides: `NEXT_PUBLIC_ADSENSE_SLOT_GUIDE_AFTER_INTRO=1234567890`

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
trigger vercel deploy
