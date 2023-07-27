import React from 'react';
import Checkbox from '@mui/material/Checkbox';

function FilterCheckbox(props) {
  return (
    <div>
      <Checkbox checked={props.checked} onChange={props.onChange} />
      {props.label}
    </div>
  );
};

export default FilterCheckbox;
