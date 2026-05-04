KeenKeeper

KeenKeeper is a simple friendship management app designed to help you stay connected with the people who matter. It lets you view your friends, track check-ins, and see your interaction habits over time.

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



##Key Features

Friend Dashboard
Browse realistic friend profiles in a responsive 4-column card layout. Each card includes Figma-style status badges and helpful summary information.

Friend Details
Open any friend profile to view their contact goals, next due date, bio, tags, and quick action options.

Quick Check-Ins
Log a Call, Text, or Video interaction directly from a friend’s detail page. A toast message confirms when the check-in has been saved.

Persistent Timeline
All logged interactions are saved in browser localStorage, so your timeline remains available even after refreshing the page. You can also filter interactions by type.

Friendship Analytics
A Recharts donut chart gives you a clear visual summary of how many Calls, Texts, and Video interactions you’ve logged.

Responsive Layout
The app is fully responsive and works smoothly across mobile, tablet, and desktop screens.

Provided Figma Assets
The UI uses the provided logo, social icons, quick-check icons, and friend profile images from the asset package.

##Routes
Route	Description
/	Home dashboard with banner, summary cards, and friend cards
/friend/:id	Friend details and quick check-in page
/timeline	Interaction timeline with filters
/stats	Friendship analytics chart
*	Custom 404 page
Installation
git clone https://github.com/your-username/keenkeeper.git
cd keenkeeper
npm install
Run Locally
npm run dev

Then open the local Vite URL shown in your terminal.

Build
npm run build
Preview Production Build
npm run preview
Data Source

Friend profiles are stored in:

public/friends.json

Timeline and check-in data are stored in browser localStorage using the key:

keenkeeper-timeline

Provided image assets are stored in:

public/assets
public/assets/friends
Deployment Notes

The project includes route refresh support for single-page app deployment:

Netlify: public/_redirects
Vercel: vercel.json
