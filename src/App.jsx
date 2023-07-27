import { useState } from 'react'
import './App.css'
import Dati from './Dati.json';
// import Header from './Header.jsx';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Card from './Card.jsx';

import MovieList from './MovieList.jsx';
import FilterCheckbox from './FilterCheckbox.jsx';


function App() {
  const[movies, setMovies] = useState();
  const[filteredMovies, setFilteredMovies] = useState([]);
  const[checkCounter, setCheckCounter] = useState(0);


  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCult, setSelectedCult] = useState([]);

  function handleCategoryChange(category){
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  function handleCultChange(cult){
    if (selectedCult.includes(cult)) {
      setSelectedCategories(selectedCult.filter((cat) => cat !== cult));
    } else {
      setSelectedCategories([...selectedCult, cult]);
    }
  };



  //INPUT - FUNZIONE CHE FILTRA DATI
  function filterText(event){
    const textInserted = event.target.value;
    const resultMovies = movies.filter((item) => 
      item.title.toLowerCase().startsWith(textInserted.toLowerCase())
    );
    setFilteredMovies(resultMovies);
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




  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };





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


                <FilterCheckbox
                  label="sci-fi"
                  checked={selectedCategories.includes('sci-fi')}
                  onChange={() => handleCategoryChange('sci-fi')}
                />
                <FilterCheckbox
                  label="thriller"
                  checked={selectedCategories.includes('thriller')}
                  onChange={() => handleCategoryChange('thriller')}
                />
                <FilterCheckbox
                  label="comedy"
                  checked={selectedCategories.includes('comedy')}
                  onChange={() => handleCategoryChange('comedy')}
                />

                <FilterCheckbox
                  label="romance"
                  checked={selectedCategories.includes('romance')}
                  onChange={() => handleCategoryChange('romance')}
                />
                                
                <FilterCheckbox
                  label="heroes"
                  checked={selectedCategories.includes('heroes')}
                  onChange={() => handleCategoryChange('heroes')}
                />

              
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
              {/* <div> */}
                {/* <h3>Yes</h3> */}
                {/* <Checkbox {...label} onChange={(event) => isCult(event)} value="true" /> */}

                <FilterCheckbox
                  label="yes"
                  checked={selectedCult.includes(true)}
                  onChange={() => handleCultChange(true)}
                />

              {/* </div> */}

              <FilterCheckbox
                  label="no"
                  checked={selectedCult.includes(false)}
                  onChange={() => handleCultChange(false)}
                />

              {/* <div>
                <h3>No</h3>
                <Checkbox {...label} onChange={(event) => isCult(event)} value="false" />
              </div> */}
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
          {/* {showMovies} */}
          <MovieList data={Dati} selectedCategories={selectedCategories} selectedCult={selectedCult} />
        </div>
      </div>
    </>
  )
}

export default App
