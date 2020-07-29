import React from "react";
import NumberDaysQuarantinedForm from "../NumberDaysQuarantinedForm";
import { AutocompleteChangeReason } from "@material-ui/lab/Autocomplete";
import { IStateResult } from "../../interfaces/interfaces";
import ResultsDisplay from "../ResultsDisplay";
import { Grid } from "@material-ui/core";
import IntroInfo from "./IntroInfo";
import logo from "../../logo.svg";

interface IState {
    isInputFormComplete: boolean,
    numDays: string,
    usState: string | undefined
}

class LandingPage extends React.Component<{}, IState> {
    constructor(props: Readonly<{}>) {
        super(props);

        this.state = {
            isInputFormComplete: false,
            numDays: "7",
            usState: undefined
        };

        this.handleDaysChange = this.handleDaysChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
    }

    handleDaysChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({numDays:event.target.value});
    }

    handleStateChange(
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
            <div style = {{height:"100vh"}}>
                <Grid container spacing={3}>
                    <Grid container xs={6}>
                        <IntroInfo />
                    </Grid>
                    <Grid item xs={6}>
                        <img src={logo} className="App-logo" alt="logo" />
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

export default LandingPage;