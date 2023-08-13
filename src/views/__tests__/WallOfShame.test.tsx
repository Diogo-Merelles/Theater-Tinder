import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MoviesProvider } from "../../context/MovieContext";
import WallOfShame from "../WallOfShame";

const mockMovie = {
  id: 1,
  title: "Test Movie",
  overview: "Test overview.",
  poster_path: "/path/to/image.jpg",
};

// Mocking localStorage
const localStorageMock = (function () {
  let store: { [key: string]: string } = {}; // Specify the type for store object

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

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("WallOfShame", () => {
  it("displays a movie in wall of shame correctly", () => {
    render(
      <MoviesProvider>
        <WallOfShame />
      </MoviesProvider>
    );

    expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.overview)).toBeInTheDocument();
  });

  it('transfers a movie to favorites when "Transfer to Favorites" is clicked', () => {
    render(
      <MoviesProvider>
        <WallOfShame />
      </MoviesProvider>
    );

    userEvent.click(screen.getByText("Transfer to Favorites"));
    expect(screen.queryByText(mockMovie.title)).not.toBeInTheDocument();
  });
});
