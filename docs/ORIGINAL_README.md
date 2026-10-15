# Tsvakiridzo Engineering & IT Consultants (Private) Limited

Corporate website for the company named in the objectives document. The application is a Next.js site intended for local development and later deployment on Vercel.

## Run it locally

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To check the production build:

```bash
npm run build
npm start
```

## Contact details used on the site

These are set in `src/content/company.ts`:

- Address: 341 Glenora A, Harare, Zimbabwe
- Email: tsvakiridzo@gmail.com
- Telephone: +263 78 785 4279

The longer development brief also mentioned `chakiridzo@gmail.com` and said not to invent a telephone number. The email and telephone above are the contact details supplied with the instruction to build the site. Change `src/content/company.ts` if a different official address is required. That file is the only place page components should take them from.

No social media accounts are listed. Add a confirmed profile to the `social` array in the same file when one exists. Do not add an account that has not been confirmed.

## Where to edit content

Keep wording in the content files. Pages read those files, so a copy change should not require a layout change.

| What | File |
| --- | --- |
| Name, address, email, phone, social links | `src/content/company.ts` |
| Profile, vision, mission, values, approach | `src/content/company.ts` |
| Services | `src/content/services.ts` |
| Industries | `src/content/industries.ts` |
| Projects | `src/content/projects.ts` |
| Articles | `src/content/insights.ts` |
| Main menu | `src/content/navigation.ts` |
| Logo | `public/brand/logo.png` and `LOGO.jpg` (original) |
| Favicon | `src/app/icon.png` |
| Photographs | `public/images/` |

The vision, mission and values are working statements written from the objectives. They are labelled as such on the About page. Replace them in `company.ts` when the company adopts final wording.

### Adding a project

In `src/content/projects.ts`, add an object to the `projects` array and set `published` to `true`. Use a real description. Leave `placeholder` as `false` for real work. If `placeholder` is `true`, the site labels the entry as not completed company work.

Put photographs in `public/images/projects/` and set `image` to that path, for example `/images/projects/records.jpg`.

The homepage, the projects list and `/projects/[slug]` all read this array. An unpublished entry stays off the site.

### Adding an article

In `src/content/insights.ts`, add an object with `published: true`. `body` is a list of paragraphs. The insights list and `/insights/[slug]` update from that file.

### Adding or changing a service

Edit `src/content/services.ts`. A new `slug` creates `/services/[slug]` and a sitemap entry. Use the same `slug` in an industry’s `relevantServices` list if that sector should link to it.

Enquiry links use the slug, for example `/contact?service=software-and-platforms`. The contact form selects the matching service name.

## Enquiry form

The form posts to `POST /api/enquiry`.

- Required fields are checked on the server, including email format.
- A hidden field is used as a simple spam trap.
- The same connection is limited to 8 submissions an hour. That limit is held in memory, so it resets when the server restarts and is not shared across multiple Vercel instances.
- Submissions are not printed in full in the server log.

Locally, a successful enquiry is saved to `data/enquiries.json`. That file is git-ignored.

Email is sent only when SMTP settings are present in `.env.local` (see `.env.example`). For the company Gmail account, use an [App Password](https://support.google.com/accounts/answer/185833), not the normal mailbox password:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=tsvakiridzo@gmail.com
SMTP_PASS=the-app-password
SMTP_FROM=tsvakiridzo@gmail.com
ENQUIRY_TO_EMAIL=tsvakiridzo@gmail.com
```

On Vercel, the enquiry is accepted only when email is actually sent. The host does not keep `data/enquiries.json`. Until SMTP is configured, the form tells the visitor to email the company directly, and the contact page still shows the address, email and telephone.

## Photographs

Photographs in `public/images/` are illustrative stock images. Captions and alt text do not present them as company premises, staff or completed projects. Replace them when the company has its own photography. The logo is the file supplied in this folder.

## Deploying to Vercel

Do this when you are ready to publish. It creates a Vercel URL. It does not buy a domain.

1. Create a Vercel account and install the Vercel CLI, or import the project from a Git repository in the Vercel dashboard.
2. Set the project root to this folder (the folder that contains `package.json`).
3. Framework preset: Next.js. Build command: `npm run build`. Output: the Next.js default.
4. Add environment variables from `.env.example`.
   - `NEXT_PUBLIC_SITE_URL` should be the Vercel URL, including `https://`.
   - Add the SMTP variables if the contact form should send email.
5. Deploy, then open the Vercel URL and submit a test enquiry.
6. After a custom domain is purchased, add it in the Vercel project under Domains and change `NEXT_PUBLIC_SITE_URL` to that domain. No application code has to change for the domain itself.

The site builds without a custom domain and without SMTP. Production enquiries need the SMTP variables before the form can deliver mail.

## What this site does not claim

The objectives and the formation notes do not provide completed projects, client names, years of operation, licences, certifications, partnerships or staff biographies. Those things are not invented on the site. Engineering and construction pages state that the work depends on the applicable laws, licences and professional requirements.
