import React from "react";
import { Grid, Box } from "@material-ui/core";
import IntroInfo from "./IntroInfo";
import logo from "../../images/people_icon.png";
import PredictInfo from "./PredictionInfo";
import Covid19App from "../Covid19App";

class LandingPage extends React.Component {
    render() {
        return (
            <div style = 
            {{
                height: "120vh",
            }}>
                <Grid container spacing={3}>
                    <Grid container item xs={6}>
                        <IntroInfo />
                    </Grid>
                    <Grid container item xs={6}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Grid>
                    <Grid container item md={12} justify="center">
                        <PredictInfo />
                    </Grid>
                    <Grid >
                        <Box p={2}></Box>
                        <Covid19App></Covid19App>
                    </Grid>
                </Grid>
            </div>)
    }
}

export default LandingPage;