

---

# BookMyHotel

## About
BookMyHotel is a web application developed for learning purposes. It provides users with a platform to search and book hotels, flights, car rentals, attractions, and airport taxis.

## Technologies Used
- React
- Vite
- React Router DOM
- Date-fns
- FontAwesome

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Blaster2398/BookMyHotel.git
   ```
2. Navigate to the project directory:
   ```bash
   cd BookMyHotel
   ```
3. Install dependencies:
   ```bash
   yarn install
   ```

## Usage
To run the application locally:
```bash
yarn dev
```

## Features
- **Search**: Users can search for hotels by destination, check-in dates, and number of guests.
- **Filter Options**: Provides options to filter search results based on price, number of adults, children, and rooms.
- **Detailed Hotel Pages**: Displays detailed information about each hotel, including photos, address, description, and pricing.
- **Responsive Design**: Ensures a seamless experience across various devices.

## Pages/Components
### Header Component
- **Description**: Header component used across all pages for navigation and search functionality.
- **File**: `src/components/header/Header.js`

### List Page
- **Description**: Page to display search results for hotels.
- **File**: `src/pages/list/List.js`

### Hotel Page
- **Description**: Detailed page displaying information about a specific hotel.
- **File**: `src/pages/hotel/Hotel.js`

### App Component (Routing)
- **Description**: Component handling routing for different pages.
- **File**: `src/App.js`

## Roadmap
- **Backend Development**: Work in progress to develop backend functionalities for the application.
- **Enhanced Search Features**: Implement advanced search features such as filtering by amenities, user ratings, and reviews.
- **User Authentication**: Introduce user authentication and account management features.

---

