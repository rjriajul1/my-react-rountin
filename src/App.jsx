import { Suspense } from "react";
import "./App.css";
import DaisyuiNav from "./components/DaisyuiNav/DaisyuiNav";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import ResultChart from "./components/ResultChart/ResultChart";

const promiseData = fetch('pricing.json').then(res=>res.json())

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      
      </header>
      <main>
      <Suspense fallback={
        <p className="loading loading-spinner w-10 mx-auto text-accent"></p>
        }>
      <Pricing promiseData={promiseData}></Pricing>
      </Suspense>

      <ResultChart></ResultChart>


      </main>
      <footer></footer>
    </>
  );
}

export default App;
