import "./App.css";
import Main from "./components/Main";
import NavMenu from "./components/NavMenu";
import Sidebar from "./components/Sidebar";
import SideNav from "./components/SideNav";
function App() {
  return (
    <div className="grid grid-cols-[80px_385px_auto] grid-rows-[90px_auto] h-screen">
      <NavMenu />
      <SideNav />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
