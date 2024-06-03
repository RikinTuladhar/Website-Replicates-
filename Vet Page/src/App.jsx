import "./App.css";
import NavBar from "./component/NavBar";
import TopHeader from "./component/TopHeader";
import Fifth from "./container/Fifth";
import First from "./container/First"
import Fourth from "./container/Fourth";
import Second from "./container/Second";
import Sixth from "./container/Sixth";
import Third from "./container/Third";
function App() {

  return <>
  <TopHeader/>
  <NavBar/>
  <First/>
  <div className="bg-[#f5fafa] gap-y-5 py-32 flex-wrap flex items-center justify-around">
    <Second/>
    <Third/>
  </div>
  <Fourth/>
  <Fifth/>
  <Sixth/>
  </>;
}

export default App;
