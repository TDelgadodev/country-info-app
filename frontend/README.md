# Country Info App - Frontend

This is the frontend part of the Country Info App, a full-stack application that provides information about countries. This frontend is built with React and Next.js, offering a responsive and user-friendly interface to explore country data.

## Features

- Display a list of countries
- Show detailed information about a selected country
- Visualize border countries for each country
- Display a population chart for each country
- Responsive design for various screen sizes

## Tech Stack

- React.js
- Next.js
- Tailwind CSS for styling
- Axios for API requests
- Chart.js for population data visualization

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)

## Getting Started

1. Clone the repository:

   ```
   git clone <repository-url>
   cd <project-folder>/frontend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root of the frontend directory and add the following:

   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000 # Adjust this to your backend URL
   ```

4. Run the development server:

   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `pages/`: Contains the main pages of the application
  - `index.tsx`: Home page with the list of countries
  - `countries/[countryCode].tsx`: Dynamic route for country details
- `components/`: Reusable React components
- `styles/`: Global styles and Tailwind CSS configuration
- `utils/`: Utility functions and API calls
- `types/`: TypeScript type definitions

## Main Components

- `CountryList`: Displays the list of countries on the home page
- `CountryDetails`: Shows detailed information about a selected country
- `BorderCountries`: Displays clickable border countries
- `PopulationChart`: Renders a chart showing population data over time

## API Integration

The frontend communicates with the backend API to fetch country data. The base URL for the API is set in the `.env.local` file and can be accessed using `process.env.NEXT_PUBLIC_API_URL`.

## Styling

This project uses Tailwind CSS for styling. The main configuration file is located at `tailwind.config.js`. Custom styles can be added in the `styles/globals.css` file.

## Building for Production

To create a production build, run:

```
npm run build
```

To start the production server, run:

```
npm start
```

## Linting and Formatting

This project uses ESLint for linting and Prettier for code formatting. To run the linter, use:

```
npm run lint
```

To format the code with Prettier, use:

```
npm run format
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
