import React from "react";
import UsStatesForm from "./UsStatesForm";
import NumberDaysQuarantinedForm from "./NumberDaysQuarantinedForm";

class Covid19App extends React.Component {
    constructor(props: Readonly<{}>) {
        super(props);

        this.state = {
            isInputFormComplete: false,
            usState: {},
            numDays: 7
        };
    }

    handleDaysChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState(
            {
                numDays:e.target.value
            });
    }

    render() {
        return (
        <div>
            <UsStatesForm />
            <NumberDaysQuarantinedForm />
        </div>)
    }
}

export default Covid19App;