import React from "react";
import { screen, render } from '@testing-library/react';
import Welcome from "./Welcome";
import MyAlert from "../MyAlert/MyAlert";
import MyTitle from "../MyTitle/MyTitle";


test("check if all parts of welcome components appear", () => {
    render(<Welcome />)

    const istilldunno = screen.queryAllByTestId('welcome-component')

    expect(istilldunno).not.toBeEmptyDOMElement

})