# ChefMyself

ChefMyself is a responsive web application designed to simplify meal planning and grocery preparation. Users can curate daily and weekly meal plans, automatically scale ingredient quantities based on target serving sizes, track nutrition facts, and generate consolidated weekly shopping lists. This is an 8 week collaborative student project.

## Key Features

- **Dynamic Recipe Catalog:** Browse local recipes with complete ingredients and step breakdown.
- **Portion Scaling:** Instantly recalculate ingredient amounts based on chosen serving counts.
- **Flexible Meal Planning:** Assign meals manually to specific days or use the randomized planner.
- **Aggregated Shopping List:** Automatically generate a combined list of all ingredients needed for the planned week.
- **Saving Progress:** Saves meal plans locally using `localStorage` to preserve progress across visits.
- **Responsive Layout:** Optimized user experience across desktop and mobile interfaces.


## Tech Stack

- **Frontend:** React
- **Data Source:** JSON-based local recipe list (Stretch Goal: External Recipe API integration)
- **Storage:** Browser `localStorage`
- **Design:** Figma

## Timeline

- **Week 1:** Environment setup, hardcode the recipes
- **Week 2:** Complete Figma Layout
- **Week 3:** Code responsive website layout
- **Week 4:** Dynamically render recipes, portion scaling logic
- **Week 5:** Assignment of meals manual/random logic
- **Week 6:** Local storage implementation, stretch goals
- **Week 7:** Testing, debugging, documentation, presentation prep
- **Week 8:** Presentation

## Setup

1. Ensure Node.js is installed on your computer
2. Clone the repository
3. Navigate to the project directory via running `cd project-name` in the terminal
4. Run `npm install` to install dependencies
5. Run `npm run dev` to start the local development server