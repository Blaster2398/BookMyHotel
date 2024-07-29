# Booking.com : Platform to book hotel rooms from all over the globe

## Table of Contents
* [About Booking.com](#About-Booking.com)
* [Key Features](#key-features)
* [More Features](#more-features)
* [Tech Stack Used](#tech-stack-used)
* [Installation](#installation)


## About Booking.com
This project is a clone of the Booking.com website, it is a full stack website built using modern web technologies including HTML, CSS, JavaScript, React for the front end, Node.js , Express for the backend and MongoDB for the database. The project also uses JWT (JSON Web Token) for authentication and authorization, and Postman for API requests.

## Key Features


#### Explore hotels across different countries

#### Get hotels based on property guests and featured hotels

#### Search hotels based on your country of visit ; dates and number of members

#### View hotels of a country on searching and filter them by prices

#### Explore the hotel page with its photos via a slidebar and other description

#### See the total cost of stay and reserve desired type of room of your choice

#### Two users cannot have same room reserved for same dates

#### MongoDB Atlas used to store the user , room and hotel data

## More Features

A login button for the user at the homepage, number of properties based on countries , property type are dynamically populated as the database is modified. Featured hotels are given priority at the homepage. After searching by the country, dates of visit and number of people, a hotel list is provided to the user with elaborate description of each hotel with images which can be expanded and explored via a slider. The user can filter hotels on the basis of minimum and maximum cost of stay per night. On selecting a hotel, the user gets the total price calculated based on number of days of visit. Then the user can reserve the rooms which are not already reserved by exploring through the various types of rooms. Then after booking the user can logout. The database modification can be done only by the users which are Admin. Cloudinary used to convert images to usable URL for the user to edit the database.

## Tech Stack Used
- React and React Context API
- HTML
- CSS
- JavaScript
- Node.js
- Express
- MongoDB
- Mongoose ODM
- Postman/Insomnia

  JWT Authorization added for user token generations, passwords were hashed using bcryptjs. Cookie-parser was used to read and manage cookies. Cors was used to accept API requests from frontend to backend. Axious Library was used to make HTTP requests. Context API was used which is a part of React, used for managing global state in a React application and sharing data between components without having to pass props manually and avoid prop drilling. AuthContext used to manage user authentication state, allowing different parts of the application to access and update the user's authentication status, similarly SearchContext was used to allow different parts of the application to access and update the search state.

## Installation

- Clone the repository by opening your terminal and navigating to the directory where you want to clone the repository. Then, run the following command:
```bash
  git clone https://github.com/Blaster2398/BookMyHotel/tree/full-app
```

- Navigate to the App Directory:
```bash
  cd Booking.com
```

- Install the required dependencies using npm package manager:
```bash
  npm install
```

- Start the development server:
```bash
  npm start
```
- Access the website by visiting 'http://localhost:3000'

  
## Video of Working App

<!--https://github.com/Blaster2398/BookMyHotel/assets/133494008/a50fb6a6-f00c-4e7c-943f-8fdbb422543c
-->


## Contributors

- [Aryan Patel](https://github.com/Blaster2398)
- [Hardik Jain](https://github.com/HardikJainGit)

