import { useState } from 'react'
import './App.css'
import Dati from './Dati.json';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import MovieList from './MovieList.jsx';
import FilterCheckbox from './FilterCheckbox.jsx';


function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCult, setSelectedCult] = useState([]);
  const [selectedSuccess, setSelectedSuccess] = useState([]);

  //FILTRA CATEGORY
  function handleCategoryChange(category){
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  //FILTRA CULT
  function handleCultChange(cult){
    if (selectedCult.includes(cult)) {
      setSelectedCult(selectedCult.filter((cat) => cat !== cult));
    } else {
      setSelectedCult([...selectedCult, cult]);
    }
  };

  //FILTRA SUCCESS
  function handleSuccessChange(success){
    if (selectedSuccess.includes(success)) {
      setSelectedSuccess(selectedSuccess.filter((cat) => cat !== success));
    } else {
      setSelectedSuccess([...selectedSuccess, success]);
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

                <FilterCheckbox
                  label="yes"
                  checked={selectedCult.includes("yes")}
                  onChange={() => handleCultChange("yes")}
                />

              <FilterCheckbox
                  label="no"
                  checked={selectedCult.includes("no")}
                  onChange={() => handleCultChange("no")}
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
            <Typography>Successful Movies</Typography>
          </AccordionSummary>
          <AccordionDetails>

            <div className='check-container-mini'>


              <FilterCheckbox
                label="yes"
                checked={selectedSuccess.includes("yes")}
                onChange={() => handleSuccessChange("yes")}
              />

              {/* </div> */}

              <FilterCheckbox
                  label="no"
                  checked={selectedSuccess.includes("no")}
                  onChange={() => handleSuccessChange("no")}
              />


            </div>

          </AccordionDetails>
        </Accordion>
      </div>

        <div className='card-container'>
          <MovieList data={Dati} selectedCategories={selectedCategories} selectedCult={selectedCult} selectedSuccess={selectedSuccess} />
        </div>
      </div>
    </>
  )
}

export default App
