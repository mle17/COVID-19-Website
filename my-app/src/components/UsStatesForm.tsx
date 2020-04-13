import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { NonTerritoryStates } from '../constants/UsStateConstants';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   option: {
//     fontSize: 15,
//     '& > span': {
//       marginRight: 10,
//       fontSize: 18,
//     },
//   },
// });

// this.classes = useStyles();

class UsStatesForm extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
}

  render() {
    return (
    <Autocomplete 
      id="country-select-demo" 
      style={{ width: 300 }} 
      options={NonTerritoryStates} 
      // classes={{
      //   option: this.classes.option,
      // }} 
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
        />)
      } 
    />);
  }
}

export default UsStatesForm;