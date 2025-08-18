# Agent Instructions for Project Maintenance

This document provides guidance for AI agents and developers on maintaining this project.

## 1. Technology Stack

This is a [Next.js](https'://nextjs.org/') project using the App Router, styled with [Tailwind CSS](https'://tailwindcss.com/').

-   **Framework**: Next.js 14
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS with `shadcn/ui` conventions.
-   **UI Components**: Radix UI (`@radix-ui/react-slot`) and Lucide Icons (`lucide-react`).
-   **Theming**: `next-themes` for light/dark mode support.
-   **Linting**: ESLint

## 2. Project Setup

To run the project locally, follow these steps:

1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Run the development server**:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

## 3. Project Structure

The project follows a standard Next.js App Router structure.

-   `app/`: Contains the core application routing and pages.
    -   `layout.tsx`: The root layout of the application. It includes the `ThemeProvider`.
    -   `page.tsx`: The main entry point for the home page. It assembles the different sections of the portfolio.
    -   `globals.css`: Global styles, including Tailwind CSS directives and CSS variables for theming.
-   `components/`: Contains reusable React components.
    -   `sections/`: Page-level components that represent a full section of the portfolio (e.g., `HeroSection`, `AboutSection`).
    -   `ui/`: Generic UI components, following the `shadcn/ui` pattern (e.g., `Button`, `Card`).
    -   `theme-provider.tsx`: The component that wraps the application to provide theme switching.
    -   `theme-toggle.tsx`: The button component used to switch between light and dark modes.
-   `lib/`: Contains utility functions and data.
    -   `utils.ts`: Tailwind CSS class merging utilities (`cn`).
    -   `data.ts`: Static data used throughout the application (e.g., skills, project details).
-   `public/`: Static assets like images and fonts.
-   `tailwind.config.ts`: Tailwind CSS configuration file.
-   `package.json`: Project dependencies and scripts.

## 4. Styling and Theming

-   **Tailwind CSS**: Styles are primarily applied using Tailwind CSS utility classes.
-   **`shadcn/ui` Conventions**: The project uses the conventions popularized by `shadcn/ui`. Colors, border radii, and other themeable properties are defined as CSS variables in `globals.css` and referenced in `tailwind.config.ts`. This makes it easy to maintain a consistent design system.
-   **Theming**: The application supports light and dark modes using `next-themes`. The theme can be toggled using the `ThemeToggle` component. Colors are defined for both light and dark themes in `globals.css`.

## 5. Creating New Components and Sections

-   **New UI Components**: If you need a new generic UI component (like an accordion or a dialog), create it in the `components/ui/` directory.
-   **New Page Sections**: To add a new section to the main page (e.g., a "Contact" section), create a new component in `components/sections/` and then add it to `app/page.tsx`.

## 6. Running Tests

The project is configured with ESLint for static code analysis.

-   **Run the linter**:
    ```bash
    npm run lint
    ```
    Ensure there are no linting errors before submitting changes.
