import Navigation from "./components/navigation";
import { Outlet} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Outlet />  
    </div>
  );
}

export default App;
