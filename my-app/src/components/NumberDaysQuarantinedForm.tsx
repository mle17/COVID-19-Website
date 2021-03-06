import React from 'react';
import TextField from '@material-ui/core/TextField';

interface OnChangeProps {
  OnChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

class NumberDaysQuarantinedForm extends React.Component<OnChangeProps> {
  render() {
   return (
    <TextField 
      id="standard-number" 
      label="Day(s) distanced" 
      type="number"
      defaultValue={7}
      InputLabelProps={{
        shrink: true,
      }}
      onChange={this.props.OnChangeHandler}
    />);
  }
}

export default NumberDaysQuarantinedForm;