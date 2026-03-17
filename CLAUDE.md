# Steward Website Design Brief

> Drop this into `CLAUDE.md` in the new Next.js repo to give full context.

## What is Steward?

Steward is a credit card rewards optimization app for iOS. It monitors your location in the background, detects when you arrive at a merchant, and instantly recommends the best credit card to maximize your rewards — factoring in category bonuses, merchant-specific offers, rotating quarterly bonuses, loyalty program tiers, and personal goals.

**Tagline ideas (from app UI copy):**
- "Maximize your credit card rewards wherever you shop"
- "The right card, at the right time"
- "Never leave rewards on the table"

## Target Audience

- Credit card enthusiasts who hold 3-10+ cards
- Points/miles collectors optimizing for travel or cash back
- Anyone who forgets which card to use at which store

## Key Features to Highlight

1. **Real-Time Card Recommendations** — Arrive at a store, get a notification telling you which card to pull out and why (e.g., "Use your Chase Sapphire — 3x points on dining")
2. **Multi-Factor Scoring** — Considers base rates, category bonuses, merchant-specific offers, rotating quarterly bonuses, loyalty tier multipliers, and personal goals
3. **Stacked Benefits** — Shows when offers + loyalty perks combine (e.g., "Amex offer: $10 back + Marriott Gold: 25% bonus points")
4. **Rewards Goals** — Track progress toward earning 50k miles, reaching hotel Gold status, or saving for a trip
5. **Loyalty Tier Tracking** — Knows your Marriott Platinum, Delta Gold, Hilton Diamond status and factors tier perks into recommendations
6. **Merchant Discovery** — Explore nearby merchants on a map and see which card is best before you walk in
7. **100+ Credit Cards** — Supports cards from Chase, Amex, Citi, Capital One, Bank of America, Discover, Wells Fargo, US Bank
8. **Works Offline** — Local recommendation engine as fallback, bundled card database
9. **Lock Screen Widget** — See your current recommendation without opening the app
10. **Trip Planning** — Plan trips with hotel/flight/car rental suggestions optimized for your card portfolio

## Brand Identity

### Color Palette

| Color | Hex (approximate) | Usage |
|-------|-------------------|-------|
| **Primary Blue** | `#007AFF` (iOS system blue) | Primary CTAs, links, brand accent |
| **Dining Orange** | `#FF9500` | Dining category, loyalty tips |
| **Grocery Green** | `#34C759` | Grocery category, cash back, offers |
| **Gas Red** | `#FF3B30` | Gas category, merchant deals |
| **Travel Purple** | `#AF52DE` | Travel category, points goals |
| **Hotel/Loyalty Orange** | `#FF9500` | Loyalty status goals |
| **Airline Cyan** | `#32D74B` → `#5AC8FA` | Trip goals, airline programs |
| **Teal** | `#5AC8FA` | Goal tips, wallet badges |
| **Dark backgrounds** | `#F2F2F7` (iOS systemGray6) | Card backgrounds, sections |
| **Text primary** | `#000000` | Headlines, body |
| **Text secondary** | `#8E8E93` (iOS systemGray) | Captions, metadata |

### Typography Direction

The app uses iOS system fonts (SF Pro). For the website:
- **Headlines:** Bold, clean sans-serif (Inter, SF Pro Display, or similar)
- **Body:** Regular weight, 17px equivalent base size
- **Captions/metadata:** Lighter weight, smaller size
- **Numbers/stats:** Bold or semibold for emphasis

### Icon Style

The app uses Apple SF Symbols throughout. For the website, use:
- **Lucide React** or **Heroicons** (closest web equivalents to SF Symbols)
- Filled variants for navigation, outlined for secondary elements
- Consistent sizing: 20-24px for inline, 40-60px for hero/feature sections

Key icons to have:
- Location pin / circle
- Credit card
- Star / crown (loyalty)
- Target (goals)
- Map pin
- Tag (offers/deals)
- Dollar sign circle
- Airplane (travel/trips)
- Fork & knife (dining)
- Shopping cart (grocery)
- Fuel pump (gas)
- Checkmark circle (completion)

### Design Language

- **Corner radius:** 10-12px for cards/containers, 4-6px for badges/tags
- **Shadows:** Subtle (`0 2px 4px rgba(0,0,0,0.1)`)
- **Backgrounds:** Light gray (#F2F2F7) sections alternating with white
- **Color-coded badges:** Category colors at 15% opacity as background with full-color text
- **Progress indicators:** Circular for detail views, linear bars for list items
- **Glassmorphism:** Subtle blur/material effects for floating elements (matches iOS .ultraThinMaterial)

## Website Structure (Suggested)

### Hero Section
- Bold headline: value proposition
- Subtitle: 1-2 sentences explaining what Steward does
- App Store download button (or waitlist email capture)
- Hero image: iPhone mockup showing the recommendation screen (blue location icon, card name, merchant name, reward breakdown)

### Features Section
- 3-4 key features with icons, titles, and short descriptions
- Each feature could have a small mockup or illustration
- Use category colors as accents per feature

### How It Works
- 3 steps: "Walk into a store" → "Get a notification" → "Use the best card"
- Simple icons or illustrations for each step

### Card Coverage
- "Supports 100+ credit cards from every major issuer"
- Issuer logos: Chase, Amex, Citi, Capital One, BofA, Discover, Wells Fargo, US Bank

### Goals & Tracking
- Show the goals feature: "Set rewards targets and track your progress"
- Visual: progress circles, goal types (points, cash back, loyalty status, trips)

### Loyalty Integration
- "Knows your loyalty status" — Marriott, Hilton, Delta, United, etc.
- Tier-aware recommendations

### Social Proof / Trust
- "X cards supported", "Y reward categories tracked", "Z loyalty programs"
- Testimonials if available

### Footer
- App Store link
- Contact/support email
- Social media links
- Legal (privacy policy, terms)

## Tone & Voice

- **Confident but approachable** — not financial jargon, not overly casual
- **Action-oriented** — "Maximize", "Never miss", "Get the most"
- **Specific** — "3x points on dining" not "earn more rewards"
- **Clean and minimal** — the app is clean, the site should be too

## Technical Notes for Next.js Implementation

- Use **Tailwind CSS** for styling (matches the utility-first approach)
- **Framer Motion** for scroll animations and hero interactions
- **next/image** for optimized mockup images
- Static site (SSG) — no backend needed for a landing page
- Deploy on **Vercel**
- Consider **dark mode support** (the app supports iOS dark mode)

## What NOT to Do

- Don't make it look like a fintech/banking site (too corporate)
- Don't use stock photos of people holding credit cards
- Don't clutter with too many features — focus on the "magic moment" (arriving at a store and knowing exactly which card to use)
- Don't use gradients heavily — the app uses flat colors with subtle opacity variations
- Don't add a pricing page (the app is free / pricing TBD)
