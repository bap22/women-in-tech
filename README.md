# Kristi S | Women in Construction & Leadership

A professional speaker website for Kristi, focused on women in construction, leadership, community, and empowerment. Built with Next.js 15 and Sanity CMS for easy content updates.

## 🚀 Quick Start

### 1. Set Up Sanity CMS

1. Go to [sanity.io](https://sanity.io) and create a free account
2. Create a new project called "Kristy Speaker"
3. Copy your **Project ID** from the project settings
4. Update `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

5. Initialize Sanity:

```bash
npm install -g @sanity/cli
npx sanity init --env .env.local
```

6. Deploy Sanity Studio:

```bash
npx sanity deploy
```

### 2. Run the Website

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📝 Updating Content

Once Sanity is set up, you can update content **without touching code**:

1. Go to your Sanity Studio (e.g., `https://your-project-id.sanity.studio`)
2. Log in with your Sanity account
3. Manage content types:
   - **Hero Section** - Main headline, subtitle, CTAs
   - **Speaking Topics** - Kristy's talk topics with duration and audience
   - **Events** - Upcoming speaking engagements
   - **Testimonials** - Client quotes with event context
4. Click **Publish** to make changes live instantly

## 🎨 Features

- **Hero Section** - Powerful headline with dual CTAs (Book + Learn More)
- **About Section** - Kristy's bio with key stats
- **Speaking Topics** - Showcase available talks with icons and audience targeting
- **Events Calendar** - Upcoming speaking engagements
- **Testimonials** - Client quotes with event context
- **Booking Form** - Professional inquiry form for event organizers
- **Responsive Design** - Works beautifully on all devices
- **Easy CMS** - Update everything via Sanity Studio

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **CMS**: Sanity.io (headless CMS)
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 📦 Deployment

### Deploy to Vercel

1. Push code to GitHub (already done!)
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import `bap22/women-in-tech`
4. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
5. Deploy!

### Update Contact Email

Edit the booking form and footer in:
- `components/Booking.tsx` - Change `kristy@example.com`
- `app/page.tsx` - Update footer email

## 📁 Project Structure

```
women-in-tech/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout
│   └── stories/[slug]/       # (Optional) Blog posts
├── components/
│   ├── Hero.tsx              # Hero section with dual CTAs
│   ├── About.tsx             # Kristy's bio
│   ├── SpeakerTopics.tsx     # Speaking topics
│   ├── Events.tsx            # Upcoming events
│   ├── Testimonials.tsx      # Client testimonials
│   └── Booking.tsx           # Booking inquiry form
├── sanity/
│   ├── schema/               # Content type definitions
│   └── lib/                  # Sanity client utilities
├── sanity.config.ts          # Sanity Studio config
└── .env.local                # Environment variables
```

## 🎯 Content Types

### Hero Section
- Main headline
- Subtitle
- Primary CTA (default: "Book Kristy to Speak")
- Secondary CTA (default: "Learn More")
- Background image

### Speaking Topics
- Topic title
- Description
- Duration (30min, 45min, 1hr, half-day, full-day)
- Target audience (Construction, Women in Business, Leadership, General)
- Icon emoji

### Events
- Event title and description
- Date/time
- Location (or virtual flag)
- Registration link
- Event image

### Testimonials
- Quote
- Author name, role, company
- Event context (e.g., "National Construction Conference 2025")
- Author image

## 💡 Tips

- **Color Scheme**: Orange/amber theme reflects construction and energy
- **Images**: Use construction sites, speaking events, professional headshots
- **Speaking Topics**: Add 5-7 core topics that showcase Kristy's expertise
- **Testimonials**: Prioritize quotes from well-known companies or events
- **SEO**: Update metadata in `app/layout.tsx` with Kristy's actual location/specialty

## 🎤 Suggested Speaking Topics

Add these in Sanity Studio to get started:

1. **Breaking Barriers: Women Leading in Construction** 🏗️
   - Duration: 1 hour
   - Audience: Construction Professionals

2. **From Hard Hat to Corner Office** 💼
   - Duration: 45 minutes
   - Audience: Leadership Teams

3. **Building Confidence on the Job Site** 💪
   - Duration: 1 hour
   - Audience: Women in Business

4. **Mentorship Matters: Lifting Others as We Rise** 🤝
   - Duration: 30 minutes
   - Audience: General Audience

5. **Safety First, Leadership Always** ⚠️
   - Duration: Half day workshop
   - Audience: Construction Professionals

## 📄 License

MIT - Feel free to use this for your speaker website!

---

Built with ❤️ for Kristy | Empowering women in construction and leadership.
