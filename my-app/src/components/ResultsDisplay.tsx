import React from 'react';
import Box from '@material-ui/core/Box/Box';
import { getFutureNumInfected } from '../routes/cases';

interface IResultsInput {
    numDays: string,
    usState: string | undefined
}

class ResultsDisplay extends React.Component<IResultsInput> {
    constructor(props: IResultsInput) {
      super(props);
    }

    render() {
        const usState: string | undefined = this.props.usState;
        const numDays: number = parseInt(this.props.numDays);

        const futureNumInfected = getFutureNumInfected(usState, numDays);
        console.log("Num infected " + futureNumInfected);

        return (
            <div >
                After {this.props.numDays} days of physically distancing, 
                you would prevent {futureNumInfected} person(s) from getting infected.
            </div>
        )
    }
}

export default ResultsDisplay;