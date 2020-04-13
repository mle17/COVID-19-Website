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
    numDays: string
}

class Covid19App extends React.Component<{}, IState> {
    constructor(props: Readonly<{}>) {
        super(props);

        this.state = {
            isInputFormComplete: false,
            numDays: "7"
        };

        this.handleDaysChange = this.handleDaysChange.bind(this);
    }

    handleDaysChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({numDays:e.target.value});
    }

    render() {
        console.log(this.state.numDays);
        return (
        <div>
            <UsStatesForm />
            <NumberDaysQuarantinedForm OnChangeHandler={this.handleDaysChange}/>
        </div>)
    }
}

export default Covid19App;