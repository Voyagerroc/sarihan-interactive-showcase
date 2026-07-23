# Sarıhan İnşaat 3 — Interactive Website Example

This project is an **interactive web design techniques example/demo**, bringing together modern web animation capabilities, smooth scrolling, and scroll-driven interactions in a single React (Vite) application. It serves as a showcase for building premium, highly interactive user experiences without sacrificing performance.

## Features

This project highlights several advanced frontend techniques:
- **Smooth Scroll**: Native scroll overriding using Lenis for a buttery-smooth scrolling experience.
- **Scroll-Triggered Reveal Animations**: Powered by GSAP ScrollTrigger to orchestrate complex element appearances.
- **Parallax Layers**: Background imagery that moves at a different speed than the foreground content to create depth.
- **Magnetic Buttons & 3D Tilt Cards**: Interactive elements powered by Framer Motion that react to mouse position.
- **Infinite Marquee Photo Gallery**: A horizontally flowing gallery that accelerates based on scroll momentum and slows down on hover.
- **Scroll-Driven SVG Character Animation**: A custom construction crane SVG whose arm rotation is directly mapped (scrubbed) to the user's scroll progress.
- **Scroll-Spy Navigation**: A sticky navbar that highlights the currently active section as the user scrolls.

## Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock) & Framer Motion
- **Scroll Handling**: Lenis
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Voyagerroc/sarihan-insaat-3.git
   cd sarihan-insaat-3
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Copy the example environment file if you need to add environment variables in the future:
```bash
cp .env.example .env
```
*(Currently, this project requires no specific API keys out of the box).*

## Deployment

This project is configured for seamless deployment on [Railway](https://railway.app). 
It includes a custom `start` script and `railway.json` configuration. Simply link your GitHub repository to Railway, and it will automatically build (`npm run build`) and serve the static files on the provided `$PORT`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
