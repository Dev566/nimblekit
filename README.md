# NimbleKit - Everyday Online Tools Hub

NimbleKit is a clean, lightweight, and privacy-focused collection of essential online utilities. Built with modern web technologies, it offers a suite of tools that load instantly and work entirely client-side.

## 🚀 Features

*   **Privacy-First**: All calculations and data processing happen in the browser. No data is ever sent to a server.
*   **Offline Capable**: Works without an internet connection once loaded.
*   **Responsive Design**: Optimized for mobile, tablet, and desktop.
*   **AdSense Ready**: Optimized content structure for ad integration.
*   **SEO Optimized**: Includes Sitemap, Robots.txt, Meta tags, and Canonical URLs.

## 🛠️ Included Tools

*   **Calculator**: Standard arithmetic with history tape.
*   **Unit Converter**: Length, weight, temperature, and volume conversions.
*   **Percentage Calculator**: Discounts, tips, and increases.
*   **Age Calculator**: Precise age calculation.
*   **Text Tools**: Word count, character count, and case conversion.
*   **Text Cleaner**: Remove extra spaces and line breaks.
*   **URL Shortener**: Client-side link handling.
*   **QR Code Generator**: Create QR codes for text, URLs, and Wi-Fi.
*   **BMI Calculator**: Health metric analysis.
*   **Loan Calculator**: Mortgage and loan estimation.
*   **JSON Formatter**: Validate and prettify JSON data.

## 💻 Tech Stack

*   **Frontend**: React (v18), TypeScript
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS
*   **Routing**: React Router DOM
*   **State Management**: Redux Toolkit (with Persistence)
*   **Icons**: Lucide React
*   **Testing**: Vitest, React Testing Library

## 📦 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/nimblekit.git
    cd nimblekit
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 📜 Available Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Type-checks and builds the app for production to the `dist` folder.
*   `npm run preview`: Locally preview the production build.
*   `npm run lint`: Runs ESLint to check for code quality issues.
*   `npm test`: Runs the test suite using Vitest.

## 🌐 Deployment (Netlify)

This project is configured for easy deployment on Netlify.

1.  **Configuration**: The `netlify.toml` file handles redirects and build settings.
    *   **Redirects**: Handles SPA routing (`/*` -> `/index.html`) and domain canonicalization.
2.  **Build Settings**:
    *   **Build command**: `npm run build`
    *   **Publish directory**: `dist`

### SEO Note regarding Domains
If using the free Netlify subdomain (`nimblekit.netlify.app`), ensure `robots.txt` and `sitemap.xml` point to this domain to avoid SEO issues. If upgrading to a custom domain (`nimblekit.com`), update these references and the redirects in `netlify.toml`.

## 📄 License

[MIT License](LICENSE)
