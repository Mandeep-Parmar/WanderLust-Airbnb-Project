# WanderLust - Airbnb Style Listing Platform

WanderLust is a **full-stack web application inspired by Airbnb** where users can explore travel listings, create their own listings, leave reviews, and view property locations on an interactive map.

The project demonstrates a complete **Node.js + Express + MongoDB backend architecture** with authentication, image uploads, geolocation, and a review system.

---

## Live Demo

https://wanderlust-fyj1.onrender.com/listings

---

## Features

### User Authentication

* User signup and login
* Secure authentication using **Passport.js**
* Session-based authentication
* Only authenticated users can create listings or reviews

### Listings

* Create, edit, and delete property listings
* Upload listing images using Cloudinary
* View detailed listing pages

### Reviews

* Add reviews and ratings to listings
* Delete your own reviews
* Display average ratings

### Interactive Maps

* Display listing location using **Leaflet**
* Convert address to coordinates using **Node-Geocoder**
* Map marker shown on listing page

### Filters

* Category-based filtering
* Clean UI similar to Airbnb filter design

### Responsive UI

* Fully responsive layout
* Mobile-friendly navigation

---

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Frontend

* EJS Templates
* Bootstrap 5
* CSS

### Authentication

* Passport.js
* Passport Local

### Cloud Services

* Cloudinary (image hosting)
* Render (deployment)

### Maps

* Leaflet.js
* OpenStreetMap
* Node Geocoder

---

## Project Structure

```
WanderLust
│
├── controllers
│   ├── listings.js
│   ├── reviews.js
│   ├── static.js
│   └── users.js
│
├── routes
│   ├── review.js
│   ├── static.js
│   └── user.js
│
├── models
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── utils
│   ├── ExpressError.js
│   ├── geocoder.js
│   └── wrapAsync.js
│
├── init
│   ├── data.js
│   └── index.js
│
├── public
│   ├── css
│   │   ├── rating.css
│   │   └── style.css
│   │
│   ├── js
│   │   ├── map.js
│   │   └── script.js
│   │
│   └── favicon.ico
│
├── views
│   │
│   ├── includes
│   │   ├── flash.ejs
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   │
│   ├── layouts
│   │   └── boilerplate.ejs
│   │
│   ├── listings
│   │   ├── edit.ejs
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   └── show.ejs
│   │
│   ├── static
│   │   ├── privacy.ejs
│   │   └── terms.ejs
│   │
│   └── users
│       ├── login.ejs
│       └── signup.ejs
│
├── app.js
├── cloudConfig.js
├── middleware.js
├── schema.js
├── .env
├── package.json
└── README.md
```
---

# 👨‍💻 Author

**Mandeep Parmar**

* GitHub: https://github.com/Mandeep-Parmar
* LinkedIn: https://www.linkedin.com/in/mandeep-p-b44930327/

---

## License

This project is created for **educational purposes**.
