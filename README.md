# SkillSphere - Online Learning Platform

SkillSphere is a modern online learning platform where learners can explore skill-based courses, view detailed lesson plans, and manage their learning profile. The project focuses on a clean course discovery experience with protected routes, responsive layouts, and a smooth authentication flow.

## Live URL

`https://skillsphere-online-learning-platform.vercel.app`

## Repository

`https://github.com/aminur167/skillsphere-online-learning-platform`

## Features

- Responsive navbar with Home, Courses, and My Profile routes.
- Authentication-aware navbar with avatar, logout, login, and register actions.
- Home page with full-screen hero slider, popular courses, learning tips, top instructors, and trending courses.
- All Courses page with 6 skill-based courses and title search.
- Protected Course Details page with course image, instructor, duration, rating, level, students, lessons, and curriculum.
- Login and registration forms with toast notifications.
- Google login button for social authentication flow.
- My Profile page with user information.
- Update Information page for changing user name and image URL.
- Persistent footer with contact details, social links, terms, and privacy pages.
- Loader states, custom not-found page, and reload-safe App Router structure.
- Environment-variable based BetterAuth configuration.

## Tech Stack

- Next.js App Router
- React.js
- JavaScript
- Tailwind CSS
- DaisyUI
- BetterAuth
- Motion
- Swiper JS
- React Hot Toast

## NPM Packages

- `next`
- `react`
- `react-dom`
- `tailwindcss`
- `daisyui`
- `better-auth`
- `motion`
- `swiper`
- `react-hot-toast`
- `eslint`

## Environment Variables

Create a `.env.local` file in the project root:

```env
BETTER_AUTH_SECRET="replace-with-a-long-random-secret"
BETTER_AUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

The app also includes a browser-based demo auth flow, so the main learner journey works locally without a database setup.

## Run Locally

```bash
npm install
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Production Build

```bash
npm run build
npm start
```

## Route Overview

- `/` - Home
- `/courses` - All courses with search
- `/courses/[id]` - Protected course details
- `/login` - Login
- `/register` - Register
- `/my-profile` - Protected profile
- `/my-profile/update` - Protected profile update
- `/terms` - Terms and conditions
- `/privacy` - Privacy policy
