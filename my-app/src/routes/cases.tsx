import { NovelCovid, State } from 'novelcovid';
import { RTValueByState } from '../data/r_t_by_state';

/**
 * Gets COVID-19 data for a U.S. state.
 * 
 * @param inputState Takes in full state name (ex: "California").
 * @returns State data class.
 */
async function getCasesForState(inputState: string) {
    // Call module to get state data.
    const track: NovelCovid = new NovelCovid();
    const statesData: State[] = await track.states();
    const selectedStateData: State | undefined = statesData.find(sData => sData.state === inputState);

    // Return state data if it exists. Else, throw error.
    if (selectedStateData === undefined)
    {
        throw new Error(`Cound not find data for this state: ${inputState}`);
    }

    return selectedStateData;
}

/**
 * 
 * @param usState 
 * @param numDays 
 */
function getFutureNumInfected(usState: string | undefined, numDays: number) {
    if (usState === undefined) {
        return NaN;
    }

    // Getting values for formula.
    console.log(usState);
    const rtValue: number = RTValueByState[usState];

    const numInfectedAtZeroDays: number = getValueOfIntegratedFormula(0, rtValue);
    const numInfectedAtNumDays: number = getValueOfIntegratedFormula(numDays, rtValue);

    // Calculating predicted infected.
    const futureNumInfected: number = numInfectedAtNumDays - numInfectedAtZeroDays;
    const truncatedFutureNumInfected: string = futureNumInfected.toFixed(2);

    return truncatedFutureNumInfected;
}

function getValueOfIntegratedFormula(numDays: number, rtValue: number) {
    const infectionPeriodInDays: number = 7;
    const numInfectionPeriods: number = numDays / infectionPeriodInDays;

    const futureNumInfectedAtNumDays: number 
        = Math.pow(rtValue, numInfectionPeriods) / Math.log(rtValue);

    return futureNumInfectedAtNumDays;
}

export { 
    getCasesForState,
    getFutureNumInfected,
};