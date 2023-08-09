"use client";

import { MovieRow } from "@/components/MovieRow";
import { movieDB } from "@/libs/movieDB";

export default function SearchResultPage({ params }) 
{  const searchInput = params.searchInput.replaceAll("%20", " ");
  const filteredMovies = movieDB.filter((movie) =>
  movie.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
);
  
  return (
    <div>
      <p className="fw-bold fs-4 text-center my-0">
      Searching &quot; {searchInput} &quot;
      </p>
      <p className="fw-bold fs-4 text-center">
        Found {filteredMovies.length} result(s)
      </p>
      <p className="fw-bold fs-4 text-center">Found ... result(s)</p>
      {/* Use  "filteredMovies" variable to map-loop rendering MovieRow component */}
      {filteredMovies.map((movie, i) => (
        <MovieRow
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movie.rating}
          number={i + 1}
        />
      ))}
    </div>
  );
}