import { Suspense } from "react";
import "./App.css";
import Countries from "./Components/Countries/Countries";
import Country from "./Components/Country/Country";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<p>Nadir Loading . . . </p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>

      {/* <Suspense fallback={<p>Countries are loading . . . .</p>}>
        <Country></Country>
      </Suspense> */}
    </>
  );
}

export default App;
