import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { AutocompleteChangeReason } from '@material-ui/lab/Autocomplete';
import { NonTerritoryStates } from '../constants/UsStateConstants';
import { IStateResult } from "../interfaces/interfaces";

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

interface OnSelectProps {
  OnSelectHandler?: (
    event: React.ChangeEvent<{}>, 
    value: IStateResult | null,
    reason: AutocompleteChangeReason) => void
}

class UsStatesForm extends React.Component<OnSelectProps> {
  render() {
    return (
    <Autocomplete<IStateResult> 
      id="state-select-demo" 
      style={{ 
        width: 300,
        outlineColor: "#ff7b5b",
      }} 
      options={NonTerritoryStates} 
      // classes={{
      //   option: this.classes.option,
      // }} 
      autoHighlight 
      getOptionLabel={(option) => option.name} 
      renderOption={(option) => 
        (<React.Fragment>
          {option.name}
        </React.Fragment>)} 
      onChange={this.props.OnSelectHandler}
      renderInput={(params) => 
        (<TextField 
          {...params} 
          label="Select your state" 
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