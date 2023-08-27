import React, { useState } from "react";
import Input from "./components/input"
import Counter from "./components/Counter"
import ClassCounter from "./components/ClassCounter";
function App() {
  const [value, setValue] = useState()
  return (
    <div className="App">
      <ClassCounter/>
    </div>
  );
}

export default App;
