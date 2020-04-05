import { NovelCovid, State } from 'novelcovid';

/**
 * Gets COVID-19 data for a U.S. state.
 * 
 * @param inputState Takes in full state name (ex: "California").
 * @returns State data class.
 */
async function getCasesForState(inputState: string)
{
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

export default getCasesForState;