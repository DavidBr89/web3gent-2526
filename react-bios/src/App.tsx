import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const BASE_URL = "https://api.themoviedb.org/3/movie/popular";
const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGYyZjgzNWQ4MDg5Y2Y5YTczMTk3YTJhMWRkYWJiMyIsIm5iZiI6MTYwNzA4MDMxNi43NjE5OTk4LCJzdWIiOiI1ZmNhMTk3YzY2YTdjMzAwM2U0Nzg0YTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.33XyUlqIMYXU2Y2nlLRiBuO5j2SlJAPOXao_dmE7mBo";

interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

function App() {
  const [count, setCount] = useState(0);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(BASE_URL, {
        headers: {
          Authorization: API_TOKEN,
        },
      });
      const data = (await response.json()) as MovieResponse;
      setMovies(data.results);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <div>
      {movies.map((m) => (
        <div key={m.id}>
          <h1>{m.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
