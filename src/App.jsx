import { useState, useEffect } from 'react'
import './App.css'
import Dati from './Dati.jsx';
// import Header from './Header.jsx';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from './Card.jsx';


function App() {
  const[movies, setMovies] = useState();
  const[filteredMovies, setFilteredMovies] = useState([]);


  useEffect(() => {
    setMovies(Dati);
  }, [])

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies])


  //INPUT - FUNZIONE CHE FILTRA DATI
  function filterText(event){
    const textInserted = event.target.value;
    const resultMovies = movies.filter((item) => 
      item.title.toLowerCase().startsWith(textInserted.toLowerCase())
    );
    setFilteredMovies(resultMovies);
  };


  //CATEGORIES - FUNZIONE CHE FILTRA DATI
  function handleChange(event){
    const {value, checked} = event.target;

    if (checked) {
      const resultCategories = movies.filter((item) => 
        item.category.includes(value)
      );
      setFilteredMovies(resultCategories);
    } else {
      setFilteredMovies(movies);
    }
  };


  //SUCCESS - FUNZIONE CHE FILTRA DATI
  function isSuccess(event){
    const {value, checked} = event.target;
    const isSuccessValue = value === "true";

    if (checked) {
      const resultSuccess = movies.filter((item) => 
        item.success === isSuccessValue
      );
      setFilteredMovies(resultSuccess);
    } else {
      setFilteredMovies(movies);
    }
  };


  //CULT - FUNZIONE CHE FILTRA DATI
  function isCult(event){
    const {value, checked} = event.target;
    const isCultValue = value === "true";

    if (checked) {
      const resultCult = movies.filter((item) => 
        item.cult === isCultValue
      );
      setFilteredMovies(resultCult);
    } else {
      setFilteredMovies(movies);
    }
  };


  //MOSTRA DATI FILTRATI
  const showMovies = filteredMovies?.map(item => {
    return <div className='card'>
              <Card key={item.id}
                  title={item.title}
                  year={item.year}
                  actor={item.actor}
                  cult={item.cult}
                  success={item.success}
                  mainActor={item.mainActor}
              />
           </div>
  })



  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


console.log(filteredMovies);



  return (
    <>
      <div className='app'>

        <div className='header'>
          <h1>Movie List</h1>
            <input type="text" 
                   className='input-movie'
                   placeholder='Search for a movie...' 
                   onChange={(event) => filterText(event)}
            />

        </div>

          <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Categories</Typography>
          </AccordionSummary>
          <AccordionDetails>  

            <div className='check-container'>
              <div>
                <h3>Sci-fi</h3>
                <Checkbox {...label} value="sci-fi" onChange={(event) => handleChange(event)} />
              </div>

              <div>
                <h3>Thriller</h3>
                <Checkbox {...label} value="thriller" onChange={(event) => handleChange(event)} />
              </div>
              
              <div>
                <h3>Heroes</h3>
                <Checkbox {...label} value="heroes" onChange={(event) => handleChange(event)} />
              </div>

              <div>
                <h3>Comedy</h3>
                <Checkbox {...label} value="comedy" onChange={(event) => handleChange(event)} />
              </div>

              <div>
                <h3>Romance</h3>
                <Checkbox {...label} value="romance" onChange={(event) => handleChange(event)} />
              </div>
            </div>

          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Cult Movies</Typography>
          </AccordionSummary>
          <AccordionDetails>

            <div className='check-container-mini'>
              <div>
                <h3>Yes</h3>
                <Checkbox {...label} onChange={(event) => isCult(event)} value="true" />
              </div>

              <div>
                <h3>No</h3>
                <Checkbox {...label} onChange={(event) => isCult(event)} value="false" />
              </div>
            </div>

          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Successful Movies</Typography>
          </AccordionSummary>
          <AccordionDetails>

            <div className='check-container-mini'>
              <div>
                <h3>Yes</h3>
                <Checkbox {...label} onChange={(event) => isSuccess(event)} value="true" />
              </div>

              <div>
                <h3>No</h3>
                <Checkbox {...label} onChange={(event) => isSuccess(event)} value="false" />
              </div>
            </div>

          </AccordionDetails>
        </Accordion>
      </div>

        <div className='card-container'>
          {showMovies}
        </div>
      </div>
    </>
  )
}

export default App
