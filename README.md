# KeenKeeper

KeenKeeper is a clean, Figma-matched friendship tracker built with React and Vite. It helps you keep meaningful relationships close with friend cards, friend details, quick check-ins, a persistent interaction timeline, and simple friendship analytics.

## Live Links

- Live site: `https://your-live-link-here.netlify.app`
- GitHub repository: `https://github.com/your-username/keenkeeper`

## Technologies Used

- React.js with Vite
- React Router
- Tailwind CSS
- DaisyUI
- React Context API
- localStorage
- React Toastify
- React Icons
- Recharts

## Key Features

1. **Friend Dashboard** — View realistic friend profiles in a responsive 4-column card grid with Figma-style status badges and summary cards.
2. **Friend Details** — Open a profile to see contact goals, next due date, bio, tags, and quick action buttons.
3. **Quick Check-Ins** — Log Call, Text, or Video interactions from the details page with toast feedback.
4. **Persistent Timeline** — Logged interactions are saved to localStorage and can be filtered by interaction type.
5. **Friendship Analytics** — A Recharts donut chart summarizes Call, Text, and Video interaction counts.
6. **Responsive Layout** — The app works on mobile, tablet, and desktop screens.
7. **Provided Figma Assets** — Logo, social icons, quick-check icons, and profile images from the asset package are used in the UI.

## Routes

| Route | Description |
| --- | --- |
| `/` | Home dashboard with banner, summary cards, and friend cards |
| `/friend/:id` | Friend details and quick check-in page |
| `/timeline` | Interaction timeline with filters |
| `/stats` | Friendship analytics chart |
| `*` | Custom 404 page |

## Installation

```bash
git clone https://github.com/your-username/keenkeeper.git
cd keenkeeper
npm install
```

## Run Locally

```bash
npm run dev
```

Then open the local Vite URL shown in your terminal.

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Data Source

Friend profiles are stored in:

```text
public/friends.json
```

Timeline/check-in data is stored in browser localStorage with the key:

```text
keenkeeper-timeline
```

Provided image assets are stored in:

```text
public/assets
public/assets/friends
```

## Deployment Notes

The project includes route refresh support for single-page app deployment:

- Netlify: `public/_redirects`
- Vercel: `vercel.json`

## Screenshots

Add screenshots here after deployment:

```text
/public/screenshots/home.png
/public/screenshots/timeline.png
/public/screenshots/stats.png
```
