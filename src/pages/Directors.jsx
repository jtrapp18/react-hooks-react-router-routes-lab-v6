import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(()=> {
    fetch("http://localhost:4000/directors")
    .then(res=>res.json())
    .then(directors => setDirectors(prevDirectors=> directors))
  }, [])

  if(!directors){
    return <h1>Loading...</h1>;
  };

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
          {directors.map(director=>
            <article key={director.name}>
              <h2>{director.name}</h2>
              <ul>{director.movies.map(movie=> <li key={movie.title}>{movie}</li>)}</ul>
            </article>
          )}
      </main>
    </>
  );
};

export default Directors;
