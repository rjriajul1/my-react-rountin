import { Suspense } from "react";
import "./App.css";
import DaisyuiNav from "./components/DaisyuiNav/DaisyuiNav";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";

const promiseData = fetch('pricing.json').then(res=>res.json())

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      
      </header>
      <main>
      <Suspense fallback={<span className="loading loading-spinner text-accent"></span>}>
      <Pricing promiseData={promiseData}></Pricing>
      </Suspense>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
