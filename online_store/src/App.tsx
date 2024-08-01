import 'bootstrap/dist/css/bootstrap.min.css';  
import { ReactElement } from "react";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

const App = () : ReactElement => {
  return (
    <div>
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;