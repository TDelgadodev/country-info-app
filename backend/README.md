# Country Info App

## Overview

This application provides information about countries, including their names, borders, population data, and flags. It consists of a backend built with Node.js and a frontend built with React.

## Backend Setup

### Tech Stack

- Node.js (Express.js)
- Axios for API requests

### Endpoints

#### 1. Get Available Countries

- **Endpoint:** `/api/v1/countries`
- **Method:** GET
- **Description:** Returns a list of available countries.
- **Response:**

  ```json
  [
    {
      "countryCode": "AD",
      "name": "Andorra"
    },
    {
      "countryCode": "AL",
      "name": "Albania"
    }
  ]
  ```

#### 2. Get Country Info

- **Endpoint:** `/api/v1/countries/:countryCode`
- **Method:** GET
- **Description:** Returns detailed information about a specific country, including borders.
- **Response:**

  ```json
  {
    "commonName": "Argentina",
    "officialName": "Argentine Republic",
    "countryCode": "AR",
    "region": "Americas",
    "borders": [
      {
        "commonName": "Bolivia",
        "officialName": "Plurinational State of Bolivia",
        "countryCode": "BO"
      },
      {
        "commonName": "Brazil",
        "officialName": "Federative Republic of Brazil",
        "countryCode": "BR"
      }
    ]
  }
  ```

#### Environment Variables

Create a .env file in the root directory and add the following variables:

```ruby
NAGER_API_BASE_URL=<https://date.nager.at/api/v3>
COUNTRIES_NOW_API_BASE_URL=<https://countriesnow.space/api/v0.1>
```

#### Installation

1. Clone the repository.
2. Navigate to the backend directory.
3. Run npm install to install dependencies.
4. Start the server using npm start.

#### Code Quality

- Ensure ESLint and Prettier are set up for consistent code formatting.
- Run the linter to check for issues.
