import { useEffect, useState } from "react";
import "./App.css";

const BASE_URL = "https://api.themoviedb.org/3/movie/popular";
const API_TOKEN = import.meta.env.TMDB_API_KEY;

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
  // const [count, setCount] = useState(0);
  const [movies, setMovies] = useState<Movie[]>([]);
  // const [error, setError] = useState();
  const [isRefresh, setIsRefresh] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      fetchMovies();
    }, 10000);

    // Component wordt ge-unmount
    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [isRefresh]);

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
      // setError(error);
      console.log(error);
    }
  };

  return (
    <div className="p-8 bg-slate-200 flex flex-col gap-4">
      <button
        className="bg-teal-600 text-2xl text-white uppercase font-black px-4 py-2 cursor-pointer hover:bg-teal-800 rounded-lg"
        onClick={() => {
          setIsRefresh(!isRefresh);
        }}>
        Ververs
      </button>
      {movies.map((m) => (
        <div key={m.id}>
          <h1>{m.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
