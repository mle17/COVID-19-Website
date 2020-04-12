import React from 'react';
import TextField from '@material-ui/core/TextField';

export function GetNumberDaysQuarantined() {
  return (<TextField 
    id="standard-number" 
    label="Day(s)" 
    type="number" 
    InputLabelProps={{
      shrink: true,
    }} 
  />);
}
