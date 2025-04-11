import { useReducer } from "react";
import Home from "../src/components/Home";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      if (state.count > 0) {
        return { count: state.count - 1 };
      }
      break;
    default:
      return state;
  }
}

function App() {
  // const [count, Setcount] = useState(0);
  const [state, disPatch] = useReducer(reducer, { count: 0 });

  const increaseCount = () => {
    disPatch({ type: "increment" });
  };

  const decrementcount = () => {
    disPatch({ type: "decrement" });
  };

  return (
    <>
      <div>
        <h1>
          <button onClick={increaseCount}>+</button>
          <button onClick={decrementcount}>-</button>
          {state.count}
          <Home />
        </h1>
      </div>
    </>
  );
}

export default App;
