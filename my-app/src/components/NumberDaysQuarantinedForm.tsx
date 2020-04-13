import React from 'react';
import TextField from '@material-ui/core/TextField';

interface OnChangeProps {
  OnChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

class NumberDaysQuarantinedForm extends React.Component {
  OnChangeProps!: OnChangeProps;

  constructor(props: OnChangeProps) {
    super(props);
    
    this.OnChangeProps = props;
  }

  render() {
   return (
    <TextField 
      id="standard-number" 
      label="Day(s)" 
      type="number"
      defaultValue={7}
      InputLabelProps={{
        shrink: true,
      }}
      onChange={this.OnChangeProps.OnChangeHandler}
    />);
  }
}

export default NumberDaysQuarantinedForm;