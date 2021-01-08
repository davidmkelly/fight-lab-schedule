import React from "react";

import styles from "./App.module.scss";
import Navigation from "./Navigation/Navigation";
import Calendar from "./Calendar/Calendar";

const App = () => {
  return (
    <>
      <Navigation />
      <Calendar />
    </>
  );
};

export default App;
