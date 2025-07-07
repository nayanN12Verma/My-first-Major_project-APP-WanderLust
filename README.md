
# Updated README.md for HTML/CSS/JS/Node/Express/EJS project with Mapbox API
readme_stayinn_ejs = """
# 🏨 Wanderlust  – Airbnb-like Booking Platform (Node.js + EJS + Mapbox)

**StayInn** is a full-stack clone of Airbnb built using Node.js, Express.js, MongoDB, EJS templates, and vanilla HTML/CSS/JavaScript. This project allows users to list properties, browse listings, and make bookings with integrated location services via Mapbox API.

🌐 **Live Website**: [stayinn-rigj.onrender.com](https://stayinn-rigj.onrender.com/listings)

## 🚀 Overview

StayInn is a simplified version of Airbnb where:
- Hosts can post property listings with images and location.
- Guests can browse, review, and book properties.
- Real-time maps are shown using **Mapbox**.

This platform focuses on learning full-stack development using traditional server-rendered templates (EJS) and core backend technologies.

---

## 🌟 Features

- 📝 Property listings with images, price, location
- 📍 Mapbox integration for real-time geolocation display
- 🔐 User authentication with Passport.js (login, register)
- 💬 Leave reviews for listings
- 📦 Flash messages for success/error notifications
- 🧹 RESTful routing and CRUD operations
- 🖥️ Fully responsive UI using custom CSS

---

## 🔧 Tech Stack

| Layer        | Technology               |
|--------------|---------------------------|
| Frontend     | HTML, CSS, JavaScript     |
| Backend      | Node.js, Express.js       |
| Templating   | EJS + ejs-mate (layouts)  |
| Database     | MongoDB + Mongoose        |
| Auth         | Passport.js + LocalStrategy |
| Map API      | Mapbox GL JS              |
| Sessions     | express-session, flash    |
| Deployment   | Render.com                |

---

## 🧭 System Design

- Server-rendered app using **EJS** templates.
- **MongoDB** database with separate models for `User`, `Listing`, and `Review`.
- Mapbox is used to geocode user-entered locations and display them on interactive maps.
- Flash messaging system for user feedback (e.g. successful login, error handling).

**Routes:**
- `/listings` – All listings
- `/listings/new` – Create listing (Host only)
- `/listings/:id` – View specific listing
- `/listings/:id/reviews` – Review section
- `/register`, `/login`, `/logout` – Auth routes

---

## ⚙️ Setup & Installation

### Requirements
- Node.js
- MongoDB (local or Atlas)
- Mapbox API Key

### Environment Variables (`.env`)
```env
ATLASDB_URL=your_mongodb_connection_url
MAPBOX_TOKEN=your_mapbox_api_key
