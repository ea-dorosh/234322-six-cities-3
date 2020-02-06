import React from "react";
import Main from "../main/main.jsx";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {advertsCount} = props;

  return (
    <Main advertsCount = {advertsCount}/>
  );
};


export default App;
