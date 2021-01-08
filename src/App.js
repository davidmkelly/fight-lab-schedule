import React from "react";

import styles from "./App.module.scss";
import Navigation from "./Navigation/Navigation";
import Calendar from "./Calendar/Calendar";
import MobileNavigation from "./Navigation/MobileNavigation/MobileNavigation";

const App = () => {
  return (
    <>
      <MobileNavigation />
      <Navigation />
      <Calendar />
    </>
  );
};

export default App;
