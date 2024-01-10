import React from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import GetPost from "./components/GetPost";
import ExtraReducerComponent from "./components/ExtraReducerComponent";
function App() {
  return (
    <div className="App">
     Hello
     <Counter/>
     <Todo/>
     {/* <GetPost/> */}
     <ExtraReducerComponent/>
    </div>
  );
}

export default App;
