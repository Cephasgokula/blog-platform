# Blog Platform

A simple full-stack web application for creating, editing, viewing, and deleting blog posts. Built with Node.js, Express, MongoDB (Mongoose), and vanilla HTML, CSS, and JavaScript.

## Features

- **List all blog posts:** View all posts on the homepage, sorted by newest first.
- **Create a new post:** Fill out a form to publish a new blog post.
- **Edit posts:** Easily update the title and content of any post.
- **Delete posts:** Remove posts with a single click.
- **Responsive design:** Clean and modern UI for desktop and mobile.

## Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB (with Mongoose ODM)
- **Frontend:** HTML, CSS, JavaScript

## Directory Structure

```
├── index.js                # Entry point, sets up Express server and API routes
├── models/
│   └── Post.js             # Mongoose schema/model for blog posts
├── routes/
│   └── posts.js            # API routes for CRUD operations on posts
├── public/
│   ├── index.html          # Homepage showing all posts
│   ├── create.html         # Form page to create new posts
│   ├── edit.html           # Form page to edit existing posts
│   └── style.css           # Styles for all pages
├── test-db.js              # MongoDB connection test script
└── .env                    # For sensitive config (MongoDB URI, Port, etc.)
```

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB database (local or Atlas cluster)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Cephasgokula/blog-platform.git
   cd blog-platform
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Create a `.env` file in the root directory:
     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```
   - Replace `your_mongodb_connection_string` with your actual MongoDB URI.

4. **Start the server:**
   ```bash
   npm start
   ```
   - The app will run at `http://localhost:5000` by default.

### Usage

- Visit the homepage to see all posts.
- Click "Create new Post" to add a post.
- Use "Edit" and "Delete" buttons on each post for management.

## API Endpoints

All endpoints are prefixed with `/api/posts`:

- `GET /api/posts` — List all posts
- `GET /api/posts/:id` — Get a single post by ID
- `POST /api/posts` — Create a new post (`{title, content}`)
- `PUT /api/posts/:id` — Update a post (`{title, content}`)
- `DELETE /api/posts/:id` — Delete a post

## Example MongoDB Schema

```js
const postSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
});
```

## Author

[Cephas Gokula](https://github.com/Cephasgokula)
