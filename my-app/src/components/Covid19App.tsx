import React from "react";
import UsStatesForm from "./UsStatesForm";
import NumberDaysQuarantinedForm from "./NumberDaysQuarantinedForm";
import { AutocompleteChangeReason } from "@material-ui/lab/Autocomplete";
import { IStateResult } from "../interfaces/interfaces";
import ResultsDisplay from "./ResultsDisplay";
import { Grid } from "@material-ui/core";

interface IState {
    isInputFormComplete: boolean,
    numDays: string,
    usState: string | undefined
}

class Covid19App extends React.Component<{}, IState> {
    constructor(props: Readonly<{}>) {
        super(props);

        this.state = {
            isInputFormComplete: false,
            numDays: "7",
            usState: undefined
        };

        this.handleDaysChange = this.handleDaysChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
    }

    handleDaysChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({numDays:event.target.value});
    }

    handleCountryChange(
        event: React.ChangeEvent<{}>, 
        value: IStateResult | null,
        reason: AutocompleteChangeReason) {
            this.setState({
                usState: value?.name,
                isInputFormComplete: true
            });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid container xs={12} justify="center" alignItems="center" alignContent="center">
                        <UsStatesForm
                            OnSelectHandler={this.handleCountryChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <NumberDaysQuarantinedForm 
                            OnChangeHandler={this.handleDaysChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ResultsDisplay 
                            numDays={this.state.numDays} 
                            usState={this.state.usState}
                        />
                    </Grid>
                </Grid>
            </div>)
    }
}

export default Covid19App;