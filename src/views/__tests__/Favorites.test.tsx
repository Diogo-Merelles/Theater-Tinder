import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MoviesProvider } from "../../context/MovieContext";
import Favorites from "../Favorites";

const mockMovie = {
  id: 1,
  title: "Test Movie",
  overview: "Test overview.",
  poster_path: "/path/to/image.jpg",
};

// Mocking localStorage
const localStorageMock = (function () {
  let store: { [key: string]: string } = {};

  return {
    getItem: function (key: string) {
      return store[key] || null;
    },
    setItem: function (key: string, value: string) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("Favorites", () => {
  it("displays a movie in favorites correctly", () => {
    render(
      <MoviesProvider>
        <Favorites />
      </MoviesProvider>
    );

    expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.overview)).toBeInTheDocument();
  });

  it('removes a movie from favorites when "Remove from Favorites" is clicked', () => {
    render(
      <MoviesProvider>
        <Favorites />
      </MoviesProvider>
    );

    userEvent.click(screen.getByText("Remove from Favorites"));
    expect(screen.queryByText(mockMovie.title)).not.toBeInTheDocument();
  });
});
