# 🧶 Pattern Store & Editor for Independent Designers 🧶

**Problem:** Designers want to sell patterns without relying on Etsy or Ravelry.

**Solution:** A platform to write, sell, and share patterns with rich text editor, image support, and mobile optimization.

<hr>

**Core Features:**
- Pattern editor with markdown + rich image embeds
- Personal storefront builder (like Gumroad for patterns)
- Affiliate system to reward referrers
- Customer download dashboard
- Analytics dashboard for Sellers
- Public storefront page 


## Tech Stack.

**Front-end:**

- Next.JS (React)
- Vite
- React Context + SWR
- TailwindCSS
- TipTap
- NextAuth.JS

**Back-end:**

- Next.JS
- NextAuth.JS
- Stripe
- AWS ***or*** Cloudinary 
- Resend
- Upstash

**Database:**

- PostgreSQL 

**Example Data Models:**

- User – auth, creator profile, bio
- Pattern – title, markdown body, price, file(s)
- Order – buyer info, Stripe transaction, download status
- Customer – for creators to see their own buyers
- DownloadLink – secure, expiring link for PDF files