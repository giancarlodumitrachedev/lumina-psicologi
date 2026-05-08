# Implementation Plan: Lumina Psychologist Demo Prototype

*Note for AI: Read `ans.md` before beginning each phase. Execute tasks sequentially and atomically.*

## Phase 1: Global Setup & Scaffolding
- **Task 1.1:** Initialize a Next.js 15 project using TypeScript, Tailwind CSS, and the App Router. Ensure the project is stripped of boilerplate CSS.
- **Task 1.2:** Initialize `shadcn/ui` using the CLI. Configure the theme with a strictly 3-color palette (Beige, Off-white, Brown) by modifying `globals.css` root variables. Ensure the aesthetic feels "psychologist-worthy" (calming, elegant).
- **Task 1.3:** Install and configure dependencies for serverless email sending (`resend` or `@emailjs/browser`), form handling (`react-hook-form`, `zod`), and animations (`framer-motion`). Ensure `.env.local` is prepped for the chosen third-party email API keys.
- **Task 1.4:** Setup Google Fonts (e.g., Playfair Display for headers, Inter for body) in the root layout to establish a professional, modern typography system.
- **Task 1.5:** Create the `public/Assets/` directory. Place dummy placeholder images inside with strict naming conventions: `logo.png`, `hero-bg.webp`, `psychologist-portrait.webp`, `studio-1.webp`, `studio-2.webp`, `studio-3.webp`.

## Phase 2: Core State & Utility Logic
- **Task 2.1:** Create a global utility or Next.js layout wrapper that reads the async URL `searchParams` (`name`, `city`, `address`, `field`). Provide default fallbacks in Italian (e.g., Name: "Dott. Mario Rossi", City: "Milano").
- **Task 2.2:** Create a custom `<SmartLink>` component wrapping Next.js `<Link>`. This component must automatically append the current URL query parameters to any internal site navigation to ensure the personalized demo context is never lost during navigation.
- **Task 2.3:** Create a dictionary function that generates dynamic emotional Hero copy based on the `field` parameter. 
  *Logic:* The text must adapt "Sit. Speak. Leave." to Italian emotions based on the field (e.g., Sessuologo -> "Siediti. Parla. Ritrova l'intimità.", Terapia di coppia -> "Siediti. Parlate. Ritrovatevi.", Default -> "Siediti. Parla. Ritrova la serenità.").

## Phase 3: Layout & Navigation Components
- **Task 3.1:** Build the Desktop Header. Include the dynamic Logo (from `public/Assets/logo.png`) and links to Home, Chi Sono, Servizi, and Contatti using the `<SmartLink>` component.
- **Task 3.2:** Build the Mobile Hamburger Navigation using the `shadcn/ui` Sheet component. Ensure it gracefully closes upon navigation.
- **Task 3.3:** Build the Footer. It must contain standard legal links and strictly include the text "Powered by Lumina™" as an active hyperlink pointing exactly to `www.luminadigital.it`.

## Phase 4: Landing Page (`/`) Sections
- **Task 4.1:** Build the Hero Section. Use `hero-bg.webp` as a background. Implement the dynamic emotional text (Task 2.3) and a primary Call to Action button ("Prenota un consulto").
- **Task 4.2:** Build the "Chi Sono" (About) Section. Dynamically render the psychologist's `name` and `field`, alongside the `psychologist-portrait.webp` asset.
- **Task 4.3:** Build the "Lo Studio" (Studio) Section. Display the `studio-1`, `studio-2`, and `studio-3` assets in an elegant, modern gallery layout. Apply `framer-motion` scroll-reveal animations.
- **Task 4.4:** Build the "Dove Siamo" (Location) Section. Use the `city` and `address` parameters to generate a map visual (using an embedded map iframe dynamically populated via URL, or a beautifully styled generic map block populated with the dynamic text).

## Phase 5: Sub-pages Development
- **Task 5.1:** Build the `/chi-sono` page. Expand on the psychology background, maintaining the dynamic parameter ingestion for personalization.
- **Task 5.2:** Build the `/servizi` page. List standard psychological services, but adapt the primary highlighted service strictly to the `field` URL parameter.
- **Task 5.3:** Build the `/contatti` page. Implement the layout for the contact info (dynamically inserting `city` and `address`) and the UI for the appointment request form (Nome, Email, Telefono, Messaggio) using `shadcn/ui` components and `react-hook-form`.

## Phase 6: Serverless Email Functionality & Polish
- **Task 6.1:** Implement the Serverless Email Logic. Because the app has no traditional backend server, you must use Next.js Server Actions (running on Vercel's Edge/Serverless functions) combined with a 3rd-party API (like Resend) to securely dispatch emails without exposing API keys to the browser. *Alternative fallback:* Use a purely frontend-driven service like EmailJS if Server Actions cannot be utilized.
- **Task 6.2:** Connect the frontend `/contatti` form to the Server Action (or EmailJS service). Implement a strict loading state, disable the submit button during the request, and display an elegant success/error Toast notification (via `shadcn/ui`) upon completion.
- **Task 6.3:** Wrap all page routes in a Framer Motion `<AnimatePresence>` to create smooth, high-quality fade-in/fade-out page transitions.
- **Task 6.4:** Perform a final Vercel optimization check. Ensure standard Next.js `<Image>` components are used for the `Assets` folder to ensure fast load times, check mobile responsiveness across all sections, and verify contrast ratios for the Beige/Brown color palette.