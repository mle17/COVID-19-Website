import React from 'react';
import TextField from '@material-ui/core/TextField';

class NumberDaysQuarantinedForm extends React.Component {
  render() {
   return (
    <TextField 
      id="standard-number" 
      label="Day(s)" 
      type="number" 
      InputLabelProps={{
        shrink: true,
      }} 
    />);
  }
}

export default NumberDaysQuarantinedForm;