import "./App.css";
import Dashboard from "./Components/main/Dashboard";
import Sidebar from "./Components/main/Sidebar";

function App() {
  return (
    <div className="flex">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <Dashboard />
    </div>
  );
}

export default App;
