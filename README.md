# Movie Match App 🎬

Movie Match App is a simple yet powerful application that lets users search for their favorite movies, view details, and categorize them. Inspired by Tinder, users can swipe left to add a movie to their favorites or swipe right to add it to the "Wall of Shame". It's an exciting and interactive way to manage and discover movies!

## Features

- **Search Movies**: Easily search for any movie.
- **Swipe Actions**: Swipe right to 'Like' and left to 'Dislike' a movie. No more boring buttons!
- **Favorites & Wall of Shame**: Organize your movies into two categories.

## API Endpoints

- `/search`: Search for movies based on the query string.

- `/favorites`: Get all movies that the user has added to their favorites.

- `/wall-of-shame`: Get all movies that the user has added to their "Wall of Shame".

## Getting Started

1. **Clone the repository**:

Apologies for the confusion! Here's the complete information in a single block for you to copy and paste into your README.md file:

markdown
Copy code
# Movie Match App 🎬

Movie Match App is a simple yet powerful application that lets users search for their favorite movies, view details, and categorize them. Inspired by popular swiping apps, users can swipe right to add a movie to their favorites or swipe left to add it to the "Wall of Shame". It's an exciting and interactive way to manage and discover movies!

## Features

- **Search Movies**: Easily search for any movie.
- **Swipe Actions**: Swipe right to 'Like' and left to 'Dislike' a movie. No more boring buttons!
- **Favorites & Wall of Shame**: Organize your movies into two categories.
- **Responsive**: Designed for both mobile devices and desktop.

## API Endpoints

- `/search`: Search for movies based on the query string.
  - **Method**: `GET`
  - **Query Params**: `query` (string)
  - **Response**: Array of movies matching the search criteria.

- `/favorites`: Get all movies that the user has added to their favorites.
  - **Method**: `GET`
  - **Response**: Array of favorite movies.

- `/wall-of-shame`: Get all movies that the user has added to their "Wall of Shame".
  - **Method**: `GET`
  - **Response**: Array of disliked movies.

- `/add-to-favorites`: Add a specific movie to the user's favorites.
  - **Method**: `POST`
  - **Body**: Movie details (id, title, etc.)
  - **Response**: Confirmation message.

- `/add-to-wall-of-shame`: Add a specific movie to the user's "Wall of Shame".
  - **Method**: `POST`
  - **Body**: Movie details (id, title, etc.)
  - **Response**: Confirmation message.

(Note: These are assumed endpoints based on the provided context and may not represent the actual endpoints in the application.)

## Getting Started

1. **Clone the repository**: git clone https://github.com/your-username/movie-match-app.git
2. **Install dependencies: npm install
3. **Run the app: npm start
4. **Open a browser and navigate to `http://localhost:3000`.

