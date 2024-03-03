import MyTitle from "../MyTitle/MyTitle";
import MyAlert from "../MyAlert/MyAlert"
import React from "react";

const Welcome = () => {
    return (
        <React.Fragment>
            <MyAlert data-testid = 'welcome-component' />
            <MyTitle data-testid = 'welcome-component' />
        </React.Fragment>
    )
}

export default Welcome;