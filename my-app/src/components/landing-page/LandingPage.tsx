import React from "react";
import { Grid } from "@material-ui/core";
import IntroInfo from "./IntroInfo";
import logo from "../../logo.svg";
import PredictInfo from "./PredictionInfo";

class LandingPage extends React.Component {
    render() {
        return (
            <div style = 
            {{
                height:"100vh"
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
                </Grid>
            </div>)
    }
}

export default LandingPage;