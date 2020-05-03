import React from "react";
import UsStatesForm from "./UsStatesForm";
import NumberDaysQuarantinedForm from "./NumberDaysQuarantinedForm";
import { AutocompleteChangeReason } from "@material-ui/lab/Autocomplete";
import { IStateResult } from "../interfaces/interfaces";
import ResultsDisplay from "./ResultsDisplay";

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
                <UsStatesForm OnSelectHandler={this.handleCountryChange}/>
                <NumberDaysQuarantinedForm OnChangeHandler={this.handleDaysChange}/>
                <ResultsDisplay 
                    numDays={this.state.numDays} 
                    usState={this.state.usState}
                />
            </div>)
    }
}

export default Covid19App;