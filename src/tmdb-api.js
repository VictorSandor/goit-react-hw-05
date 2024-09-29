import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzllNDZlNDRiMGM3ZTJjZWViY2RkM2YyNGQzYjc0YiIsIm5iZiI6MTcyNzM1ODA0Ny4yMTE3OTYsInN1YiI6IjY2ZjU2MjkxNWU0MGI1MTJlZmVkNTAzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uA2nt_wYEnk87iuoOM5IDUHcKSF8QZ-KOxe8o2TjC3M",
  },
};

export async function getTrendingMovies() {
  const response = await axios.get(`/trending/movie/day`, options);
  return response.data.results;
}

export async function searchMovies(searchQuery, page) {
  options.params = {
    query: searchQuery,
    include_adult: "false",
    language: "en-US",
    page: page,
  };
  const response = await axios.get("/search/movie", options);
  return {
    results: response.data.results,
    totalPages: response.data.total_pages,
  };
}

export async function getMovieDetails(movieId) {
  const response = await axios.get(`/movie/${movieId}`, options);
  return response.data;
}

export async function getMovieCredits(movieId) {
  const response = await axios.get(`/movie/${movieId}/credits`, options);
  return response.data.cast;
}

export async function getMovieReviews(movieId) {
  const response = await axios.get(`/movie/${movieId}/reviews`, options);
  return response.data.results;
}
