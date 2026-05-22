# Women in Tech Website

A modern, easy-to-update website for women in tech built with Next.js 15 and Sanity CMS.

## 🚀 Quick Start

### 1. Set Up Sanity CMS

1. Go to [sanity.io](https://sanity.io) and create a free account
2. Create a new project called "Women in Tech"
3. Copy your **Project ID** from the project settings
4. Install the Sanity CLI and initialize:

```bash
npm install -g @sanity/cli
cd sanity
sanity init --env .env.local
```

### 2. Configure Environment

Create a `.env.local` file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Deploy Sanity Studio

```bash
cd sanity
sanity deploy
```

This gives you a CMS URL where you can manage all content.

### 4. Run the Website

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📝 Updating Content

Once Sanity is set up, you can update content **without touching code**:

1. Go to your Sanity Studio (e.g., `https://your-project-id.sanity.studio`)
2. Log in with your Sanity account
3. Click on any content type:
   - **Hero Section** - Update main headline and CTA
   - **Featured Stories** - Add/edit inspiring stories
   - **Events** - Add upcoming events
   - **Resources** - Curate helpful resources
   - **Testimonials** - Add community voices
4. Click **Publish** to make changes live instantly

## 🎨 Features

- **Hero Section** - Eye-catching homepage header
- **Featured Stories** - Blog-style stories with author info
- **Events Calendar** - Upcoming events with registration links
- **Resource Library** - Categorized resources (mentorship, jobs, learning, etc.)
- **Testimonials** - Community voices and quotes
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

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
5. Deploy!

### Environment Variables for Production

Make sure to add these in Vercel's project settings:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

## 📁 Project Structure

```
women-in-tech/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout
│   └── stories/[slug]/       # Story detail pages
├── components/
│   ├── Hero.tsx
│   ├── FeaturedStories.tsx
│   ├── Events.tsx
│   ├── Resources.tsx
│   └── Testimonials.tsx
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
- CTA button text and link
- Background image

### Featured Stories
- Title, excerpt, full content
- Author name and image
- Featured image
- Publish date
- Auto-generated slug

### Events
- Title and description
- Date/time
- Location (or virtual flag)
- Registration link
- Event image

### Resources
- Title and description
- URL
- Category (mentorship, learning, jobs, community, funding)
- Featured flag

### Testimonials
- Quote
- Author name, role, company
- Author image

## 💡 Tips

- **Images**: Use the hotspot feature in Sanity to focus on important parts
- **Scheduling**: Set future publish dates for stories/events
- **Categories**: Use resource categories to organize content
- **SEO**: Update metadata in `app/layout.tsx` for your specific needs

## 🤝 Contributing

Want to add features? Common additions:
- Newsletter signup
- Member directory
- Job board
- Mentorship matching
- Discussion forum

## 📄 License

MIT - Feel free to use this for your community!

---

Built with ❤️ for women in tech everywhere.
