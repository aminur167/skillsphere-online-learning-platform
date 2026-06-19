# SkillSphere - Online Learning Platform

SkillSphere is a modern online learning platform built with Next.js, React, Tailwind CSS, and DaisyUI. It helps learners explore skill-based courses, view protected course details, register or login, and manage their profile from a clean responsive interface.

## Live Site

Deployment link will be added after hosting on Vercel.

## Repository

https://github.com/aminur167/skillsphere-online-learning-platform

## Purpose

The purpose of SkillSphere is to provide a polished course discovery experience for learners who want to build career-ready skills in web development, design, marketing, data analytics, business, and cybersecurity.

## Key Features

- Responsive layout for mobile, tablet, and desktop screens.
- Persistent navbar and footer across all pages.
- Home page with hero slider, popular courses, learning tips, top instructors, and trending courses.
- All Courses page with searchable course cards.
- Course Details page with protected route behavior.
- Redirects unauthenticated users to login and returns them to the requested page after login.
- Login and registration forms with toast notifications.
- Google login button for social authentication flow.
- My Profile page for logged-in user information.
- Update Information page for changing name and profile image.
- Profile image upload from local device with instant preview.
- Custom loading UI and not-found page.
- Reload-safe App Router structure.
- BetterAuth API scaffold with environment-variable configuration.

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

## NPM Packages Used

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

Create a `.env.local` file in the project root and add the following values:

```env
BETTER_AUTH_SECRET="replace-with-a-long-random-secret"
BETTER_AUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

For Vercel deployment, add the same variables in the Vercel project settings and update `BETTER_AUTH_URL` plus `NEXT_PUBLIC_APP_URL` with your deployed domain.

## Folder Structure

```text
src/
  app/
  components/
  lib/
```

## Routes

- `/` - Home
- `/courses` - All courses with search
- `/courses/[id]` - Protected course details
- `/login` - Login
- `/register` - Register
- `/my-profile` - User profile
- `/my-profile/update` - Update user information
- `/terms` - Terms and conditions
- `/privacy` - Privacy policy

## Run Locally

```bash
npm install
npm run dev
```

Open the app:

```bash
http://localhost:3000
```

## Production Build

```bash
npm run build
npm start
```

## Deployment

Recommended deployment platform: Vercel.

After deploying, replace the Live Site section with your actual Vercel URL.
