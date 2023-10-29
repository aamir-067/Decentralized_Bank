import { Outlet } from "react-router-dom";
import { Footer, Home, Navbar, Stack, Withdraw} from "./components/index";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
