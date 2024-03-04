import { useState, useEffect } from "react";

const MyAlert = () => {

    //setting a variable to check when timer is over in order to make the message disappear.
    const [timeIsUp, setTimeIsUp] = useState(false);
    const [counter, setCounter] = useState(5);
    useEffect(() => {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      counter === 0 && setTimeIsUp(true)
      //counter changes every seconds and enables the function at every change of its state.
    }, [counter], []);

    if (timeIsUp) {
      return null;
    }
  
    return (
      <div data-testid = 'welcome-component'>
          <h3 className="d-flex align-items-center justify-content-center">
            Welcome in Epibooks!
          </h3>
          <p className="d-flex align-items-center justify-content-center">
            This message will disappear in {counter}s
          </p>
      </div>
    ) 
}
    

export default MyAlert;