import { useState } from "react";
import SignupForm from "./component/Inputs/SignupForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SignupForm />
    </div>
  );
}

export default App;
