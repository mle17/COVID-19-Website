import React from "react";
import UsStatesForm from "./UsStatesForm";
import { NumberDaysQuarantinedForm } from "./NumberDaysQuarantinedForm";

class Covid19App extends React.Component {
    render() {
        return (
        <div>
            <UsStatesForm />
            <NumberDaysQuarantinedForm />
        </div>)
    }
}

export default Covid19App;