import AccountActivationPage from "./pages/AccountActivationPage";
import SignUpPage from "./pages/SignUpPage";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="container">
      <Route exact path="/" component={HomePage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/activate/:token" component={AccountActivationPage} />
    </div>
  );
}

export default App;
