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

    const numDaysForPowerChange: number = 7;
    const numOfPowerChanges = numDays / numDaysForPowerChange;
    console.log(usState);
    const rtValue = RTValueByState[usState];

    const futureNumInfected = (1 + Math.pow(rtValue, numOfPowerChanges))
        .toFixed(2);

    return futureNumInfected;
}

function getCountiesFromState(usState: string | undefined) {
}

export { 
    getCasesForState,
    getFutureNumInfected,
    getCountiesFromState
};