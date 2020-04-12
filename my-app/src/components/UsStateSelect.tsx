import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { NonTerritoryStates } from './UsStateConstants';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    option: {
      fontSize: 15,
      '& > span': {
        marginRight: 10,
        fontSize: 18,
      },
    },
  });

export default function UsStateSelect() {
  const classes = useStyles();

  return (
    <Autocomplete 
    id="country-select-demo" 
    style={{ width: 300 }} 
    options={NonTerritoryStates} 
    classes={{
      option: classes.option,
    }} 
    autoHighlight 
    getOptionLabel={(option) => option.name} 
    renderOption={(option) => 
      (<React.Fragment>
        <span>{option.abbreviation}</span>
        {option.name}
      </React.Fragment>)} 
      
    renderInput={(params) => 
      (<TextField {...params} 
        label="Choose a state" 
        variant="outlined" 
        inputProps={{
          ...params.inputProps,
        autoComplete: 'new-password',
        }} 
      />)} 
    />);
}
