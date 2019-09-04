import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">{routes}</div>
      </HashRouter>
    </Provider>
  );
}

export default App;
