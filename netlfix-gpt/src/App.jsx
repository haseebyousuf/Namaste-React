import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appStore from "./state/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
