import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";

const App = () => {

  const [tours, setTours] = useState(data);

  return (
    <div>
      <h2>Plan With Love</h2>
      <Tours tours ={tours}></Tours>
    </div>
  );
};

export default App;