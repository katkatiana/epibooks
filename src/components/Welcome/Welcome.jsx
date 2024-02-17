import MyTitle from "../MyTitle/MyTitle";
import MyAlert from "../MyAlert/MyAlert"
import React from "react";

const Welcome = () => {
    return (
        <React.Fragment>
            <MyAlert />
            <MyTitle />
        </React.Fragment>
    )
}

export default Welcome;