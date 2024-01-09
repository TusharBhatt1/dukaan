import "./App.css";
import Dashboard from "./Components/main/Dashboard";
import Sidebar from "./Components/main/Sidebar";
import SidebarSm from "./Components/main/SidebarSm";

function App() {
  return (
    <div className="flex">
      <div>
        <SidebarSm/>
        <Sidebar />
      </div>
      <Dashboard />
    </div>
  );
}

export default App;
