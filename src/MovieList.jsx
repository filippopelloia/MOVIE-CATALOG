import React from 'react';

function MovieList(props) {
  // Funzione di filtro dei film in base alle categorie selezionate
  const filteredMovies = props.data.filter((movie) =>
    props.selectedCategories.every((category) => movie.categories.includes(category)) &&
    props.selectedCult.every((cultMovie) => movie.cult.includes(cultMovie)) &&
    props.selectedSuccess.every((successMovie) => movie.success.includes(successMovie))
  );

  return (
    <>
      {filteredMovies.map((movie) => (
        <div className='card-content'>
            <h4>Title:<br/> {movie.title}</h4>
            <h4>Year: {movie.year}</h4>
            <h6>Main actor: {movie.mainActor}</h6>
    
            <div>
                <h5>Cult: {movie.cult}</h5>
                <h5>Success: {movie.success}</h5>
            </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
