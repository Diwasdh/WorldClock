git clone https://github.com/Diwasdh/WorldClock.git

# World Clock Application

A modern web application built with **Next.js** (App Router) for displaying the current time in any time zone worldwide.

## Features

- 🌍 Select and view the current time in any IANA time zone
- 🕐 Real-time clock with UTC offset, city, and country info
- 🎨 Modern, responsive UI with custom fonts (Monoton, Sansita)
- ⚡ Fast performance with Next.js App Router
- 📱 Mobile-friendly design

## Prerequisites

- Node.js 16+
- Bun, npm, or yarn package manager

## Installation

```bash
# Clone the repository
git clone https://github.com/Diwasdh/WorldClock.git


# Navigate to project directory
cd world_clock

# Install dependencies (choose one)
bun install
# or
yarn install
# or
npm install
```

## Getting Started

```bash
# Run development server
bun run dev
# or
yarn dev
# or
npm run dev
```

## Project Structure

```
├── app/             # Next.js app directory (routing, pages, layouts)
│   ├── components/  # React components (Clock, Header, Footer, etc.)
│   ├── globals.css  # Global styles
│   └── ...          # Other app files
├── data/            # Time zone data and utilities
├── public/          # Static assets (favicon, LICENSE, etc.)
├── README.md
├── package.json
└── ...
```

## Technologies Used

- Next.js (App Router)
- React
- TypeScript
- CSS/Tailwind CSS
- Bun, npm, or yarn

## License

This project is licensed under the [MIT License](LICENSE).
