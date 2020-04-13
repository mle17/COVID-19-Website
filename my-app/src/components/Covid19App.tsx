import React from "react";
import UsStatesForm from "./UsStatesForm";
import NumberDaysQuarantinedForm from "./NumberDaysQuarantinedForm";

interface IStateResult {
    name: string,
    abbreviation: string,
    territory: boolean,
    capital: string,
    contiguous: boolean,
}

interface IState {
    isInputFormComplete: boolean,
    numDays: string,
    state: string | null
}

class Covid19App extends React.Component<{}, IState> {
    constructor(props: Readonly<{}>) {
        super(props);

        this.state = {
            isInputFormComplete: false,
            numDays: "7",
            state: null
        };

        this.handleDaysChange = this.handleDaysChange.bind(this);
    }

    handleDaysChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({numDays:event.target.value});
    }

    handleCountryChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({state: event.target.value});
    }

    render() {
        console.log(this.state.numDays);
        console.log(this.state.state);
        return (
        <div>
            <UsStatesForm OnSelectHandler={this.handleCountryChange}/>
            <NumberDaysQuarantinedForm OnChangeHandler={this.handleDaysChange}/>
        </div>)
    }
}

export default Covid19App;