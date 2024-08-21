import jwt from './jwt.png';
import cafe from './cafe.png';
import ecom from './ecom.png';
import bookstore from './bookstore.png';
import movie from './movie.png';
import weather from './weather.png';
import todo from './todo.png';
import podia from './podia.png';
import rps from './rps.png';
import cartfunc from './cartfunc.png';

import linkCafe from './link-cafe.png';
import linkBook from './link-book.png';
import linkCart from './link-cart.png';
import linkMovie from './link-movie.png';
import linkPodia from './link-podia.png';
import linkWeather from './link-weather.png';
import linkTodo from './link-todo.png'
import linkRps from './linkrps.png'


export const projects = [
  {
    id: 1,
    title: "JWT Authentication and Authorization",
    link: "https://github.com/thesoorya/JWT-Auth",
    description: "The JWT Authentication and Authorization project demonstrates my ability to implement a secure user authentication system using Node.js and Express.js. In this project, users can register and log in, and upon successful authentication, a JSON Web Token (JWT) is generated and issued to the client. This token is then used to access protected routes and ensure only authenticated users can proceed. The project features robust token-based authentication, where the JWT is verified with each request, as well as role-based authorization that controls access to specific routes depending on user permissions. I implemented middleware to manage token validation and protected route access, along with bcrypt.js to securely hash passwords. MongoDB is used for secure storage of user data, making this project a comprehensive demonstration of modern security practices in web development.",
    image: jwt,
    github: true,
    builtBy: 'Node JS, Express JS, Mongo DB',
    previewImage: null
  },
  {
    id: 2,
    title: "Cafe 9¾",
    link: "https://foodstore-frontend-huy0.onrender.com",
    description: "Cafe 9¾ is a fully responsive web application designed to display the menu of a cafe. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), this project combines frontend and backend technologies to create a seamless user experience. The React.js frontend offers an engaging and intuitive interface, allowing users to explore the cafe's food offerings easily. On the backend, Node.js and Express.js manage server-side operations and interact with a MongoDB database to retrieve and store menu information. The application ensures a consistent and visually appealing experience across all devices, from desktops to mobile phones, showcasing the integration of modern web technologies in delivering a practical and user-friendly solution.",
    image: cafe,
    github: false,
    builtBy: 'React JS, Node JS, Express JS, MongoDB, BootStrap',
    previewImage: linkCafe
  },
  {
    id: 3,
    title: "E Commerce with Admin",
    link: "https://github.com/thesoorya/E-Commerce-with-Admin",
    description: "Cafe 9¾ is a full- stack MERN(MongoDB, Express, React, Node.js) web application I developed to showcase a curated selection of items available at a café.The application features a user - friendly interface built with React on the frontend, displaying various food and drink options.On the backend, Express and Node.js manage server - side operations, while MongoDB is used for data storage.This project demonstrates my proficiency in building a full - stack application, combining both frontend and backend technologies to deliver a seamless experience for browsing café items.",
    image: ecom,
    github: true,
    builtBy: 'React JS, Node JS, Express JS, MongoDB',
    previewImage: null
  },
  {
    id: 4,
    title: "Admin Panel for Book Store",
    link: "https://bookstore-frontend-q9oi.onrender.com",
    description: "The Admin Panel for Book Store is a comprehensive MERN (MongoDB, Express, React, Node.js) application I developed to manage bookstore operations. This admin panel enables administrators to manage books, including adding, editing, and deleting items from the store's inventory. Built with React for the frontend, the application offers a clean and intuitive user interface for managing data. The backend, powered by Node.js and Express, handles requests and updates the MongoDB database. This project highlights my ability to build full-stack applications with effective admin functionalities, ensuring smooth management of a bookstore.",
    image: bookstore,
    github: false,
    builtBy: 'React JS, Node JS, Express JS, MongoDB, BootStrap',
    previewImage: linkBook
  },
  {
    id: 5,
    title: "Movie Suggesstion App",
    link: "https://thesoorya.github.io/Movie-Suggestion-App/",
    description: "The Movie Suggestion App is a JavaScript-based web application that utilizes the OMDB API to fetch and display movie information. The app allows users to search for movies by title and provides suggestions based on popular or trending movies. It features a simple, user-friendly interface where users can explore movie details such as the title, genre, plot, and release year. The application efficiently fetches real-time data from the OMDB API, making it an interactive and dynamic movie exploration tool. This project showcases my ability to work with external APIs and create responsive web applications using HTML, CSS and JavaScript.",
    image: movie,
    github: false,
    builtBy: 'HTML, CSS, JavaScript',
    previewImage: linkMovie
  },
  {
    id: 6,
    title: "Weather Web Application",
    link: "https://thesoorya.github.io/weatherapp/",
    description: "The Weather Web App is a JavaScript-based application that fetches real-time weather data from a public API. Users can search for the current weather conditions in any city, and the app will display details such as temperature, humidity, wind speed, and weather descriptions. The interface is clean and responsive, designed to work across all devices. This project highlights my skills in API integration, asynchronous JavaScript, and creating user-friendly interfaces for displaying dynamic data.",
    image: weather,
    github: false,
    builtBy: 'HTML, CSS, JavaScript',
    previewImage: linkWeather
  },
  {
    id: 7,
    title: "TO DO List",
    link: "https://thesoorya.github.io/To-Do-List-JavaScript/",
    description: "The To-Do List application is a JavaScript-based project that allows users to create, manage, and store tasks. This app utilizes localStorage to save tasks and their states, ensuring that user data persists even after refreshing the page or closing the browser. Users can add new tasks, mark them as completed, and delete them as needed. The application dynamically updates the DOM to reflect changes and manage tasks effectively. This project demonstrates my proficiency in using JavaScript for client-side storage and event handling, creating a practical and interactive task management tool.",
    image: todo,
    github: false,
    builtBy: 'HTML, CSS, JavaScript',
    previewImage: linkTodo
  },
  {
    id: 8,
    title: "Rock Paper Scissor Game",
    link: "https://thesoorya.github.io/RPS-Game/",
    description: "The Rock Paper Scissors Game is a classic interactive web application where users can play against the computer. Developed using JavaScript, this game allows users to choose between rock, paper, or scissors, and then the computer randomly selects its choice. The game determines the winner based on the standard rules: rock crushes scissors, scissors cuts paper, and paper covers rock. The interface is simple and engaging, providing instant feedback on the outcome of each round and displaying the score. This project showcases my skills in implementing game logic and creating interactive web experiences.",
    image: rps,
    github: false,
    builtBy: 'HTML, CSS, JavaScript',
    previewImage: linkRps
  },
  {
    id: 9,
    title: "Podia Landing Page",
    link: "https://thesoorya.github.io/Podia-Landing-Page/",
    description: "The Podia Landing Page is a fully responsive website designed to showcase a product or service using HTML, CSS, and Bootstrap. This landing page is built to adapt seamlessly across different devices and screen sizes, providing an optimal viewing experience. It features a clean and modern design with a focus on user engagement and visual appeal. The layout includes key sections such as a hero area, features, testimonials, and a call-to-action. By leveraging Bootstrap's grid system and responsive utilities, the page ensures consistency and functionality across various platforms. This project highlights my ability to create visually appealing and responsive web designs using front-end technologies.",
    image: podia,
    github: false,
    builtBy: 'HTML, CSS, JavaScript, BootStrap',
    previewImage: linkPodia
  },
  {
    id: 10,
    title: "Cart Functionality",
    link: "https://github.com/thesoorya/Cart-Functionality-React",
    description: "The React Cart System with Context API is a basic project that demonstrates core functionalities of a shopping cart using React. It allows users to add, update, and remove items from the cart, with the state managed globally through Context API. The application updates the total price and reflects changes across components in real-time. This simple yet practical project showcases fundamental skills in state management and component interaction within a React application.",
    image: cartfunc,
    github: false,
    builtBy: 'React Js',
    previewImage: linkCart
  },
];